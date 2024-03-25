const users = ['Аня', 'Вика', 'Вика'];
console.log(users);
users[2] = 'Кристина';
console.log(users);

const arrLength = users.push('Никита');
console.log(users);
console.log(arrLength);

const arrLength2 = users.unshift('Вася');
console.log(users);
console.log(arrLength2);

const el = users.pop();
console.log(el);
console.log(users);

const el2 = users.shift();
console.log(el2);
console.log(users);