// Inline Event Function
function inlineClickEvent() {
    alert("Inline Click Event Triggered!");
    console.dir("Inline Click Event Triggered!");
}

// Select the box where mouse events will occur
const mouseBox = document.getElementById("mouse-events-box");
const log = document.getElementById("log");

// Function to log events to the paragraph
function logEvent(eventType) {
    log.textContent = `Event: ${eventType}`;
}

// Assign event handlers directly to the element properties

// Click Event
mouseBox.onclick = function() {
    logEvent("Click");
    console.dir("Click Event Triggered!");
};

// Double Click Event
mouseBox.ondblclick = function() {
    logEvent("Double Click");
    console.dir("Double Click Event Triggered!");
};

// Mouse Down Event (when mouse button is pressed down)
mouseBox.onmousedown = function() {
    logEvent("Mouse Down");
};

// Mouse Up Event (when mouse button is released)
mouseBox.onmouseup = function() {
    logEvent("Mouse Up");
};

// Mouse Move Event (when mouse is moved within the box)
mouseBox.onmousemove = function() {
    logEvent("Mouse Move");
};

// Mouse Over Event (when mouse moves over the box)
mouseBox.onmouseover = function() {
    logEvent("Mouse Over");
};

// Mouse Out Event (when mouse leaves the box)
mouseBox.onmouseout = function() {
    logEvent("Mouse Out");
};

// Mouse Enter Event (when mouse enters the box, doesn't bubble)
mouseBox.onmouseenter = function() {
    logEvent("Mouse Enter");
};

// Mouse Leave Event (when mouse leaves the box, doesn't bubble)
mouseBox.onmouseleave = function() {
    logEvent("Mouse Leave");
};
