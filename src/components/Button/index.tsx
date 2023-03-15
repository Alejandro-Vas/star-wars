import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

interface IButton {
    text: string;
    to: string;
    variant?: 'yellow' | 'green';
}

function Button({
  text,
  variant = 'yellow',
  to,
}: IButton) {
  const className = `${styles.root} ${variant === 'green' ? styles.green : ''}`;

  return (
    <button type="button" className={className}>
      <Link to={to}>
        {text}
      </Link>
    </button>
  );
}

export default Button;
