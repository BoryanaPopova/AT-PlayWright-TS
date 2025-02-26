// This is a comment

// let vs const: replace the var keyword. The let keyword  is used for variables that could be reassigned afterward.
let number: number = 5
number = 10;

const message: string = "Welcome";
// The statement bellow leads to error as constants cannot be changed.
// message = "Hello";

//  The string type
let welcomeMessage: string = "Hello, Peter!";
let personalName: string = 'Peter Pan';

let welcomeMessageLenght: number = welcomeMessage.length

console.log("welcomeMessageLenght",welcomeMessageLenght)

// string interpolation
let welcomeMessageDetails: string = `My welcome message length is ${welcomeMessageLenght}`
let  userWelcomeMessage: string = `Welcome, ${personalName}!`
console.log(userWelcomeMessage)

// The number type

let firstNumber: number = 5;
let secondNumber: number = 10;

// number: math operations
let resultMultiplication: number = firstNumber * secondNumber;
console.log("The multiplication result is ", resultMultiplication)

let resultDivision: number = secondNumber / firstNumber;
console.log("The division result is ", resultDivision);

let resultAddition: number = secondNumber + firstNumber;
console.log("The addition result is ", resultAddition);

let resultSubtraction: number = secondNumber - firstNumber;
console.log("The subtraction result is ", resultSubtraction)


// Boolean type with logical operators
let isGreater: boolean = firstNumber > secondNumber;
console.log("Is greater than ", isGreater)

let isLess: boolean = firstNumber < secondNumber;
console.log("Is less than", isLess)

let isEqual: boolean = firstNumber === secondNumber;
console.log("Is equal to ", isEqual);

let isGreaterOrEqual: boolean = firstNumber >= secondNumber;
console.log("Is equal to or greater than ", isGreaterOrEqual);

let isLessOrEqual: boolean = firstNumber <= secondNumber;
console.log("Is equal to or greater than ", isLessOrEqual);

let areNumbersEqualTo: boolean = 11 === firstNumber && 11 === secondNumber;
console.log("is number equal to ", areNumbersEqualTo);

let isAnyNumberEqualTo: boolean = 6 === firstNumber || 10 === secondNumber;
console.log("isAnyNumberEqualTo", isAnyNumberEqualTo)

// The any type - any type can fit in it. This is not a good practice

let stringValue: any = "Hello";
stringValue= 14;
stringValue= 10 === 10
stringValue = [10,20,30]
console.log("stringValue", stringValue)

// console.log("Hello, Typescript");