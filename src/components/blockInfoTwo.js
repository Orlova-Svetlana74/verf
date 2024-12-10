import React from 'react';
import s from './blockInfoTwo.module.css';
// import image1 from '../img/obgiy_vid_chelovek.png';
// import image2 from '../img/verf_obzor.JPG';
import image3 from '../img/banki_shvertbot.JPG';
import image4 from '../img/rabota_verf.JPG';

const BlockinfoTwo = () => {
  return (
    <section className={s.info}>
      {/* <div className={s.info_block}>
        <div className={s.text_block}>
          <h3>Ваша мечта</h3>
          <p>
            о собственноручно построенной лодке может оказаться реальностью. Мы
            предлагаем Вам уникальную возможность: постройте лодку своей мечты,
            используя наше профессиональное оборудование и опыт. Наша мастерская
            готова распахнуть свои двери и предоставить все необходимое: от
            инструментов до консультаций.{' '}
          </p>
        </div>
        <img className={s.imag} src={image1} alt="imag" />
      </div> */}
      {/* <div className={s.info_block}>
        <div className={s.text_block}>
          Мы предлагаем уникальную услугу - разработку и строительство каноэ,
          каяка, лодки, швертбота и SUP доски по индивидуальному заказу или по
          проекту,который уже зарекомендовал себя на воде. Каждый проект
          начинается с тщательного планирования, учитывая пожелания заказчика и
          особенности использования судна.
        </div>
        <img className={s.imag} src={image2} alt="imag" />
      </div>       */}
      <div className={s.info_block}>
        <div className={s.text_block}>
          <h3>Судостроение - это искусство,</h3>
          <p>
            требующее высокой точности и внимания к деталям,глубоких технических
            знаний в области инженерии и материаловедения.{' '}
          </p>
          <p>
            На нашей верфи каждое судно создается с учетом индивидуальных
            потребностей заказчика, будь то рыболовные лодки,каяки или швертботы
            для прогулок.
          </p>
        </div>
        <img className={s.imag} src={image3} alt="imag" />
      </div>{' '}
      <div className={s.info_block}>
        <div className={s.text_block}>
          <h3>Наша команда профессионалов</h3>
          <p>
            сочетает проверенные временем техники судостроения с современными
            материалами и технологиями, чтобы обеспечить безопасность и комфорт
            в эксплуатации, долговечность для всех наших судов.
          </p>
        </div>
        <img className={s.imag} src={image4} alt="imag" />
      </div>
    </section>
  );
};
export default BlockinfoTwo;
