let items = JSON.parse(localStorage.getItem("items")) || [];
let itemsCost = JSON.parse(localStorage.getItem("itemsCost")) || [];


// variables
let countOfItems = 0;
let totalCost = 0;
let checkoutProsses = false;


// if new user create the data in the local storage or load the data
if (items.length === 0 || itemsCost.length === 0) {
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("itemsCost", JSON.stringify(itemsCost));
}
else{
    // count The total cost
    for (let i = 0; i < itemsCost.length; i++) {
        totalCost += itemsCost[i];
    }
    UpdateTheTotalCost(totalCost);

    // Add the items to the UI
    for (let i = 0; i < items.length; i++) {
        addTheUiElements(items[i], itemsCost[i], itemsCost);
    }
}


// Function to add the items elements
function addTheUiElements(itemName, itemPrice){
    // Add the item to the list
    const list = document.querySelector('.itemsBoughtList');
    const listItem = document.createElement('li');
    listItem.classList.add(`listItem-${countOfItems}`);

    //  Add the event listeners
    listItem.addEventListener('mouseover', mouseOverTheItem);
    listItem.addEventListener('mouseout', mouseOutTheItem);

    // add the Content Container
    const contentContainer = document.createElement('div');
    contentContainer.classList.add('contentContainer');
    listItem.appendChild(contentContainer);

    let p = document.createElement('p');
    p.classList.add('itemsName');
    p.innerHTML = `${itemName}`;
    contentContainer.appendChild(p);

    let price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = `₹${itemPrice}`;
    contentContainer.appendChild(price);

    // add the other options container
    const otherOptionsContainer = document.createElement('div');
    otherOptionsContainer.classList.add('otherOptionsContainer');
    listItem.appendChild(otherOptionsContainer);

    // add the delete button
    const deleteButton = document.createElement('button');
    deleteButton.className = 'deleteButton';
    deleteButton.innerHTML = 'delete';
    deleteButton.addEventListener("click", deleteTheItem);
    deleteButton.setAttribute("data", countOfItems);
    deleteButton.style.display = 'none';
    otherOptionsContainer.appendChild(deleteButton);

    // add the checkout button
    const checkoutButton = document.createElement('button');
    checkoutButton.className = 'checkoutButton';
    checkoutButton.innerHTML = 'checkout';
    checkoutButton.setAttribute("data", countOfItems);
    checkoutButton.style.display = 'none';
    checkoutButton.addEventListener("click", () => {
        const getData = event.target.getAttribute("data");
        const selectLI = document.querySelector(`.listItem-${getData}`);
        selectLI.classList.toggle("changeTheColor");

        if (selectLI.classList.contains("changeTheColor")){
            checkoutButton.innerHTML = 'undo';
        }
        else{
            checkoutButton.innerHTML = 'checkout';
        }
    })
    otherOptionsContainer.appendChild(checkoutButton);

    list.appendChild(listItem);

    countOfItems += 1;
}


// get data from the form
function addTheItem() {
    // Get the values from the form
    const form = document.querySelector('form');
    const itemName = document.getElementById('itemName').value;
    const itemPrice = Number(document.getElementById('Item_Price').value);

    // Check if the values are empty
    if (itemName === '' || itemPrice === 0) {
        return;
    }
    form.reset();

    // Add the values to the arrays
    items.push(itemName);
    itemsCost.push(itemPrice);

    totalCost += itemPrice;
    UpdateTheTotalCost(totalCost);
    addTheUiElements(itemName, itemPrice);

    // Update the local storage
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("itemsCost", JSON.stringify(itemsCost));
}

// Function to update the total cost
function UpdateTheTotalCost(totalCost){
    const totalContainer = document.querySelector('.total');
    totalContainer.innerHTML = totalCost;
}


// checkout button
function checkoutTheItems(){
    const buttonContent = document.getElementById('checkout');
    if (checkoutProsses) {
        checkoutProsses = false;
        buttonContent.innerHTML = "Checkout";

        const ul = document.querySelector(".itemsBoughtList");
        const ulChildren = ul.children;
        for (let i = 0; i < ulChildren.length; i++) {
            ulChildren[i].classList.remove('changeTheColor');
        }

    }
    else{
        checkoutProsses = true;
        buttonContent.innerHTML = "Cancel";
    }
}


// it mouse is over the item
function mouseOverTheItem(){
    const checkoutButton = this.querySelector('.checkoutButton')
    const deleteButton = this.querySelector('.deleteButton')

    const item = this.querySelector('.otherOptionsContainer');
    item.style.display = 'flex';

    if (checkoutProsses){
        // add the correct symbol
        checkoutButton.style.display = 'flex';
        deleteButton.style.display = 'none'
    }
    else{
        // add the delete symbol
        deleteButton.style.display = 'flex';
    }
}

// it mouse is out the item
function mouseOutTheItem(){
    const checkoutButton = this.querySelector('.checkoutButton')
    const deleteButton = this.querySelector('.deleteButton')
    const item = this.querySelector('.otherOptionsContainer');

    item.style.display = 'none';
    checkoutButton.style.display = 'none';
    deleteButton.style.display = 'none';
}


function deleteTheItem(){
    const position = this.getAttribute('data');

    const name = `listItem-${position}`;

    const parant = document.querySelector(".itemsBoughtList");
    while (parant.firstChild) {
        parant.removeChild(parant.firstChild);
    }
    
    removeTheCost = itemsCost[position];
    totalCost -= removeTheCost;
    UpdateTheTotalCost(totalCost);

    items.splice(position, 1);
    itemsCost.splice(position, 1);
    countOfItems = 0;
    for (let i = 0; i < items.length; i++) {
        addTheUiElements(items[i], itemsCost[i], itemsCost);
    }

    // update the local storage
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("itemsCost", JSON.stringify(itemsCost));
}




// Function to delete the item
function deleteAllTheItem(){
    // Remove the item from the local storage
    localStorage.removeItem("items");
    localStorage.removeItem("itemsCost");

    // Remove the item from the arrays
    items = [];
    itemsCost = [];

    // Remove the item from the UI
    const list = document.querySelector('.itemsBoughtList');
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    // Update the total cost
    UpdateTheTotalCost(0);
}