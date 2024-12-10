import React from 'react';
import s from './userblock.module.css';
import FormRegistration from './formRegistration';

const Userblock = () => {
  return (
    <div className={s.textblock}>
      <div className={s.textstyle}>
        <h2 className={s.texttop}>
          Экспериментальная верфь деревянного судостроения
        </h2>
        <div>
          <p className={s.lodky}>Строим лодки,</p>
          <p className={s.kayki}>Каяки,</p>
          <p className={s.kanoe}>Каноэ,</p>
          <p className={s.shvertboat}>Швертботы</p>
        </div>
      </div>
      <FormRegistration />
      <div className={s.textuser}>
        <ol>
          <li>Вы планируете сами строить свою лодку в нашей мастерской. </li>
          <li>
            Вы хотите заказать проект и строительство лодки у наших мастеров.{' '}
          </li>
          <li>
            Вам необходима наша консультация для принятия верного решения.
          </li>
        </ol>
        <p className={s.textcontent}>
          Заполните нашу форму обратной связи, чтобы мы могли ответить Вам в
          ближайшее время!{' '}
        </p>
      </div>
    </div>
  );
};
export default Userblock;
