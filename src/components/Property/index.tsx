import { memo } from 'react';
import Helpers from 'utils';
import styles from './styles.module.scss';

interface IProperty {
    amount: string;
    type: 'height' | 'mass'
}

function Property({ amount, type }: IProperty) {
  if (!Helpers.isPropertyValid(amount)) {
    return null;
  }

  return (
    <div className={styles.root}>
      <div className={styles.amount}>
        {amount}
      </div>

      <div className={styles.type}>
        {type}
      </div>
    </div>
  );
}

export default memo(Property);
