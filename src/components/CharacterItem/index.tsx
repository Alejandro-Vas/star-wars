import Badge from 'components/Badge';
import Property from 'components/Property';

import styles from './styles.module.scss';

function CharacterItem() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        Chewbacca
      </div>

      <div className={styles.wrapper}>
        <Property amount={125} type="height" />

        <Property amount={49} type="mass" />
      </div>

      <div className={styles.wrapper}>
        <Badge text="male" color="green" />

        <Badge text="600BBY" color="green" />
      </div>

    </div>
  );
}

export default CharacterItem;
