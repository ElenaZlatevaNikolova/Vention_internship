

function filterEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  return evenNumbers;
}

const originalArray = [2, 4, 5, 7, 8];
const result = filterEvenNumbers(originalArray);

console.log(result);

