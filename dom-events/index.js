// create new DOM element
var paragraph = document.createElement("p");
paragraph.textContent = "This is our created paragraph";
// get element by class name
var addItemsContent = document.getElementsByClassName("add-Items");
console.log("addItemsContent", addItemsContent);
// the append method insert elements or content to an HTML page
addItemsContent[0].append(paragraph);
// remove method - deletes an element
var spanElement1 = document.getElementsByTagName("span")[0];
spanElement1.remove();
// add event listener on keyboard press
// document.addEventListener("keypress", (event: KeyboardEvent) => {
//     console.log("Key pressed", event.key)
// });
// add and remove list items
var itemInput = document.querySelector("#itemInput");
var addButton = document.querySelector("#addButton");
var myList = document.querySelector("#list");
function addListItem() {
    var listItem = document.createElement("li");
    if (itemInput.value !== "" && itemInput.value !== " ") {
        // added input value as list item
        listItem.textContent = itemInput.value;
        // display the list value on the screen
        myList.append(listItem);
        // clear the input filed after the value has been added to the list
        itemInput.value = "";
        itemInput.focus();
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        listItem.append(deleteBtn);
        deleteBtn.style.margin = "5px";
        deleteBtn.addEventListener("click", function () {
            listItem.remove();
        });
    }
}
paragraph.remove();
addButton.addEventListener("click", function () {
    addListItem();
});
itemInput.addEventListener("keypress", function (event) {
    if (event.key === 'Enter') {
        addListItem();
    }
});
