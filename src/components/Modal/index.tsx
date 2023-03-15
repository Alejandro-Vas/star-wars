import { MouseEvent } from 'react';
import closeIcon from 'assets/icons/close.svg';
import styles from './styles.module.scss';

interface IModal {
  onClose: () => void
}

function Modal({ onClose }: IModal) {
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

  return (
    <div className={styles.modal}>

      <div className={styles.modalContent}>
        <button onClick={onClose} className={styles.close}>&times;</button>
        <p>Some text in the Modal..</p>
      </div>

    </div>
  );
}

export default Modal;
