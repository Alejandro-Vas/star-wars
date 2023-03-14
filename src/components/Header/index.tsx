import Logo from 'assets/icons/logo.svg';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  );
}

export default Header;
