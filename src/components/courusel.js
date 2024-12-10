import React, { useState } from 'react';
import s from './courusel.module.css';
// import sofkayk from '../img/Sof-kayak-1.jpg';
// import buzan from '../img/buzan.jpg';
// import image2 from './img/image2.jpg';
// import image3 from './img/image3.jpg';
// import image4 from './img/image4.jpg';

const images = [
  {
    src: require('../img/argazi.JPG'),
    model: 'Аргази',
    characteristics: (
      <div className={s.ul}>
        <p className={s.info}>
          Небольшая фанерная моторная лодка построена по технологии сшей-склей.
          Корпус лодки обтянут тканью.Каркас лодки выполнен из легкой древесины.
        </p>
        <p className={s.info}>
          Размеры лодки:
          <li className={s.info}>Длина 4 м</li>
          <li className={s.info}>Ширина 1,5 м</li>
          <li className={s.info}>Осадка 0,15 м</li>
          <li className={s.info}>Фактический вес лодки составил 68 кг</li>{' '}
        </p>
      </div>
    ),
  },
  {
    src: require('../img/anapolis.jpg'),
    model: 'Annapolis Wherry',
    characteristics: (
      <ul className={s.ul}>
        <p className={s.info}>
          Построена по реечной технологии. Лодка отличается красивыми линиями,
          замечательной скоростью и хорошей остойчивостью
        </p>
        <p className={s.info}>
          Лодка создана для прогулок, путешествий и спортивных состязаний. Лодка
          может развивать скорость до 8-9 км/ч
        </p>
        <p className={s.info}>
          Размеры лодки:
          <li className={s.info}>Длина 5,5м</li>
          <li className={s.info}>Ширина 1 м</li>
          <li className={s.info}>Вес лодки 28кг</li>
        </p>
      </ul>
    ),
  },

  {
    src: require('../img/penobscot.jpg'),
    model: 'Швертбот "Penobscot"',
    characteristics: (
      <ul className={s.ul}>
        <p className={s.info}>
          Швертбот строится из влагостойкой фанеры ФСФ 6 мм, обшивка
          стеклотканью.
        </p>
        <p className={s.info}>
          Размеры лодки:
          <li className={s.info}>Длина 4,25м</li>
          <li className={s.info}>Ширина 1,42 м</li>
          <li className={s.info}>Вес лодки 75кг</li>
        </p>
      </ul>
    ),
  },
  //
];
function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className={s.carousel_block}>
      <h2 className={s.title_content}>Наши проекты</h2>
      <div className={s.carousel}>
        <button className={s.carousel_button_left} onClick={prevSlide}>
          &#10094;
        </button>
        <div className={s.carousel_images}>
          <img
            className={s.imgstyl}
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
        <button className={s.carousel_button_right} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      <h2 className={s.info}>{images[currentIndex].model}</h2>
      <p className={s.info}>{images[currentIndex].characteristics}</p>
    </div>
  );
}
export default Carousel;
