import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface IButton {
    text: string;
    to?: string;
    variant?: 'yellow' | 'green';
    center?: boolean;
    onClick?: () => void
    disabled?: boolean | undefined;
}

function Button({
  text,
  variant = 'yellow',
  to,
  center,
  onClick = () => null,
  disabled,
}: IButton) {
  const className = `${styles.root} ${variant === 'green' ? styles.green : ''}`;

  if (to) {
    return (
      <Link to={to} className={center ? styles.center : ''}>
        <button type="button" className={className} disabled={disabled}>
          {text}
        </button>
      </Link>
    );
  }

  return (
    <div className={center ? styles.center : ''}>
      <button type="button" className={className} onClick={onClick} disabled={disabled}>
        {text}
      </button>
    </div>
  );
}

export default Button;
