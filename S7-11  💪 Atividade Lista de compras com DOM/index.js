
const shoppingList = document.getElementById("list");
const input = document.getElementById("input");
const addButton = document.getElementById("add");
const resetButton = document.getElementById("reset");

let list = [];

function reloadList() {
    shoppingList.innerHTML = "";
    for(let i = 0; i < list.length; i++) {
        let currentElement = list[i];
        currentElement.id = i;
        shoppingList.appendChild(currentElement);
    }
}

function createRemoveButton() {
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.addEventListener("click", (e) => {
    
    list = list.filter((_,i) => i !== Number(e.path[1].id));
    reloadList();
    });
    return removeButton;
}

function onClickFunction(){
    let newItem = document.createElement("li");
    let paragraph = document.createElement("p");
    let removeButton = createRemoveButton();

    if(input.value){
        paragraph.innerText = input.value;
        
        newItem.appendChild(paragraph);
        newItem.appendChild(removeButton);

        input.value = "";
        list.push(newItem);

        reloadList();
    }
}

addButton.addEventListener("click", onClickFunction);

function onClickResetFunction() {
    shoppingList.innerHTML = "";
    list = [];
}

resetButton.addEventListener("click", onClickResetFunction);