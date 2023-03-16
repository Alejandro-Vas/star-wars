import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface IButton {
    text: string;
    to: string;
    variant?: 'yellow' | 'green';
    center?: boolean;
}

function Button({
  text,
  variant = 'yellow',
  to,
  center,
}: IButton) {
  const className = `${styles.root} ${variant === 'green' ? styles.green : ''}`;

  return (
    <Link to={to} className={center ? styles.center : ''}>
      <button type="button" className={className}>
        {text}
      </button>
    </Link>
  );
}

export default Button;
