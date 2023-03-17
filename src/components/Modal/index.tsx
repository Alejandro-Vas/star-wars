import { forwardRef } from 'react';
import Property from 'components/Property';
import Badge from 'components/Badge/index';
import { ICharacterEntity } from 'interfaces/index';
import Helpers from 'utils';

import hermaphrodite from 'assets/illustrations/hermaphrodite.png';
import male from 'assets/illustrations/male.png';
import female from 'assets/illustrations/female.png';
import CloseIcon from 'assets/icons/close.svg';
import { genders } from 'constants/index';
import styles from './styles.module.scss';

interface IModal {
  onClose: () => void
  character: ICharacterEntity | null
}

const imgMap = {
  [genders.male]: male,
  [genders.female]: female,
  [genders.hermaphrodite]: hermaphrodite,
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

    if (!character) {
      return null;
    }

    const image = imgMap[gender] || hermaphrodite;

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
                  {`hair color: ${hairColor}`}
                  <br />
                </>
                )}

                {Helpers.isPropertyValid(skinColor)
                  && `skin color: ${skinColor}`}
              </div>

              <div className={styles.properties}>
                {Helpers.isPropertyValid(height) && (
                  <div className={styles.property}>
                    <Property amount={height} type="height" />
                  </div>
                )}

                {Helpers.isPropertyValid(mass) && (
                  <div className={styles.property}>
                    <Property amount={mass} type="mass" />
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
