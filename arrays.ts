// Arrays - declare an array
let numbersArray: number[] = [1,2,3,4];
let stringsArray: string[] = ["Apple", "Banana", "Pear", "Peach, Grape"];
let stringAndNumArray: (number | string)[] = [1, "Pesho"];

// Access array elements
let fruits: string[] = ["Apple", "Banana", "Pear", "Peach, Grape"];
let firstEl: string = fruits[1] // returns banana
let secondEl: string = fruits[3] // returns peach

//the push method - a method to add an element at the end of the array
fruits.push("Mango");

//The pop method -  a method to remove the last element of the array
numbersArray.pop();

//The shift method:  a method that removes and return the first element of the array
fruits.shift();

// The Unshift method: a method that adds an element at the 0 index of the array
fruits.unshift("Apple");

//the map method

let multiplyNumber = numbersArray.map((element:number)  => element * 2);

let multiPLaySpecialNumbers = numbersArray.map((element: number)=> {
    if (element >2 ) {return element*2} else {return element}
});

// the filter method
let filterNumsArray = numbersArray.filter(element => element > 2);


console.log(filterNumsArray)