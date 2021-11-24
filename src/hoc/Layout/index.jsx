import React from 'react';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import styles from './Main.module.css';

export const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.pageMain}>{children}</main>
    <Footer />
  </>
);
