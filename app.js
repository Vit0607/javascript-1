'use strict';

// Следующий уровень (задачи) - Уровень 1.9 задачника JavaScript

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
}

function inputChanged(e) {
  if (e.code == 'Enter') {
    submitForm();
  }
}
