// to access the html document's body
var bodyE1 = document.body;
bodyE1.style.backgroundColor = "#000";
bodyE1.style.color = "#fff";
// this output could be seen in the console tab of the browser
console.log("body background", bodyE1.style.backgroundColor);
// select all element by tag name
var divElements = document.getElementsByTagName("div");
console.log("divElements", divElements);
var btn = document.getElementsByName("button")[0];
//
// btn.style.backgroundColor = "green";
// btn.textContent = "About me";
var headingsTwo = document.getElementsByTagName("h2");
// select element by ID
var shops = document.getElementById("shops");
// select element by class name
var items = document.getElementsByClassName("list-item");
var secondItem = document.getElementsByClassName("list-item")[1];
secondItem.textContent = "Second element";
console.log(items);
/*
css selection - newer method, more agile and widely used.
The method is called querySelector returns first element that matches the search criteria
The type is set as type assertion "as" not as type annotation - the : type syntax.
We use the type assertion when we are sure that we have that element,
and it would be returned. That way we can avoid the element | null syntax.
 */
var selectedH2 = document.querySelector("h2");
console.log(selectedH2);
