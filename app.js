let user = {
	name: 'Вася',
	age: 40,
	city: 'Moscow'
};

const { age, ...userWithoutAge } = user;
console.log(age);
console.log(userWithoutAge);

const additionalData = {
	skills: ['Разработка', 'Дизайн'],
	creditCard: '2342-2345-2734-2356'
};

user = {
	...user,
	...additionalData
}

console.log(user);