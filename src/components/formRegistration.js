import React, { useState } from 'react';
import s from './formRegistration.module.css';

const Modal = ({ message, onClose }) => {
  return (
    <div className={s.modal}>
      <div className={s.modalContent}>
        <span className={s.close} onClick={onClose}>
          &times;
        </span>
        <p>{message}</p>
      </div>
    </div>
  );
};

const FormRegistration = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false); // Состояние для чекбокса

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      name,
      email,
      description,
    };

    try {
      const response = await fetch('http://localhost:3000/api/request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        setModalMessage('Спасибо! Ваша заявка отправлена!');
      } else {
        setModalMessage('Ошибка при отправке заявки.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      setModalMessage('Ошибка при отправке заявки.');
    }

    // Очистка формы после отправки
    setName('');
    setEmail('');
    setDescription('');
    setIsModalOpen(true); // Открываем модальное окно
    setIsAgreed(false); // Сброс чекбокса
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={s.container}>
      <h2>Свяжитесь с нами!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Ваше имя:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">
            Напишите кратко Ваше предложение, укажите модель лодки, способ связи
            с Вами.{' '}
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="checkbox"
            id="agreement"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            required
          />
          <label htmlFor="agreement">
            Я согласен(а) на обработку персональных данных
          </label>
        </div>
        <button type="submit" className={s.button_bid}>
          Отправить заявку
        </button>
      </form>
      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default FormRegistration;
