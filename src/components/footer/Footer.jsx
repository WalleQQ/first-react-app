import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.pageFooter}>
      <section className={styles.copyright}>
        <p className={styles.copyright__text}>Copyright © 2021</p>
      </section>
    </footer>
  );
};

export default Footer;
