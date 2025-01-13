// Javascript Code goes here
console.log('Internal JS console message. Hello, Mr. Gardner')
console.log(document)
// console.dir(document)

// ALERTS //
// alert("Hello World")  // Textbox pop-up //

// window.onload = function(){
//     alert(`Hello Mr. Gardner`)
// }


// PROMPTS //
// const student = prompt('What is your name?')
// console.log(student)
// writes to document, but doesn't work with script defer 
// document.write(`<p>Hello, ${student}`)

// modern web dev standard 
const student = prompt('What is your name?');
const messageElement = document.createElement("p"); // Create a new <p> element
messageElement.textContent = `Hello, ${student}!` // Sets the text content of that
document.body.appendChild(messageElement) // Append the new <p> to <body>
// This ensures the content is dynamically added without overwriting any page content. 


// WRITE TO ELEMENT BY IDs //
document.getElementById("myH1").innerHTML = 'I love JavaScript';
document.getElementById('myParagraph').textContent = 'Hello, this is a paragraph'

// Styling page elements //
document.body.style.color = 'green'
document.body.style.backgroundColor = 'black'
document.body.style.fontSize = '2em'