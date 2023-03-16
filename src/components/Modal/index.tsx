import { forwardRef } from 'react';
import CloseIcon from 'assets/icons/close.svg';
import hermaphrodite from 'assets/illustrations/hermaphrodite.png';
import Property from 'components/Property';
import styles from './styles.module.scss';
import Badge from '../Badge/index';

interface IModal {
  onClose: () => void
}

const Modal = forwardRef<HTMLDivElement | null, IModal>(({ onClose }, ref) => (
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
            <Badge text="male" color="green" />

            <Badge text="600BBY" color="green" />
          </div>
        </div>

        <div className={styles.rightBlock}>
          <h2 className={styles.title}>
            Jabba Desilijic Tiure
          </h2>

          <div className={styles.description}>
            hair color: brown: brown
            <br />
            skin color - white
            <br />
            hair color: brown
          </div>

          <div className={styles.properties}>
            <div className={styles.property}>
              <Property amount={125} type="height" />
            </div>

            <div className={styles.property}>
              <Property amount={49} type="mass" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
));

export default Modal;
