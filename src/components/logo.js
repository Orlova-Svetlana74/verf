import React from 'react';
import s from './logo.module.css';
import image from '../img/logo.jpg';

const LogoForm = () => {
  return (
    <div>
      <a href="https://ckboat.ru/">
        <img className={s.logo} src={image} alt="logo" />
      </a>
    </div>
  );
};
export default LogoForm;
