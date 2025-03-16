// to access the html document's body
const bodyE1: HTMLElement = document.body
bodyE1.style.backgroundColor = "#000"
bodyE1.style.color = "#fff"

// this output could be seen in the console tab of the browser
console.log("body background", bodyE1.style.backgroundColor)

// select all element by tag name
const divElements: HTMLCollectionOf<HTMLDivElement> =
    document.getElementsByTagName("div");

console.log("divElements", divElements);

const btn: HTMLElement =
    document.getElementsByName("button")[0];
//
// btn.style.backgroundColor = "green";
// btn.textContent = "About me";

const headingsTwo: HTMLCollectionOf<HTMLHeadingElement>
    = document.getElementsByTagName("h2");

// select element by ID

const shops: HTMLElement | null = document.getElementById("shops");

// select element by class name

const items: HTMLCollectionOf<Element> = document.getElementsByClassName("list-item");
const secondItem: Element = document.getElementsByClassName("list-item")[1];
secondItem.textContent = "Second element"
console.log(items)

/*
css selection - newer method, more agile and widely used.
The method is called querySelector returns first element that matches the search criteria
The type is set as type assertion "as" not as type annotation - the : type syntax.
We use the type assertion when we are sure that we have that element,
and it would be returned. That way we can avoid the element | null syntax.
 */

const selectedH2 = document.querySelector("h2") as HTMLHeadingElement;
console.log(selectedH2)


