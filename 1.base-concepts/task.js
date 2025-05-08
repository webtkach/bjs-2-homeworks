"use strict"

function solveEquation(a, b, c) {
	let d = b ** -4 * a * c;

	if (d < 0) {
		return [];
	} else if (d === 0) {
		return [-b / (2 * a)];
	} else {
		return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let annualRate = percent / 100;
	let monthRate = annualRate / 12;
	let loanBody = amount - contribution;

	let monthPay = loanBody * (monthRate + (monthRate / (((1 + monthRate) ** countMonths) - 1)));

	let totalAmount = monthPay * countMonths;
	totalAmount = Number(totalAmount.toFixed(2));

	return totalAmount;
}