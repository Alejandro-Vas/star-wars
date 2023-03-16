import { forwardRef } from 'react';
import closeIcon from 'assets/icons/close.svg';
import styles from './styles.module.scss';

interface IModal {
  onClose: () => void
}

type Ref = HTMLDivElement | null

const Modal = forwardRef<Ref, IModal>(({ onClose }, ref) => (
  <div className={styles.modal}>

    <div className={styles.modalContent} ref={ref}>
      <button
        type="button"
        onClick={onClose}
        className={styles.close}
      >
        &times;

      </button>
      <p>Some text in the Modal..</p>
    </div>

  </div>
));
// const content = useSelector(selectModalContent);

// const clickOutside = (e: MouseEvent<HTMLElement, globalThis.MouseEvent>) => {
//   const target = e.target as HTMLElement;
//   if (
//     target.className === 'modal-window'
//     || target.className === 'closeIcon'
//     || target.className === 'modal__content-wrapper'
//   ) {
//     // closeModal(e);
//   }
// };

export default Modal;
