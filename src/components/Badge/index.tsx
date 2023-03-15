import styles from './styles.module.scss';

interface IBadge {
    text: string;
    color: string
}

function Badge({ text, color }: IBadge) {
  return (
    <div className={styles.root}>
      {text}
    </div>
  );
}

export default Badge;
