import React from 'react';
import FetchImage from '../../components/FetchImage/FetchImage';
import Title from '../../components/Title/Title';
import styles from './Example.module.css';

const Example = () => {
  return (
    <section className={styles.example}>
      <Title text='Пример' />
      <p className={styles.example__heading}>Случайное изображение</p>
      <FetchImage />
    </section>
  );
};

export default Example;
