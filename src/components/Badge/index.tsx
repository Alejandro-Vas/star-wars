import Helpers from 'utils/index';
import styles from './styles.module.scss';

interface IBadge {
    text: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Badge({ text }: IBadge) {
  if (!Helpers.isPropertyValid(text)) {
    return null;
  }

  const getClassNameByColor = () => {
    switch (text) {
      case 'female':
        return styles.female;
      case 'male':
        return styles.male;
      case 'hermaphrodite':
        return styles.hermaphrodite;
      default:
        return '';
    }
  };

  const color = getClassNameByColor();

  console.log(color);

  return (
    <div className={`${styles.root} ${color}`}>
      {text}
    </div>
  );
}

export default Badge;
