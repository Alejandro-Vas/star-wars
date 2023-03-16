import Badge from 'components/Badge';
import Property from 'components/Property';

import styles from './styles.module.scss';
import { ICharacterEntity } from '../../interfaces/index';

interface ICharacterItem {
  character:ICharacterEntity
}

function CharacterItem({ character }:ICharacterItem) {
  const {
    name,
    height,
    mass,
    birth_year: birthYear,
    gender,
  } = character;

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {name}
      </div>

      <div className={styles.wrapper}>
        <Property amount={height} type="height" />

        <Property amount={mass} type="mass" />
      </div>

      <div className={styles.wrapper}>
        <Badge text={gender} color="green" />

        <Badge text={birthYear} color="green" />
      </div>
    </div>
  );
}

export default CharacterItem;
