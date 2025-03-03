// Homework: Arrays & Functions
// 1. Create an array of strings and add a new element at the end of the array. Log the result.
let letters: string[] = ["a", "b", "c", "d"];
letters.push("e");
console.log(letters);

// 2. Create an array of numbers and remove the first element from the array. Log the result.
let myNumbers: number[] = [15, 25, 30, 35, 40];
myNumbers.shift();
console.log(myNumbers);

/*
3. Use the map method to create a new array and divide each number
by 2  “num / 2”   from [1, 2, 3, 4, 5].  Log the result.
 */
let divideNumbers: number[] = [1, 2, 3, 4, 5];
let dividedNumbers: number[] = divideNumbers.map((x): number => x / 2);
console.log(dividedNumbers);

/* 4.Use the filter method to create a new array containing
only numbers greater than 5 from [3, 7, 1, 9, 12, 4]. Log the result.
 */
let initialNumbers: number[] = [3, 7, 1, 9, 12, 4];
let filterredNumbers: number[] = initialNumbers.filter(e => e > 5);
console.log(filterredNumbers);

/*
5. Use the sort method to sort an array of numbers
[9, 3, 7, 2, 8, 5] in ascending order. Log the result.
 */
let unSortedNumbers: number[] = [9, 3, 7, 2, 8, 5];
let sortedNumbers: number[] = unSortedNumbers.sort();
console.log(sortedNumbers);

/* 6.	Use the slice method to extract the first three elements from
['apple', 'banana', 'cherry', 'date', 'elderberry']. Log the result.
 */
let myFruits: string[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
let slicedFruits: string[] = myFruits.slice(0, 3);
console.log(slicedFruits);

/*
 7.	Use the splice method to remove the second and third elements from
 ['car', 'bike', 'bus', 'train', 'boat'] . Log the result.
 */
let myVehicles: string[] = ['car', 'bike', 'bus', 'train', 'boat'];
let myRemovedVehicles: string[] = myVehicles.splice(1, 2)
console.log(myVehicles)
console.log(myRemovedVehicles);

/*
8.	Write a function named “findLargest” that takes three numbers
as parameters and returns the largest of them.
Use if/else statement to find the largest number. Log the result.
 */
function findLargest(a: number, b:number, c: number): number {
    if(a > b && a > c) {
        return a;
    } else {
        if(b > c) {
                return b;
            } else {
                return c;
            }
        }
};

console.log(findLargest(8,9,10));

/*
9. Write a function “convertToCentimeters”  which receives parameter “inches”
and add default value it and convert to centimeters.
Log the result with default parameter and with passed parameter.
 */
function convertToCentimeters(inches: number = 1): number {
    return inches * 2.54;
}
console.log(convertToCentimeters(2))

/* 10.	Write a function named “calculateArea” that takes a required width parameter
and an optional height parameter. If height is not provided, assume the shape is a square.
 */
function calculateArea(width: number, height?: number): number {
    return width * (height ?? width);
}
console.log(calculateArea(2))