//functions

function greet(): void {
    console.log("Hello to functions")
}

function multiplyNumbers(numberOne: number, numberTwo: number): number {
    return numberOne * numberTwo
}

multiplyNumbers(2, 5);

greet();

function displayGreeting(
    firstName: string,
    lastName: string,
    age: number
): string {
    return `Hello, Mr. ${lastName}, ${firstName}. You are ${age} years old.`
}

console.log(displayGreeting("Ivan", "Ivanov", 30))

// more legant way
const greeting: string = displayGreeting("Ivan", "Ivanov", 30);

/* functions with OPTIONAL parameters - declared with questionmark.
The optional parameter could not be on first position. For example the name parameter
in the displayPetInfo cannot be optional.
If all parameters are option, the first one can be optional as well (corner case)
*/

function displayPetInfo(name: string, animal: string, age?: number): string {
    return `${name} is ${animal} ${age ? `and it's ${age} years old.` : "."}`
}


// console.log(displayPetInfo("Spike", "dog"));
console.log(displayPetInfo("Spike", "dog", 5));

// default function parameters

function substractNumbers(firstNum: number = 10, secondNum: number = 5): number {
    return firstNum - secondNum;
}

console.log(substractNumbers(20))
