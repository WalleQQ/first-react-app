import React from 'react';
import styles from './Title.module.css';

const Title = ({ text }) => {
  return (
    <h2 className={styles.title}>
      <span>{text}</span>
    </h2>
  );
};

export default Title;
