Selecting an element doesn’t give us a whole lot of power as developers until we can make changes to the selected elements!

One of the most basic things to change about an element could be its text. (Keep in mind, this is only useful for elements that normally contain text, like paragraphs, headers, list items, etc.)

After selecting the element, you have a few options:
    1. innerHTML - can be a security risk, so it's usually best to avoid this
    2. innerText - can be "expensive" (AKA slow)
    3. textContent - best option for changing the text of an element
    
textContent is a DOM object property, which means we can set it equal to something else using the single equal sign (assignment operator).

E.g. if you had a regular JavaScript object:

    var person = {name: "Joe"}

You could change the name property by doing:

    person.name = "Jim"

You can do the same thing with DOM objects:

    var person = document.getElementById("person")
    person.textContent = "Jim"

-OR- if you combined those into one line and didn't save the variable, it looks like this:

    document.getElementById("person").textContent = "Jim"