// import React from 'react';
// import s from './project.module.css';
// import sofkayk from '../img/Sof-kayak-1.jpg';

// const Project = () => {
//   const handleImageChange = (offset) => {
//     const activeSlide = document.querySelector('[data-active]');
//     const slides = [...document.querySelectorAll('.slide')];
//     const currentIndex = slides.indexOf(activeSlide);
//     let newIndex = currentIndex + offset;

//     if (newIndex < 0) newIndex = slides.lenght - 1;
//     if (newIndex >= slides.lenght) newIndex = 0;
//     console.log(slides);
//     slides[newIndex].dataset.active = true;
//     delete activeSlide.dataset.active;
//   };

//   const onNext = () => handleImageChange(1);
//   const onPrev = () => handleImageChange(-1);

//   return (
//     <section className={s.content} center>
//       <h2 className={s.title_content}>Наши проекты</h2>

//       <div className={s.carousel}>
//         <button className={s.carousel_button.next} onclick="onNext()">
//           &#187
//         </button>
//         <button class={s.carousel_button.prev} onclick="onPrev()">
//           &#171
//         </button>
//         <ul className={s.slides}>
//           <li className={s.slide} data-active>
//             <p className={s.title_content}>Каяк</p>

//             <div className={s.project_info}>
//               <div>
//                 <img className={s.image} src={sofkayk} alt="Image 1" />
//               </div>
//               <div>
//                 <ul class="ul">
//                   <li className={s.info}>
//                     Каяк построен по технологии сшей-склей
//                   </li>
//                   <li className={s.info}>Корпус лодки обтянут тканью</li>
//                   <li className={s.info}>
//                     Каркас лодки выполнен из легкой древесины.
//                   </li>
//                   <li className={s.info}>Кокпит удобный.</li>
//                   <li className={s.info}>Размеры лодки:</li>
//                   <li className={s.info}>Длина 3м</li>
//                   <li className={s.info}>Ширина 70см</li>
//                 </ul>
//               </div>
//             </div>
//           </li>
//           <li class="slide">
//             <p class="title_content">Швертбот</p>
//             <div class="project_info">
//               <img class="image" src="img/shvertbot.jpg" alt="Image 2" />
//               <div>
//                 <p class="info">
//                   Швертбот построен как экспериментальная модель.
//                 </p>
//                 <p className={s.info}>
//                   Корпус отделан дорогими породами дерева.
//                 </p>
//                 <p className={s.info}>
//                   Каркас лодки выполнен из легкой древесины.
//                 </p>
//                 <p className={s.info}>Имеется мачта и парус.</p>
//                 <p className={s.info}>Размеры лодки:</p>
//                 <p className={s.info}>Длина 5м</p>
//                 <p className={s.info}>Ширина 1,5м</p>
//               </div>
//             </div>
//           </li>

//           <li class="slide">
//             <p class="title_content">Каноэ Бузан</p>
//             <div class="project_info">
//               <img class="image" src="img/buzan.jpg" alt="Image 3" />
//               <div>
//                 <p className={s.info}>
//                   Каноэ построен по технологии сшей-склей.
//                 </p>
//                 <p className={s.info}>Корпус лодки обтянут тканью.</p>
//                 <p className={s.info}>
//                   Каркас лодки выполнен из легкой древесины.
//                 </p>
//                 <p className={s.info}>Кокпит удобный.</p>
//                 <p className={s.info}>Размеры каноэ:</p>
//                 <p className={s.info}>Длина 3м</p>
//                 <p cclassName={s.info}>Ширина 70см.</p>
//               </div>
//             </div>
//           </li>
//         </ul>
//       </div>
//     </section>
//   );
// };
// export default Project;
