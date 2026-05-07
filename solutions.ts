//=========>>>Problem 1<<<===========//
function filterEvenNumbers(numArr: number[]): number[] {
  return numArr.filter((num) => num % 2 === 0);
}
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const resultP1 = filterEvenNumbers(numbers);
console.log(resultP1);

//=========>>>Problem 2<<<===========//
function reverseString(str: string): string {
  const revStr = str.split('').reverse().join('');
  return revStr;
}
const resultP2 = reverseString('typescript');
console.log(resultP2);

//=========>>>Problem 3<<<===========//
type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string | number {
  if (typeof value === 'string') {
    return 'String';
  } else {
    return 'Number';
  }
}
const resultP3 = checkType('Hello');
const resultP31 = checkType(42);
console.log(resultP3, resultP31);

//=========>>>Problem 4<<<===========//
function getProperty<X>(obj: X, key: keyof X): X[keyof X] {
  return obj[key];
}
const user = { id: 1, name: 'John Doe', age: 21 };
const resultP4 = getProperty(user, 'name');
console.log(resultP4);

//=========>>>Problem 5<<<===========//
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}
interface ReadStatus extends Book {
  isRead: boolean;
}
function toggleReadStatus(book: Book): ReadStatus {
  return { ...book, isRead: true };
}
const myBook = {
  title: 'TypeScript Guide',
  author: 'Jane Doe',
  publishedYear: 2024,
};
const result5 = toggleReadStatus(myBook);
console.log(result5);
