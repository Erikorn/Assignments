* We just saw how you can edit the textContent of an element after selecting it in JavaScript
    * Remember, you’re simply modifying the properties of an object
* One of the properties each selected element has is the `style` property
    * The value of the `style` property isn’t a string like it was with the textContent property
    * Instead, it’s an object. So, an object nested inside of another object!
    * This means selectedElement.style has properties of its own
    * These properties will be pretty familiar to you, since you’ve worked in CSS already - they’ve got almost the same names as the CSS properties you practiced with earlier in this course!
        * fontSize
        * color
        * backgroundColor
        * display
        * textAlign
        * Etc.
    * Notice the main difference between these and the CSS properties you’re used to? These are camelCased
        * Take a second to think why that is… why can’t we use `text-align` in JavaScript?
        * Because the dash is interpreted as a minus sign!
        * "camelCasing" in JavaScript is a very strong convention, and you’ll see it used all the time.
