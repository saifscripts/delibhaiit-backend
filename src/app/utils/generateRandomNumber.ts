export function generateRandomNumber(length: number = 6): string {
    const min = Math.pow(10, length - 1); // Smallest number of given length
    const max = Math.pow(10, length) - 1; // Largest number of given length
    return Math.floor(Math.random() * (max - min + 1) + min).toString();
}
