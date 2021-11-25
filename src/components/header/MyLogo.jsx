import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MyLogoSvg from './MyLogoSvg';

const MyLogo = () => {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState();

  useEffect(() => {
    if (location.pathname === '/') setIsHomePage(true);
    else setIsHomePage(false);
  }, [location]);

  return (
    <>
      {isHomePage ? (
        <MyLogoSvg />
      ) : (
        <Link style={{ display: 'flex' }} to='/'>
          <MyLogoSvg />
        </Link>
      )}
    </>
  );
};

export default MyLogo;
