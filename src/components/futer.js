import React from 'react';
import s from './futer.module.css';
import vkpic from '../img/vk_2111765.png';
import ytubpic from '../img/video_15047410.png';
import tgpic from '../img/telegram_2111646.png';
import LogoForm from './logo';

const Futer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.services}>
        <div>
          <LogoForm />
          <p className={s.title_info}>проект-</p>
          <p className={s.title_info}>создание лодки-</p>
          <p className={s.title_info}>полный цикл обслуживания</p>
        </div>
        <div>
          <a className={s.title_footer} href="https://ckboat.ru/">
            https://ckboat.ru/
          </a>
        </div>
        <div>
          <a className={s.title_footer} href="ckboat@ckboat.ru">
          ckboat@ckboat.ru
          </a>
        </div>     
        
        <div className={s.services_compony}>
          <div className={s.title_info}>
            г. Санкт-Петербург, Сестрорецк, Владимирский пр., д.5
          </div>
          <div className={s.title_info}>пн-пт: с 9.00 до 20.00</div>
          <div className={s.title_info}>суб-вскр: с 9.00 до 19.00</div>
        </div>
        <div className={s.services_compony}>
          <div className={s.title_info}>+7 911 216 27 15</div>
          <div className={s.title_info}>+7 911 222 22 22</div>
        </div>
        <div className={s.services_compony}>
          <a className={s.vk} href="https://vk.com/canoe_kayak_boat">
            <img className={s.img_vk} src={vkpic} alt="vk" />
          </a>
          <a className={s.vk} href="https://www.youtube.com/@canoekayakboat">
            <img className={s.img_vk} src={ytubpic} alt="vk" />
          </a>
          <a className={s.vk} href="https://t.me/canoekayakboat">
            <img className={s.img_vk} src={tgpic} alt="vk" />
          </a>
        </div>        
      </div>
    </footer>
  );
};
export default Futer;
