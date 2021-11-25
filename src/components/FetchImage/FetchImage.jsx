import React, { useEffect, useState } from 'react';
import styles from './FetchImage.module.css';

const getImg = async () => {
  return fetch('https://random.imagecdn.app/258/258');
};

const FetchImage = () => {
  const [randomImg, setRandomImg] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const fetchData = async () => {
    try {
      setLoading(true);
      const { url } = await getImg();

      setRandomImg(url);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const onClickHandler = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   if (loading)
  //     return (
  //       <div className={styles.lds__ripple}>
  //         <div></div>
  //         <div></div>
  //       </div>
  //     );

  if (error) return <p>Произошло что-то ужасное...Попробуй снова</p>;
  return (
    <div className={styles.container}>
      <div className={styles.example__imgContainer}>
        {loading ? (
          <div className={styles.lds__ripple}>
            <div></div>
            <div></div>
          </div>
        ) : (
          <img
            className={styles.example__img}
            src={randomImg}
            alt='Изображение'
          />
        )}
      </div>
      <button
        className={styles.example__button}
        onClick={onClickHandler}
        type='button'
        style={{ cursor: loading ? 'progress' : 'pointer' }}
        disabled={loading}>
        Загрузить другую
      </button>
    </div>
  );
};

export default FetchImage;
