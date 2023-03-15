import Logo from 'assets/icons/logo.svg';
import styles from './styles.module.scss';

const menuItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Characters',
    path: 'Characters',
  },
];

function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.menu}>
        {menuItems.map(({ title, path }) => (
          <a href={path} className={styles.menuItem}>
            {title}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
