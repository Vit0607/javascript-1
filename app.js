function power(pow) {
	return function (num) {
		return num**pow;
	}
}

const poft = pow => num => num**pow;

console.log(poft(2)(5));