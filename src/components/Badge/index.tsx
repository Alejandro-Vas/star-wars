import Helpers from 'utils/index';
import styles from './styles.module.scss';

interface IBadge {
    text: string;
    color: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Badge({ text, color }: IBadge) {
  if (!Helpers.isPropertyValid(text)) {
    return null;
  }

  return (
    <div className={styles.root}>
      {text}
    </div>
  );
}

export default Badge;
