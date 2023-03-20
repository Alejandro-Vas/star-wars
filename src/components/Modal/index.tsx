import { forwardRef } from 'react';
import Property from 'components/Property';
import Badge from 'components/Badge/index';
import { ICharacterEntity } from 'interfaces/index';
import Helpers from 'utils';

import hermaphrodite from 'assets/illustrations/hermaphrodite.png';
import male from 'assets/illustrations/male.png';
import female from 'assets/illustrations/female.png';
import CloseIcon from 'assets/icons/close.svg';
import { genders, gendersWookiee } from 'constants/index';
import useTranslation from 'hooks/useTranslation';
import styles from './styles.module.scss';

interface IModal {
  onClose: () => void
  character: ICharacterEntity | null
}

const imgMap = {
  [genders.male]: male,
  [genders.female]: female,
  [genders.hermaphrodite]: hermaphrodite,
  [gendersWookiee.male]: male,
  [gendersWookiee.female]: female,
  [gendersWookiee.hermaphrodite]: hermaphrodite,
};

const Modal = forwardRef<HTMLDivElement | null, IModal>(
  ({ onClose, character }, ref) => {
    const {
      name = '',
      height = '',
      mass = '',
      birth_year: birthYear = '',
      gender = '',
      hair_color: hairColor = '',
      skin_color: skinColor = '',
    } = character || {};

    const [
      heightText,
      massText,
      hairColorText,
      skinColorText,
    ] = useTranslation(['height', 'mass', 'hairColor', 'skinColor']);

    const image = imgMap[gender] || hermaphrodite;

    if (!character) {
      return null;
    }

    return (
      <div className={styles.modal}>
        <div className={styles.modalBody}>
          <div className={styles.buttonWrapper}>
            <div>
              <button
                type="button"
                onClick={onClose}
                className={styles.close}
              >
                <CloseIcon />
              </button>
            </div>
          </div>

          <div className={styles.content} ref={ref}>
            <div className={styles.leftBlock}>
              <div>
                <img src={image} alt="gender" />
              </div>

              <div className={styles.badges}>
                <Badge text={gender} />

                <Badge text={birthYear} />
              </div>
            </div>

            <div className={styles.rightBlock}>
              <h2 className={styles.title}>
                {name}
              </h2>

              <div className={styles.description}>
                {Helpers.isPropertyValid(hairColor) && (
                <>
                  {`${hairColorText}: ${hairColor}`}
                  <br />
                </>
                )}

                {Helpers.isPropertyValid(skinColor)
                  && `${skinColorText}: ${skinColor}`}
              </div>

              <div className={styles.properties}>
                {Helpers.isPropertyValid(height) && (
                  <div className={styles.property}>
                    <Property amount={height} type={heightText} />
                  </div>
                )}

                {Helpers.isPropertyValid(mass) && (
                  <div className={styles.property}>
                    <Property amount={mass} type={massText} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default Modal;
