// create new DOM element
const paragraph: HTMLParagraphElement = document.createElement("p");
paragraph.textContent = "This is our created paragraph";

// get element by class name
const addItemsContent: HTMLCollectionOf<Element> =
    document.getElementsByClassName("add-Items");
console.log("addItemsContent", addItemsContent);

// the append method insert elements or content to an HTML page
addItemsContent[0].append(paragraph);

// remove method - deletes an element
const spanElement1:HTMLSpanElement = document.getElementsByTagName("span")[0];
spanElement1.remove();

paragraph.remove();

// add event listener on keyboard press
// document.addEventListener("keypress", (event: KeyboardEvent) => {
//     console.log("Key pressed", event.key)
// });

// add and remove list items
const itemInput = document.querySelector("#itemInput") as HTMLInputElement;
const addButton = document.querySelector("#addButton") as HTMLButtonElement;
const myList = document.querySelector("#list") as Element;

// Add list item
function addListItem() {
    const listItem: HTMLLIElement = document.createElement("li");

    if(itemInput.value !== "" && itemInput.value !== " ") {
        // added input value as list item
        listItem.textContent = itemInput.value;
        // display the list value on the screen
        myList.append(listItem);
        // clear the input filed after the value has been added to the list
        itemInput.value = "";
        itemInput.focus();

        const deleteBtn: HTMLButtonElement = document.createElement("button");
        deleteBtn.textContent = "Remove";
        listItem.append(deleteBtn);

        deleteBtn.style.margin = "5px";

        deleteBtn.addEventListener("click", () => {
            listItem.remove()
        })
    }
}

// Add list item on Add button click
addButton.addEventListener("click", () => {
    addListItem()
});

// add list item on enter
itemInput.addEventListener("keypress", (event) =>{
    if(event.key === 'Enter') {
        addListItem()
    }
})
