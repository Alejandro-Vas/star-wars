import { genders } from 'constants/index';
import { memo } from 'react';
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
      case genders.female:
        return styles.female;
      case genders.male:
        return styles.male;
      case genders.hermaphrodite:
        return styles.hermaphrodite;
      default:
        return '';
    }
  };

  const color = getClassNameByColor();

  return (
    <div className={`${styles.root} ${color}`}>
      {text}
    </div>
  );
}

export default memo(Badge);
