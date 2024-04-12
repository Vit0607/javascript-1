'use strict';

const audi = {
	brand: 'Audi',
	model: 'A3',
	year: 2021,
	damages: [],
	addDamage(part, rate) {
		console.log(`У авто ${this.brand} ${this.model} ${this.year} добавлено: повреждение ${part} со степенью ${rate}`);

		return this.damages.push({
			part,
			rate
		});
	}
}

audi.addDamage('Капот', 1);

const bmw = {
	brand: 'BMW',
	model: 'X5',
	year: 2022,
	damages: [],
};

bmw.addDamage = audi.addDamage;
// bmw.addDamage('Бампер', 2);

const addDamageFunc = audi.addDamage;

addDamageFunc.call(bmw, ...['Бампер', 2]);
addDamageFunc.call(audi, 'Бампер', 2);

addDamageFunc.apply(bmw, ['Бампер', 2]);
addDamageFunc.apply(audi, ['Бампер', 2]);

console.log(bmw);