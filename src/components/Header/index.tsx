import Logo from 'assets/icons/logo.svg';
import { Link, useLocation } from 'react-router-dom';
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
  const { pathname } = useLocation();

  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <Link to="/">
          <Logo />
        </Link>
      </div>

      <div className={styles.menu}>
        {menuItems.map(({ title, path }) => {
          const isActive = pathname === path;

          const className = isActive
            ? `${styles.menuItem} ${styles.active}`
            : styles.menuItem;
          console.log(className);

          return (
            <Link
              to={path}
              className={className}
              key={title}
            >
              {title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Header;
