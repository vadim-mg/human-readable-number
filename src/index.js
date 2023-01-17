const numbersArray = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
const firstDecimalArray = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
const decimalsArray = [
    "zero",
    "ten",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];

module.exports = function toReadable(number) {
    if (typeof number !== "number") return `Error: ${number} - is not number!`;
    if (number > 999) return `Error: ${number} must be < 1000!`;
    if (number === 0) return `zero`;

    let result = [];

    const hundredPart = Math.floor(number / 100);
    const twoDigitNumber = number - hundredPart * 100;
    const decimalPart = Math.floor(twoDigitNumber / 10);
    const unitPart = twoDigitNumber % 10;

    if (hundredPart) result.push(numbersArray[hundredPart] + " hundred");

    if (twoDigitNumber === 0) {
    } else if (twoDigitNumber < 10) {
        result.push(numbersArray[twoDigitNumber]);
    } else if (twoDigitNumber < 20) {
        result.push(firstDecimalArray[unitPart]);
    } else {
        if (decimalPart) result.push(decimalsArray[decimalPart]);
        if (unitPart) result.push(numbersArray[unitPart]);
    }

    return result.join(" ");
};
