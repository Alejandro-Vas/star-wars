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
          <Logo className={styles.svg} />
        </NavLink>
      </div>

      <div className={styles.menu}>
        {menuItems.map(({ title, path }) => (
          <div className={styles.menuItem} key={title}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? styles.active : '')}
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
