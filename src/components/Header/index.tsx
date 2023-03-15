import Logo from 'assets/icons/logo.svg';
import { NavLink } from 'react-router-dom';
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
        <NavLink to="/">
          <Logo />
        </NavLink>
      </div>

      <div className={styles.menu}>
        {menuItems.map(({ title, path }) => (
          <div className={styles.menuItem}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? styles.active : '')}
              key={title}
            >
              {title}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Header;
