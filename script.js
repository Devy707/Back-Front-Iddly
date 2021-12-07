// import {newList} from '/app.js';
document.addEventListener('DOMContentLoaded', function (event) {
  event.preventDefault();
  const slider = new ChiefSlider('.slider', {
    loop: true,
    autoplay: true,
    interval: 7000,
  });
});

// console.log(newList)