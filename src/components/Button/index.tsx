import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface IButton {
    children: ReactNode
    onClick: () => void;
    variant?: 'yellow' | 'green'
}

function Button({
  children,
  onClick = () => null,
  variant = 'yellow',
}: IButton) {
  const className = `${styles.root} ${variant === 'green' ? styles.green : ''}`;

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
