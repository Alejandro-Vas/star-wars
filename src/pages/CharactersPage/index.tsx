import CharacterItem from 'components/CharacterItem';
import Header from 'components/Header';
import Modal from 'components/Modal';
import Filter from 'components/Filter/index';
import useOnClickOutside from 'hooks/useOnClickOutside';
import {
  useCallback, useMemo, useRef, useState,
} from 'react';

import { useGetCharactersQuery } from 'store/api/swApi';

import Loader from 'components/Loader';
import { useTypedSelector } from 'hooks/useTypedSelector';
import Button from 'components/Button';
import styles from './styles.module.scss';
import { ICharacterEntity } from '../../interfaces/index';

function CharactersPage() {
  const [page, setPage] = useState(1);

  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeCharacter, setActiveCharacter] = useState <ICharacterEntity | null>(null);

  const eyeColor = useTypedSelector((state) => state.filter.eyeColor);

  const { data, isLoading, isFetching } = useGetCharactersQuery({ page });
  const { count = 0, results: characters = [] } = data || {};

  const filteredCharacters = useMemo(() => {
    if (eyeColor === 'All') return characters;

    return characters?.filter((character) => character.eye_color === eyeColor.toLocaleLowerCase());
  }, [characters, eyeColor]);

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

  const isAllLoaded = (characters || []).length >= count;

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
          language: en
        </div>

        <div className={styles.header}>
          <h1>
            {!!count && count}
            {' '}
            Peoples for you to choose your favorite
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

        <div className={styles.button}>
          <Button
            onClick={handleLoadMore}
            text="Load more"
            center
            disabled={isLoading || isFetching || isAllLoaded}
          />
        </div>
      </div>
    </div>
  );
}

export default CharactersPage;
