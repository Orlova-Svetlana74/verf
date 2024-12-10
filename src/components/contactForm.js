import React from 'react';
import s from './contactForm.module.css';
import Futer from './futer';

const ContactForm = () => {
  return (
    <section className={s.forma}>
      <div className={s.forma_contact}>
      <Futer />        
      </div>     
    </section>
  );
};
export default ContactForm;