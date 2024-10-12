// Console.dir example to explore Document object and Body
console.dir(window);
console.dir(document);       // Prints out the entire document object structure
console.dir(document.body);  // Prints out the structure of the body element
console.log(document.body);  // Logs the HTML body element itself

// Get element by ID
const heading = document.getElementById("main-heading");
console.log(heading);  // Logs the main heading

// Get elements by Class
const paragraphs = document.getElementsByClassName("text-item");
console.log(paragraphs);  // Logs the HTMLCollection of all elements with class "text-item"

// Get elements by Tag Name
const allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);  // Logs all <p> elements

// Adding an event listener to the button for DOM manipulation
document.getElementById("change-text-btn").addEventListener("click", function() {
    const contentDiv = document.getElementById("content");

    // Manipulating the first and last child elements
    const firstChild = contentDiv.firstElementChild;
    const lastChild = contentDiv.lastElementChild;

    // Change the text content of the first and last child
    if (firstChild) {
        firstChild.textContent = "This is the updated first paragraph!";
        firstChild.style.color = "green";
    }

    if (lastChild) {
        lastChild.textContent = "This is the updated last paragraph!";
        lastChild.style.color = "red";
    }
});

// Log document.body information when the second button is clicked
document.getElementById("log-body-btn").addEventListener("click", function() {
    console.log(document.body);  // Logs the body element
});
