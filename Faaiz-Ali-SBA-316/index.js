let submitButton = document.getElementById("submit-button");

let make = document.getElementById("make");
let model = document.getElementById("model");
let year = document.getElementById("year");
// lets make a function that takes the values and validates them if they are the correct characters.
function btnListener() {
    let makeInput = make.value;
    let modelInput = model.value;
    let yearInput = year.value;
    // only letters
    let makePattern = /^[A-Za-z]+$/;
    // only letters, numbers, and spaces
    let modelPattern =/^[A-Za-z0-9\s]+$/;
    // only numbers
    let yearPattern = /^[0-9]+$/;

    if (!makePattern.test(makeInput)) {
        alert("Make can only have letters.");
        return;
    }

    if (!modelPattern.test(modelInput)) {
        alert("Model can only have letters and numbers.");
        return;
    }

    if (!yearPattern.test(yearInput)) {
        alert("Year can only have numbers.");
        return;
    }

    let yourCar = "Your car is " + makeInput + " " + modelInput + " " + yearInput;

    alert(yourCar);
}

submitButton.addEventListener("click", btnListener);

// iterate over a collection of elements to accomplish some task.

function iterateCollection() {
    let elements = document.querySelectorAll('.background');
    for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        
    }
}

let newElement = document.createElement("div");

// Use appendChild or prepend to add new elements to the DOM.

document.body.appendChild(newElement);

// Modify at least one attribute of an element in response to user interaction

newElement.addEventListener("click", function() {
    newElement.setAttribute("data-custom-attribute", "modified");
});

// Use at least two Browser Object Model (BOM) properties or methods.

let screenWidth = window.innerWidth;
let isOnline = navigator.onLine; 

// Use the parent-child-sibling relationship to navigate between elements at least once (firstChild, lastChild, parentNode, nextElementSibling, etc.)

let nextSiblingElement = newElement.nextElementSibling;
let parentElement = newElement.parentElement;
let firstChildElement = parentElement.firstChild;

iterateCollection();





