'use strict';

// Следующий уровень (задачи) - Уровень 1.10 задачника JavaScript

function submitForm() {
	const input = document.querySelector('.input').value;
	if (!input) {
		return;
	}
	document.querySelector('.panel').innerText = input;
	document.querySelector('.input').value = '';
	document.querySelector('.notification').classList.add('notification_active');
	// document.querySelector('.notification').classList.remove('notification_hidden');
}

function inputChanged(e) {
	if (e.code == 'Enter') {
		submitForm()
	}
}