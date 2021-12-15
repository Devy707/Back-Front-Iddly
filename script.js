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

let ukr = document.querySelector('.class1');
let eng = document.querySelector('.class2');
let rus = document.querySelector('.class3');

ukr.addEventListener('click',()=>{
  deleteAllCookies();
  document.cookie = encodeURIComponent('lang') + '=' + encodeURIComponent('ukr') + ';';
  localStorage.setItem('lang', 'ukr');
  window.location.href = "./indexukr.html"
  alert(document.cookie);
});
eng.addEventListener('click',()=>{
  deleteAllCookies();
  document.cookie = encodeURIComponent('lang') + '=' + encodeURIComponent('eng') + ';';
  localStorage.setItem('lang', 'eng');
  window.location.href = "./index.html"
  alert(document.cookie);
});
rus.addEventListener('click',()=>{
  deleteAllCookies();
  document.cookie = encodeURIComponent('lang') + '=' + encodeURIComponent('rus') + ';';
  localStorage.setItem('lang', 'rus')  
  window.location.href = "./indexRUS.html"
  alert(document.cookie);
});


function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}