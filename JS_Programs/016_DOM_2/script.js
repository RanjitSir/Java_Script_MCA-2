// Get DOM elements
const paragraph = document.getElementById('paragraph');
const contentDiv = document.getElementById('content');

// 1) Get Attribute
document.getElementById('get-attr-btn').addEventListener('click', function() {
    const attrValue = paragraph.getAttribute('data-info');  // Get custom attribute value
    console.log(`Attribute "data-info": ${attrValue}`);
    alert(`Attribute "data-info": ${attrValue}`);
});

// 2) Set Attribute
document.getElementById('set-attr-btn').addEventListener('click', function() {
    paragraph.setAttribute('data-info', 'updated');  // Set new value for custom attribute
    console.log('Attribute "data-info" set to "updated".');
    alert('Attribute "data-info" set to "updated".');
});

// 3) Change Style using node.style
document.getElementById('change-style-btn').addEventListener('click', function() {
    paragraph.style.color = 'blue';           // Change text color
    paragraph.style.fontSize = '22px';        // Change font size
    paragraph.style.fontWeight = 'bold';      // Change font weight
    console.log('Paragraph style updated.');
    alert('Paragraph style updated to blue, bold, and larger.');
});

// 4) Insert Element using append
document.getElementById('append-btn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This paragraph was appended at the end.';
    contentDiv.append(newElement);   // Append at the end
    console.log('Appended new element at the end.');
    alert('Appended a new element at the end.');
});

// 5) Insert Element using prepend
document.getElementById('prepend-btn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This paragraph was prepended at the beginning.';
    contentDiv.prepend(newElement);  // Prepend at the beginning
    console.log('Prepended new element at the beginning.');
    alert('Prepended a new element at the beginning.');
});

// 6) Insert Element using before
document.getElementById('before-btn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This paragraph was inserted before the original one.';
    paragraph.before(newElement);  // Insert before the existing paragraph
    console.log('Inserted new element before the original one.');
    alert('Inserted a new element before the original one.');
});

// 7) Insert Element using after
document.getElementById('after-btn').addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.textContent = 'This paragraph was inserted after the original one.';
    paragraph.after(newElement);  // Insert after the existing paragraph
    console.log('Inserted new element after the original one.');
    alert('Inserted a new element after the original one.');
});

// 8) Remove an element
document.getElementById('remove-btn').addEventListener('click', function() {
    paragraph.remove();  // Remove the paragraph element
    console.log('Removed the paragraph element.');
    alert('Removed the paragraph element.');
});
