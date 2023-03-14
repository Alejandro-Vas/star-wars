import Logo from 'assets/icons/logo.svg';
import styles from './styles.module.scss';

function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>
    </div>
  );
}

export default Header;
