// Exercise One
// Step One: Declare Typescript interface "Country"
// and add types name: string, capital: string, population: number, language: string
interface Country {
  name: string;
  capital: string | "Sofia";
  population: number;
  language: string;
}

// Step Two: Declare an object "country" with properties following "Country" interface
const firstCountry: Country = {
  name: "Bulgaria",
  capital: "Sofia",
  population: 7800000,
  language: "BG",
};

const secondCountry: Country = {
  name: "Italy",
  capital: "Rome",
  population: 59000000,
  language: "Italian",
};

// Step Three: Declare a function "displayCountryDetails" which receives "country" object and
//displays the details for it

function displayCountryDetails(countryObj: Country) {
  return `The capital of ${countryObj.name} is ${countryObj.capital}. 
  The official language is ${countryObj.language} and the population is ${countryObj.population} people`;
}

const detailsBulgaria = displayCountryDetails(firstCountry);
const detailsItaly = displayCountryDetails(secondCountry);
// console.log(detailsBulgaria);
// console.log(detailsItaly);

//

// Exercise Two
// Step One: Declare TypeScript interface "Student"
// Add propertis id: number, name: string, age: number, grade: number

interface Strudent {
  id: number;
  name: string;
  age: number;
  grade: number;
}

// Step Two: Declare an object with properties following interface "Student"

const studentOne: Strudent = {
  id: 1,
  name: "Ivan",
  age: 14,
  grade: 6,
};

const studentTwo: Strudent = {
  id: 2,
  name: "Tosho",
  age: 14,
  grade: 6,
};

const studentTree: Strudent = {
  id: 3,
  name: "Pesho",
  age: 14,
  grade: 2,
};

// Step Three: Declare array "students" with objects of type "Student"
let studends: Strudent[] = [studentOne, studentTwo, studentTree];

studends.map((student) => (student.grade = 4));

// Step Four: Declare a function "getStudents" and pass the array students as parameter
// return only students name as a result
function getStudentsNames(studentsArray: Strudent[]): string[] {
  return studends.map((student) => student.name);
}

let studentsNames = getStudentsNames(studends);
console.log(studentsNames);

//Exercise Three
// Declare a function "sortStudents" that receive students array result from the previous exercise
// and sort them by ascending
