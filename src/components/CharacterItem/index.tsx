import Badge from 'components/Badge';
import Property from 'components/Property';

import { memo } from 'react';
import { ICharacterEntity } from 'interfaces/index';
import useTranslation from 'hooks/useTranslation';
import styles from './styles.module.scss';

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

  const [
    heightText,
    massText,
  ] = useTranslation(['height', 'mass']);

  return (
    <div className={styles.root}>
      <div className={styles.title}>
        {name}
      </div>

      <div className={styles.wrapper}>
        <Property amount={height} type={heightText} />

        <Property amount={mass} type={massText} />
      </div>

      <div className={styles.wrapper}>
        <Badge text={gender} />

        <Badge text={birthYear} />
      </div>
    </div>
  );
}

export default memo(CharacterItem);
