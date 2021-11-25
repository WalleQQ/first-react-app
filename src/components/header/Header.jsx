import React from 'react';
import { Link } from 'react-router-dom';
import MyLogo from '../header/MyLogo';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.pageHeader}>
      <h1 className={styles.hidden}>Traffic isobar</h1>
      <nav className={styles.mainNav}>
        <div className={styles.mainNav__logoContainer}>
          <MyLogo />
        </div>
        <ul className={styles.mainNav__list}>
          <li className={styles.mainNav__item}>
            <Link to='/'>Главная</Link>
          </li>
          <li className={styles.mainNav__item}>
            <Link to='/example'>Пример</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
