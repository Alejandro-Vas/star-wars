import {
  useCallback, useMemo, useRef, useState,
} from 'react';

import CharacterItem from 'components/CharacterItem';
import Header from 'components/Header';
import Modal from 'components/Modal';
import Filter from 'components/Filter';
import Loader from 'components/Loader';
import Button from 'components/Button';

import useOnClickOutside from 'hooks/useOnClickOutside';
import { swApi, useGetCharactersQuery } from 'store/api/swApi';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { ICharacterEntity } from 'interfaces/index';
import { useDispatch } from 'react-redux';
import WookieeButton from 'assets/icons/wookieeButton.svg';
import useActions from 'hooks/useActions';
import useTranslation from 'hooks/useTranslation';
import { filters } from 'constants/index';
import styles from './styles.module.scss';

const languagesMap = {
  english: 'json',
  wookiee: 'wookiee',
} as const;

function CharactersPage() {
  const [page, setPage] = useState(1);

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const [activeCharacter, setActiveCharacter] = useState <ICharacterEntity | null>(null);

  const dispatch = useDispatch();

  const eyeColor = useTypedSelector((state) => state.filter.eyeColor);

  const { language: currentLanguage } = useTypedSelector((state) => state.translation);

  const {
    data, isLoading, isFetching,
  } = useGetCharactersQuery({ page, format: languagesMap[currentLanguage] });
  const { count = 0, results: characters = [] } = data || {};

  const { setLanguage, setActiveFilter } = useActions();

  const filteredCharacters = useMemo(() => {
    if (eyeColor === 'All') return characters;

    return characters?.filter((character) => character.eye_color === eyeColor.toLocaleLowerCase());
  }, [characters, eyeColor]);

  const chars = characters?.map((char) => char.eye_color);

  const list = chars
    ?.filter((x, i, a) => a.indexOf(x) === i)
    .map((char) => char.charAt(0).toUpperCase() + char.slice(1));

  console.log(list);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpen = useCallback((character: ICharacterEntity) => {
    setIsOpen(true);
    setActiveCharacter(character);
  }, []);

  useOnClickOutside(ref, onClose);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleToggleWookiee = () => {
    setPage(1);

    const newLanguage = currentLanguage === 'english' ? 'wookiee' : 'english';
    setLanguage({ language: newLanguage });

    setActiveFilter({ type: 'eyeColor', value: filters[newLanguage].eyeColors[0] });

    dispatch(swApi.util.resetApiState());
  };

  const isAllLoaded = (characters || []).length >= count;

  const [header, language] = useTranslation(['header', 'language']);

  return (
    <div className="container">
      {isOpen && (
        <div id="id">
          <Modal
            onClose={onClose}
            ref={ref}
            character={activeCharacter}
          />
        </div>
      )}

      <Header />

      <div className={styles.root}>
        <div className={styles.language}>
          {language}
          :
          {' '}
          {currentLanguage}
        </div>

        <div className={styles.header}>
          <h1>
            {!!count && count}
            {' '}
            {header}
          </h1>
        </div>

        <div className={styles.filter}>
          <Filter />
        </div>

        {(isLoading)
          ? <Loader />
          : (
            <div className={styles.charactersList}>
              {filteredCharacters?.map((character) => (
                <div
                  key={character.name}
                  className={styles.character}
                  onClick={() => onOpen(character)}
                  onKeyDown={() => null}
                  role="button"
                  tabIndex={-1}
                >
                  <CharacterItem character={character} />
                </div>
              ))}
            </div>
          )}

        {isLoading || isFetching
          ? <Loader />
          : (
            <div className={styles.loadMoreButton}>
              <Button
                onClick={handleLoadMore}
                text={isAllLoaded ? 'All people loaded' : 'Load more'}
                center
                disabled={isLoading || isFetching || isAllLoaded}
              />
            </div>
          )}
        <button
          type="button"
          onClick={handleToggleWookiee}
          className={styles.wookieeButton}
        >
          <WookieeButton />
        </button>
      </div>
    </div>
  );
}

export default CharactersPage;
