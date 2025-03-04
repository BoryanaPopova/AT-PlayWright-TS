// Let's declare 2 types - role and permission that describe an user
type Role = {
    role: "manager" | "founder"};
type UserPermissions = {
    permissions: "admin" | "user"};

// To combine them in the user we should use the following declaration
type User = Role & UserPermissions;

// Let's create an object for a user and assign the type User to that object.
const user: User = {
    role: "founder",
    permissions: "admin"
};

// Object types with interfaces

interface Animal {
    species: string;
    breed?: string;
    age: number;
    weight?: number;
    name: string;
}

let myFirstAnimal: Animal = {
    species: "Canis lupus familiaris AKA Dog",
    breed: "Akita",
    age: 1,
    weight: 40,
    name: "Spot"
}

interface Cars {
    color: string;
    wheels: number;
    transmission: "manual" | "automatic";
    fuelType: "diesel" | "gasoline";
    startEngine: () => string;
}

const car: Cars = {
    color: "white",
    wheels: 4,
    transmission: "manual",
    fuelType: "diesel",
    startEngine: function () {
        return "Start the engine."
    }
}

const carStartEngine  = car.startEngine();

// Get object keys
const keys = Object.keys(car)

// Get object values. Note .values is available for "target": "es2017" syntax and newer.
const objectValues = Object.values(car)

// Merge 2 objects into 1
const colorObject = {color: "black"}
const backgroundObject = {background: "white"}

const assignedObject = Object.assign({},colorObject, backgroundObject)
console.log(assignedObject)

