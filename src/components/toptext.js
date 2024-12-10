import React from 'react';
import s from './toptext.module.css';
import FormRegistration from '../components/formRegistration';
import DropdownMenu from '../components/dropdown';

const Toptext = () => {
  return (
    <div className={s.fon}>
      <DropdownMenu />
      <p className={s.text_top}>
        Экспериментальная верфь деревянного судостроения
      </p>
      {/* <p className={s.text_top}></p> */}

      {/* <p className={s.text_top}></p>       */}
      <p className={s.text}>
        Строим лодки, каяки, каноэ, швертботы по Вашему индивидуальному проекту
        и по нашим готовым чертежам.
      </p>
      <div className={s.blockcontent}>
        <div>
          <FormRegistration />
        </div>
        {/* <section className={s.fon_gradient}></section> */}
        <div className={s.blocktext}>
          <p className={s.text}>
            Предоставим в аренду наши производственные помещения и оборудование,
            чтобы Вы могли создать свою лодку мечты. Наши мастера-лодочники
            поддержат необходимым советом и консультацией.
          </p>
          <p className={s.text}>
            По всем вопросам обращайтесь к нам, заполнив форму обратной связи.
            Будем рады сотрудничеству!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Toptext;
