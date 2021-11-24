import React from 'react';
import Title from '../components/Title';
import styles from './AboutMe.module.css';
import avatar from './avatar.jpg';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <Title text='Обо мне' />
      {/* <h2 className={styles.aboutMe__title}>Обо мне</h2> */}
      <div className={styles.aboutMe__contentContainer}>
        <h3 className={styles.aboutMe__name}>Виталий Драгулин</h3>
        <p className={styles.aboutMe__content}>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
          distinctio.
        </p>
        <div className={styles.aboutMe__avatarContainer}>
          <img
            className={styles.aboutMe__avatar}
            src={avatar}
            width='400'
            height='400'
            alt='Моя фотография'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
