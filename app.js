'use strict';

// Следующий уровень (задачи) - Уровень 2.2 (задача 4) задачника JavaScript

const panelText = 'Панель';
const panelClass = 'button';
const newElement = document.createElement('div');
newElement.setAttribute('user-id', 1);
newElement.classList.add('panel1');
// newElement.innerText = 'Кнопка';
newElement.innerHTML = `<button class="${panelClass}">${panelText}</button>`;
document.querySelector('.test').appendChild(newElement);













