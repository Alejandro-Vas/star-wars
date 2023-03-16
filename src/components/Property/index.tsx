import styles from './styles.module.scss';

interface IProperty {
    amount: string;
    type: 'height' | 'mass'
}

function Property({ amount, type }: IProperty) {
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

export default Property;
