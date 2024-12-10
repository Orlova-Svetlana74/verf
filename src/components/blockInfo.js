import React from 'react';
import s from './blockInfo.module.css';
import image1 from '../img/obgiy_vid_chelovek.png';
import image2 from '../img/verf_obzor.JPG';

const Blockinfo = () => {
  return (
    <section className={s.info}>
      <div className={s.info_block}>
        <div className={s.text_block}>
          <h3>Ваша мечта</h3>
          <p>
            о собственноручно построенной лодке может оказаться реальностью. Мы
            предлагаем Вам уникальную возможность: постройте лодку своей мечты,
            используя наше профессиональное оборудование и опыт.
          </p>
          <p>
            Наша мастерская готова распахнуть свои двери и предоставить все
            необходимое: от инструментов до консультаций.{' '}
          </p>
        </div>
        <img className={s.imag} src={image1} alt="imag" />
      </div>
      <div className={s.info_block}>
        <div className={s.text_block}>
          <h3>Мы предлагаем</h3>
          <p>
            уникальную услугу - разработку и строительство каноэ, каяка, лодки,
            швертбота и SUP доски по индивидуальному заказу или по
            проекту,который уже зарекомендовал себя на воде.
          </p>
          <p>
            Каждый проект начинается с тщательного планирования, учитывая
            пожелания заказчика и особенности использования судна.
          </p>
        </div>
        <img className={s.imag} src={image2} alt="imag" />
      </div>
      {/* <div className={s.info_block}>
        <div className={s.text_block}>
          Судостроение - это искусство,требующее высокой точности и внимания к
          деталям,глубоких технических знаний в области инженерии,
          материаловедения и т.д. На нашей верфи каждое судно создается с учетом
          индивидуальных потребностей заказчика, будь то рыболовные лодки,каяки
          или швертботы для прогулок.
        </div>
        <img className={s.imag} src={image3} alt="imag" />
      </div>{' '}
      <div className={s.info_block}>
        <div className={s.text_block}>
          Наша команда профессионалов сочетает проверенные временем техники
          судостроения с современными материалами и технологиями, чтобы
          обеспечить безопасность и комфорт в эксплуатации, долговечность для
          всех наших судов.
        </div>
        <img className={s.imag} src={image4} alt="imag" />
      </div> */}
    </section>
  );
};
export default Blockinfo;
