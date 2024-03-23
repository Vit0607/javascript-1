const secretNumber = '7';

if (Number(secretNumber) === 7) {
    console.log('Угадал строго');
}

if (secretNumber == 7) {
    console.log('Угадал нестрого');
}

const q = prompt('Введите число');
if (Number(q) === 7) {
    console.log('!');
}