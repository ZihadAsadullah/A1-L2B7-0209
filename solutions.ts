//=========>>>Problem 1<<<===========//

function filterEvenNumbers(numArr: number[]): number[] {
  return numArr.filter((num) => num % 2 === 0);
}
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const result = filterEvenNumbers(numbers);
console.log(result);
