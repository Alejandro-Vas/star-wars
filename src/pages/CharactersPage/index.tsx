import CharacterItem from 'components/CharacterItem';
import Header from 'components/Header';

import styles from './styles.module.scss';

function CharactersPage() {
  return (
    <div className="container">
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
          <CharacterItem />
        </div>
      </div>
    </div>
  );
}

export default CharactersPage;
