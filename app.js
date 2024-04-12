'use strict';

const audi = {
	brand: 'Audi',
	model: 'A3',
	damages: []
}

const carManipulation = {
	addDamage(part, rate) {
		this.damages.push({part, rate});
		console.log(`Добавить повреждение на ${this.brand} со степенью ${this.model}`);
	}
}

const addDamageAudi = carManipulation.addDamage.bind(audi);
addDamageAudi('Крыло', 3);

const addDamageAudiRoof = carManipulation.addDamage.bind(audi, 'Крыша');
addDamageAudiRoof(5);
addDamageAudiRoof(3);
console.log(audi);