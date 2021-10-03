"use strict";

function fun1() {
   let options = document.getElementById("mySelect").value;
   let name = document.getElementById("Name");
   console.log(options.checked);
   if (options === "ІВ-93" || options.checked) {
      name.innerHTML = "Стеценко Богдан та Гулак Іван";
   } else {
      name.innerHTML = "Губенко Владислав";
   }
}
let buttons = document.getElementsByClassName("left-part__item");
let opuc = document.getElementById("code");
let divText = document.getElementById("right-part");
let code = document.getElementById("code");
let text = document.querySelector(".text");
let lab1 = document.querySelectorAll('.labs__button')
let main1 = document.querySelector('.main_1');

lab1[0].addEventListener('click',function(){
   if(main1.style.display === 'none'){
   main1.style.display = 'block';}
   else{
      main1.style.display = 'none'
   }
})

buttons[0].addEventListener("click", function () {
   code.textContent = `
   Цей проект буде демонструвати виконання лабораторних робіт, бригадою №4 на прикладі сайту з надання допомоги в програмному 
   забезпечені та створенні веб-сервісів.
   Предметною областю є робота компанії наж наданням послуг, зокрема верстка сайті, створення функціоналу, повне проектування сайт роботи.
   Основною метою роботи Iddly є розробка веб-сервісів різної складності, надання допомоги у розробці та дизайні. Таким чином,
   бажаючі отримати послуги стаюсь замовниками нашого сервісу.Бажаючі отримати консультацію, можуть залишити заяву, заповнивши 
   форму на головній сторінці.

   Цей продукт розробляється для користування таких груп людей:
      - для компаній(розробка веб-сервісів, дизайну та верстка макету, відповідно до потреб замовника)
      - для публічних персон(створення сайті візиток)
      - для брендів(розробка веб-магазинів)
      - для громадських організацій(розробка сайті відповідно до потреб організації)

   Functionality — Функціональні вимоги: зворотній зв'язок з замовником, статистика, e-mail розсилки з гнучкими налаштуваннями.
   Usability — Вимоги до зручності використання (UX): гарний дизайн, юзабельність, відсутність речей, що відбивають бажання користуватися веб-сервісом.
   Reliability — Вимоги до надійності: низька частота можливих збоїв, надійність.
   Performance — Вимоги до продуктивності: швидкий час відгуку, гнучке використання ресурсів, ефективність, потужність, масштабованість, адаптивність.
   Supportability - Вимоги до підтримки: можливість підтримки, ремонтопридатність, гнучкість, доопрацювання. 
   `;
});

buttons[1].addEventListener("click", function () {
   code.innerHTML = `
   Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОГО ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, 
   ФОРМАМИ в HTML-ДОКУМЕНТІ.

   Мета: придбати практичні навички роботи  з HTML-документом, таблицями,формами, зображеннями, посиланнями.
   Створити шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт.

   Лабораторна розташована за посиланням: <a target="_blank" href="https://github.com/Devy707/Back-Front-Iddly">https://github.com/Devy707/Back-Front-Iddly</a>
   `;
});

buttons[3].addEventListener("click", function () {
   code.textContent = `
   <section class="table-section">
   <div class="container">
   <table class="main-table">
     <tr>
       <th>Name</th>
       <th>Age</th>
       <th>Position</th>
     </tr>
     <tr>
       <td>Stetsenko Bogdan</td>
       <td>19</td>
       <td>Programmer, Team Lead</td>
     </tr>
     <tr>
       <td>Gulak Ivan</td>
       <td>19</td>
       <td>Programmer</td>
     </tr>
     <tr>
       <td>Gubenko Vlad</td>
       <td>19</td>
       <td>Programmer</td>
     </tr>
   </table>
 </div>
 </section>
   `;
});

buttons[5].addEventListener("click", function () {
   code.textContent = `
   <section class="project-section-images">
      <div class="project-section-images__content">
         <div class="project-section-images__image1">
         </div>
         <div class="project-section-images__image2">
         </div>
         <div class="project-section-images__image3">
         </div>
         <div class="project-section-images__image4"></div>
         </div>
      </div>
   </section>
   `;
});

buttons[4].addEventListener("click", function () {
   code.textContent = `
   <section class="form-section">
      <div class="conteiner">
         <div class="form-section__content">
            <form action="#" method="post">
               <input placeholder="+38" type="phone" name="usertel">
               <input placeholder="e-mail" type="text" name="useremail">
               <input placeholder="name" type="text" name="username">
               <input placeholder="surname" type="text" name="usersurname">
               <button class="form-section__button" type="submit">Contact US</button>
            </form>
         </div>
      </div>
   </section>
   `;
});

buttons[6].addEventListener("click", function () {
   code.textContent = `
   Під час лабораторної роботи ми придбали практичні навички роботи  з HTML-документом, таблицями,формами, зображеннями, посиланнями.
   Створили шаблон звітного HTML-документом для відображення результатів роботи всіх лабораторних робіт. Також було на половину розроблено
   головну сторінку нашого веб-сервісу, де відображені усі результати роботи.
   
   `;
});