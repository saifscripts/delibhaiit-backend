"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomNumber = void 0;
function generateRandomNumber(length = 6) {
    const min = Math.pow(10, length - 1); // Smallest number of given length
    const max = Math.pow(10, length) - 1; // Largest number of given length
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
}
exports.generateRandomNumber = generateRandomNumber;
