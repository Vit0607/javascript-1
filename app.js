const role = 'admin';

switch (role) {
    case 'manager':
        console.log('Менеджер');
        break;
    case 'admin':
        console.log('Админ');
        break;
    case 'ceo':
        console.log('CEO');
    default:
        console.log('Мы тебя не знаем');
}

switch (role) {
    case 'manager': // role === 'manager'
    case 'admin':
        console.log('Админ');
        break;
    case 'ceo':
        console.log('CEO');
    default:
        console.log('Мы тебя не знаем');
}

const num = 1;

switch (true) {
    case num > 0: // true === num > 0
        console.log('Положительный');
        break;
    case num < 0:
        console.log('Отрицательный');
        break;
    default:
        console.log('Ноль!');
}