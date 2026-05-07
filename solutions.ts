//=========>>>Problem 1<<<===========//
function filterEvenNumbers(numArr: number[]): number[] {
  return numArr.filter((num) => num % 2 === 0);
}
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const result1 = filterEvenNumbers(numbers);
console.log(result1);

//=========>>>Problem 2<<<===========//
function reverseString(str: string): string {
  const revStr = str.split('').reverse().join('');
  return revStr;
}
const result2 = reverseString('typescript');
console.log(result2);

//=========>>>Problem 3<<<===========//
type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string | number {
  if (typeof value === 'string') {
    return 'String';
  } else {
    return 'Number';
  }
}
const result3 = checkType('Hello');
const result3a = checkType(42);
console.log(result3, result3a);

//=========>>>Problem 4<<<===========//
function getProperty<T, X extends keyof T>(obj: T, key: X): T[X] {
  return obj[key];
}
const user = { id: 1, name: 'John Doe', age: 21 };
const result4 = getProperty(user, 'name');
console.log(result4);

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

//=========>>>Problem 6<<<===========//
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student('Alice', 20, 'A');
console.log(student.getDetails());

//=========>>>Problem 7<<<===========//
function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((matchItem) => arr2.includes(matchItem));
}
const result7 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(result7);
