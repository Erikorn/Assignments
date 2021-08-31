// innerHTML - security risk
// innerText - "expensive"
// textContent

// var person = {name: "Joe"}
// person.name = "Jim"
// console.log(person)

/**
 * 1. Select the h1 element
 * 2. Save the h1 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h1
 */

var headerText = document.querySelector("#header").textContent
document.querySelector("#paragraph").textContent = headerText