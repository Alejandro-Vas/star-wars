import CharacterItem from 'components/CharacterItem';
import Header from 'components/Header';
import Modal from 'components/Modal';
import useOnClickOutside from 'hooks/useOnClickOutside';
import {
  RefObject, useCallback, useRef, useState,
} from 'react';

import styles from './styles.module.scss';

const data = Array.from(Array(9).keys());

function CharactersPage() {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(true);

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
            60 Peoples for you to choose your favorite
          </h1>
        </div>

        <div className={styles.filter}>
          color eye
        </div>

        <div className={styles.charactersList}>
          {data.map((el, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <div
              key={i}
              className={styles.character}
              onClick={onOpen}
            >
              <CharacterItem />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CharactersPage;
