import Logo from 'assets/icons/logo.svg';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const menuItems = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Characters',
    path: '/characters',
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
          <Link to={path} className={styles.menuItem}>
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
