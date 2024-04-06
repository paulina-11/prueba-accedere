// Escribe una función en JavaScript que tome un arreglo de números como parámetro y devuelva el número más grande.

const arrayNumber = [
  1, 34, 67, 300, 20, 30, 45, 3, 40, 67, 89, 34, 666, 55, 69, 999,
];

function showNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const largestNumber = showNumber(arrayNumber);
console.log("El número más grande es:", largestNumber);
