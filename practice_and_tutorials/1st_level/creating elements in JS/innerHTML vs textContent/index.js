var myList = document.getElementById("my-list")

// textContent will list out the string elements from the HTML, so "0 1 2"
//console.log(myList.textContent)

// innerHTML will display the tags as string, so " <li>0</li> <li>1</li> <li>2</li>"
//console.log(myList.innerHTML)

//innerHTML can be used to create new elements on the page, because they're strings, you can type them out as strings.
myList.innerHTML += "<li>3</li>"

document.body.innerHTML += "<p id='paragraph'>V School rocks!</p>"
document.getElementById("paragraph").style.textAlign = "center"






var powerRangers = [
    /*"Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston",
    "Tommy Oliver"*/

    //or

    {name: "Jason Lee Scott", color: "Red"}, 
    {name: "Kimberly Hart", color: "Pink"}, 
    {name: "Zack Taylor", color: "Black"}, 
    {name: "Trini Kwan", color: "Yellow"}, 
    {name: "Billy Cranston", color: "Blue"},
    {name: "Tommy Oliver", color: "Green"}
]

/* rangersList document does not need to be in the for loop
var rangersList = document.getElementById ("rangers")
/("li") is a list item element
var newName = document.getElement ("li")
/ add/change text content property to the [0]First element of the powerRangers
newName.textContent = powerRangers [0]
/appends newName to rangersList
rangersList.append (newName)*/

//Need to create a forLoop 


// rangersList document does not need to be in the for loop
var rangersList = document.getElementById ("rangers")

for (var i = 0; i < powerRangers.length; i++) {
    //("li") is a list item element
    //var newName = document.getElement ("li")
    // add/change text content property to the [0]First element of the powerRangers
    //newName.textContent = powerRangers [i]
    //appends newName to rangersList
    //rangersList.append (newName)

//or

    rangersList.innerHTML += "<li>" + powerRangers[i] + "</li>"

}
