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
    <Link to={to}>
      <button type="button" className={className}>
        {text}
      </button>
    </Link>
  );
}

export default Button;
