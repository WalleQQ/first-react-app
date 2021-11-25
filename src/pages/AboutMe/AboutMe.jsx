import React from 'react';
import Title from '../../components/Title/Title';
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
          В данный момент прохожу обучение на профессию фронтенд-разработчика в
          html academy, закрыл 2 курса по верстке. Получил навыки семантической
          верстки, доступности, методологии БЭМ, использование препроцессора
          SASS, адаптивной верстки. Так же закрыл курс по JavaScript.
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
