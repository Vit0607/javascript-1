'use strict';

// Следующий уровень (задачи) - Уровень 1.7 задачника JavaScript

// document.querySelector('.button').addEventListener('click', function() {
//   const input = document.querySelector('.input').value;
//   if (!input) {
//     return;
//   }
//   document.querySelector('.panel').innerText = input;
//   document.querySelector('.input').value = '';
// });

function changeClick() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
}