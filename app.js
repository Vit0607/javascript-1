/* Релизовать методы увеличения и уменьшения баланса, 
	при котором каждая операция сохраняется в массив
	operations в виде { reason: 'Оплата налогов', sum: -100 }.
	Возвращается true, если успешно и false, если не хватает баланса
	Так же реализовать метод вывода числа операций по кошельку
 */

const initialBalance = 7;

const wallet = {
	balance: initialBalance,
	operations: [],
};