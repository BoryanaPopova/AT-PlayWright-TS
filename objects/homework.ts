// ======================== Homework: Interfaces and Objects ==================================================

/*
1. Create a TypeScript interface named Person that represents a
person with the following properties:
    • name (string)
• lastName (string)
• age (number)
• email (string)
• phoneNumber (number)
 */

interface Person {
    name: string,
    lastName: string,
    age: number,
    email: string,
    phoneNumber: number
}

/*
2.  Create a TypeScript interface named PersonInfo that
Extends  Person type from the previous exercise and add the
following properties:
    • country (optional string property)
• greeting  (optional method that return welcome message)
 */

interface PersonInfo extends Person {
    country?: string,
    displayGreeting?: () => string;
}


/*
3. Create an object of type Person using the interface from Exercise 1.
Declare a variable person1 of type Person.
 */

const person1: Person = {
    name: "Ivan",
    lastName: "Ivanov",
    age: 18,
    email: "ivan.ivanov@email.io",
    phoneNumber: 555555555555555
}

/*
4.  Create an object of type PersonInfo using the interface from
Exercise 2. Declare a variable person2 of type PersonInfo.
 */

const person2: PersonInfo = {
    name: "Stoyan",
    lastName: "Ivanov",
    age: 21,
    email: "stoyan.ivanov@email.io",
    phoneNumber: 44444444444,
    country: "Germany",
    displayGreeting: function (): string {
        return `Hello! I am Stoyan from Germany!`
    }
}

// Calling the displayGreeting method displays error:  TS2722: Cannot invoke an object which is possibly
// I searched for the error but I am not quite sure why I receive it.
console.log(person2.displayGreeting())
