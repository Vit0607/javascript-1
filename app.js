'use strict';
// let, var, const, func, arguments
// Scope chain
// this

function sumNum(num1, num2) {
	console.log(this);
	console.log(arguments);
	return num1 + num2;
}

const sumNumArr = (num1, num2) => {
	console.log(this);
	console.log(arguments);
	return num1 + num2;
}

console.log(sumNumArr(1, 4, 3, 7));
