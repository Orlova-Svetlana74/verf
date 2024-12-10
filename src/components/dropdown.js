import React, { useState } from 'react';
import s from './dropdown.module.css'; // Импортируйте CSS стили
import LogoForm from './logo';
const DropdownMenu = () => {
  const [modalContent, setModalContent] = useState(null); // Состояние для хранения контента модального окна

  const handleMenuClick = (content) => {
    setModalContent(content); // Устанавливаем контент модального окна
  };

  const closeModal = () => {
    setModalContent(null); // Закрываем модальное окно
  };

  return (
    <div>
      <nav className={s.navbar}>
        <ul className={s.menu}>
          <LogoForm />
          <li className={s.menu_item} onClick={() => handleMenuClick('goal')}>
            Цель проекта
          </li>
          <li className={s.menu_item} onClick={() => handleMenuClick('about')}>
            О нас
          </li>
          <li
            className={s.menu_item}
            onClick={() => handleMenuClick('services')}>
            Услуги
          </li>
          <li
            className={s.menu_item}
            onClick={() => handleMenuClick('contact')}>
            Контакты
          </li>
        </ul>
      </nav>
      {/* Модальное окно для отображения контента */}
      {modalContent && (
        <div className={s.modal}>
          <div className={s.modal_content}>
            <span className={s.close} onClick={closeModal}>
              &times;
            </span>
            {modalContent === 'goal' && (
              <h2 className={s.menu_item_text}>Цель проекта</h2>
            )}
            {modalContent === 'about' && (
              <h2 className={s.menu_item_text}>О нас</h2>
            )}
            {modalContent === 'services' && (
              <h2 className={s.menu_item_text}>Услуги</h2>
            )}
            {modalContent === 'contact' && (
              <h2 className={s.menu_item_text}>Контакты</h2>
            )}
            <p>
              {modalContent === 'goal' &&
                'Эта современная верфь представляет собой уникальное сочетание инновационных технологий и традиций древних мастеров деревянного судостроения. Судостроение – это искусство, требующее высокой точности и внимания к деталям, глубоких технических знаний в области инженерии, материаловедения и т.д. На нашей верфи каждое судно создается с учетом индивидуальных потребностей заказчика, будь то рыболовные лодки, каяки или швертботы для прогулок. Судоверфь не только способствует развитию местной экономики, создавая рабочие места и привлекая инвестиции, но и сохраняет морскую культуру региона, передавая знания и навыки следующим поколениям мастеров.'}
              {modalContent === 'about' &&
                'На берегу Финского залива в курортном городе Сестрорецке расположилась небольшая экспериментальная верфь. Верфь специализируется на строительстве малых деревянных лодок, швертботов, каяков, яхт.'}
              {modalContent === 'services' &&
                'На нашей верфи вы можете заказать постройку лодки как по готовому, так и по Вашему индивидуальному проекту. Кроме того, мы можем предоставить Вам в ареду наше оборудование и помещение, чтобы Вы своими руками смогли создать лодку своей мечты. Наши мастера-лодочники окажут Вам помощь советом и консультацией. '}
              {modalContent === 'contact' &&
                'Санкт-Петербург, Сестрорецк, пр. Владимирский 4, Телефон: +7 (931) 293-18-00 E-mail:ckboat@ckboat.ru https://ckboat.ru https://t.me/ckboat'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default DropdownMenu;
