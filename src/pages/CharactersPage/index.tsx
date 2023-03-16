import CharacterItem from 'components/CharacterItem';
import Header from 'components/Header';
import Modal from 'components/Modal';
import Filter from 'components/Filter/index';
import useOnClickOutside from 'hooks/useOnClickOutside';
import { useCallback, useRef, useState } from 'react';

import { useGetCharactersQuery } from 'store/api/swApi';

import styles from './styles.module.scss';

function CharactersPage() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const { data } = useGetCharactersQuery();

  const { count = '', results: characters = [] } = data || {};

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  useOnClickOutside(ref, onClose);

  return (
    <div className="container">
      {isOpen && (
        <div id="id">
          <Modal onClose={onClose} ref={ref} />
        </div>
      )}

      <Header />

      <div className={styles.root}>
        <div className={styles.language}>
          language: en
        </div>

        <div className={styles.header}>
          <h1>
            {count}
            {' '}
            Peoples for you to choose your favorite
          </h1>
        </div>

        <div className={styles.filter}>
          <Filter />
        </div>

        <div className={styles.charactersList}>
          {characters?.map((character) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={character.name}
              className={styles.character}
              onClick={onOpen}
              onKeyDown={() => null}
              role="button"
              tabIndex={-1}
            >
              <CharacterItem character={character} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharactersPage;
