import { forwardRef } from 'react';
import CloseIcon from 'assets/icons/close.svg';
import hermaphrodite from 'assets/illustrations/hermaphrodite.png';
import Property from 'components/Property';
import Helpers from 'utils';
import styles from './styles.module.scss';
import Badge from '../Badge/index';
import { ICharacterEntity } from '../../interfaces/index';

interface IModal {
  onClose: () => void
  character: ICharacterEntity | null
}

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
                <img src={hermaphrodite} alt="gender" />
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
                  hair color:
                  {' '}
                  {hairColor}
                  <br />
                </>
                )}

                {Helpers.isPropertyValid(skinColor) && (
                <>
                  skin color:
                  {' '}
                  {skinColor}
                  <br />
                </>
                )}
              </div>

              <div className={styles.properties}>
                <div className={styles.property}>
                  <Property amount={height} type="height" />
                </div>

                <div className={styles.property}>
                  <Property amount={mass} type="mass" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  },
);

export default Modal;
