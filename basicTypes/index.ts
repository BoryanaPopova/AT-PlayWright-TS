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

//===================================== Conditional operators==========================================================

// Ternary operator - best used with const type. THere is no logic to be able to reassign the value
const isPositive: string =
    5 > 0 ? "The number is positive" : "The number is negative";
console.log(typeof  isPositive);

const age: number = 50;
const myName: string = "Pesho";
const personDescription = age < 40 ?
    `${myName} is younger than 40. He is ${age} years old.` :
    `${myName} is older than 40. He is ${age} years old.`;

// we can use double quotes in the string interpolation
const personName = `His name is "${myName}".`

const test: string = myName.length > 10 ?
    "The text is longer that 10 symbols" : "The text is shorter than 10 symbols."


// If Else statement. Often used in functions.

if(age < 40) {
    console.log("The age is lower than 49 years old")
}
else {
    console.log("The age is grater than 40 years old.")
}

// Nested else if
const num: number = 50;
if(num < 10 ) {
    console.log("The Number is lower than 10")
} else  if(num > 100) {
    console.log("The Number is greater than 100")
} else {
    console.log("The number is between 10 and 100")
}

// Declaring Types Alias and reusing them
type PersonInfoType = string | number;

const personNameInf: PersonInfoType = "Ivan";
const personAgeInfo: PersonInfoType = 25;

type Status = "approved" | "rejected" | "pending"
const currentStatus: Status = "approved"

type PersonData = {
    name: string;
    lastName: string;
    age: number;
    city?: "Sofia" | "Varna" | "Plovdiv";
}

function displayPersonData({name, lastName, age, city}: PersonData){
    if(city) {
        return `${name} ${lastName} is from ${city}`;
    }
    return `${name} ${lastName} is ${age}`
}

let personOne: PersonData = {name: "Pesho", lastName: "Petrov", age: 25}
console.log(displayPersonData(personOne));

//Interface
interface PersonalData {
    name: string;
    lastName: string;
    age: number;
    city: string;
}

// Types Alias VS Interface  - the interface check for the types as well. They support optional parameters.