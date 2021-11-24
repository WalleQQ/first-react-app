import React, { useEffect, useState } from 'react';
import Title from '../components/Title';
import styles from './Example.module.css';

const Example = () => {
  const [randomImg, setRandomImg] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { url } = await fetch('https://random.imagecdn.app/258/258');

        setRandomImg(url);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Идет загрузка...</p>;

  if (error) return <p>Произошло что-то ужасное...Попробуй снова</p>;

  return (
    <section className={styles.example}>
      <Title text='Пример' />
      <p className={styles.example__heading}>Случайное изображение</p>
      {randomImg && (
        <div className={styles.example__imgContainer}>
          <img
            className={styles.example__img}
            src={randomImg}
            alt='Изображение'
          />
        </div>
      )}
    </section>
  );
};

export default Example;
