require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// const sequelize = require('./db');
// const models = require('./models/models');
const cors = require('cors');
// const router = require('./routes/index');
// const errorHandler = require('./middleware/ErrorHandllingMiddleware');
// const path = require('path')

const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
const transporter = nodemailer.createTransport({
  service: 'gmail', // Используйте ваш почтовый сервис
  auth: {
    user: 'svetlmama1974@gmail.com', // Ваш email
    pass: 'rgmk pyce dude vfua', // Ваш пароль (или App Password)
  },
});

// Обработка POST-запроса на /api/request
app.post('/api/request', (req, res) => {
  const { name, email, description } = req.body;

  const mailOptions = {
    from: email,
    to: 'svetlmama1974@gmail.com', // Email администратора
    subject: `Новая заявка от ${name}`,
    text: `Имя: ${name}\nEmail: ${email}\nОписание: ${description}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Заявка отправлена!');
  });
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

// app.use(express.json());
// app.use('/api', router);

// app.use(errorHandler);
// app.listen(PORT, () =>
//   console.log(`Сервер запущен на http://localhost:${PORT}`)
// );
// const start = async () => {
//   try {
//     await sequelize.authenticate();
//     await sequelize.sync();
//     app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
//   } catch (e) {
//     console.log(e);
//   }
// };
// start();

// Middleware для парсинга JSON
// app.use(bodyParser.json());
// Настройка подключения к PostgreSQL
// const pool = new Pool({
//   user: 'postgres', // Замените на ваше имя пользователя
//   host: 'localhost', // Замените на хост вашего PostgreSQL сервера
//   database: 'verf', // Замените на имя вашей базы данных
//   password: 'svetlana', // Замените на ваш пароль
//   port: 5432, // Порт по умолчанию для PostgreSQL
// });
// Обработка GET-запроса на корень
// app.get('/', (req, res) => {
//   res.send('Добро пожаловать на сервер!');
// });
// Обработка POST-запроса на /api/register
// app.post('/api/register', async (req, res) => {
//   const { name, email } = req.body;
// try {
//   // Запрос для вставки нового пользователя
//   const result = await pool.query(
//     'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
//     [name, email]
//   );
// Отправляем успешный ответ
//     res.status(201).json({
//       message: 'Пользователь зарегистрирован успешно!',
//       user: result.rows[0],
//     });
//   } catch (error) {
//     console.error('Ошибка при регистрации пользователя:', error);
//     res.status(500).json({ message: 'Ошибка при регистрации пользователя' });
//   }
// });
// Запуск сервера
