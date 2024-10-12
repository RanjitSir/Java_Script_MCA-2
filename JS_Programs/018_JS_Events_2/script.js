// Inline Event Function
function inlineClickEvent() {
    alert("Inline Click Event Triggered!");
}

// Select the box where mouse events will occur
const mouseBox = document.getElementById("mouse-events-box");
const log = document.getElementById("log");

// Function to log events to the paragraph
function logEvent(eventType) {
    log.textContent = `Event: ${eventType}`;
}

// Click Event
mouseBox.addEventListener("click", () => logEvent("Click"));

// Double Click Event
mouseBox.addEventListener("dblclick", () => logEvent("Double Click"));

// Mouse Down Event (when mouse button is pressed down)
mouseBox.addEventListener("mousedown", () => logEvent("Mouse Down"));

// Mouse Up Event (when mouse button is released)
mouseBox.addEventListener("mouseup", () => logEvent("Mouse Up"));

// Mouse Move Event (when mouse is moved within the box)
mouseBox.addEventListener("mousemove", () => logEvent("Mouse Move"));

// Mouse Over Event (when mouse moves over the box)
mouseBox.addEventListener("mouseover", () => logEvent("Mouse Over"));

// Mouse Out Event (when mouse leaves the box)
mouseBox.addEventListener("mouseout", () => logEvent("Mouse Out"));

// Mouse Enter Event (when mouse enters the box, doesn't bubble)
mouseBox.addEventListener("mouseenter", () => logEvent("Mouse Enter"));

// Mouse Leave Event (when mouse leaves the box, doesn't bubble)
mouseBox.addEventListener("mouseleave", () => logEvent("Mouse Leave"));
