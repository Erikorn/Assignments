const readline = require('readline-sync');
var mathificate = function(theFirstNumberYouWantToMathificate, theSecondNumberYouWantToMathificate, theKindOfMathificatingYouWantTheseNumbersToDo) {
    this.x = parseInt(theFirstNumberYouWantToMathificate);
    this.y = parseInt(theSecondNumberYouWantToMathificate);
    this.op = theKindOfMathificatingYouWantTheseNumbersToDo;

    this.result = function() {
        var x = this.x;
        var y = this.y;
        var theKindOfMathificatingYouWantTheseNumbersToDo = this.op;

        if (theKindOfMathificatingYouWantTheseNumbersToDo === "+") {
            var result = x + y;
        } else if (theKindOfMathificatingYouWantTheseNumbersToDo === "-") {
            var result = x - y;
        } else if (theKindOfMathificatingYouWantTheseNumbersToDo === "*") {
            var result = x * y;
        } else if (theKindOfMathificatingYouWantTheseNumbersToDo === "/") {
            var result = x / y;
        } else {
            var result = "Error!"
        }

        console.log("wow, you're really flexing some brain muscles there Copernicus.... Fine, let's make some magic........ShaZAAM:       " + result + "        Alright, you happy?  Now leave me alone will you?  Days Of Our Lives is on and we're going to find out what Jenna's twin sister looks like.");
    };
}

var theFirstNumberYouWantToMathificate = readline.question("Alright, so um, what like, is your first number?: ");
var theSecondNumberYouWantToMathificate = readline.question("Haha, really?  That's what you're going with?....Okay....what next?: ");
var theKindOfMathificatingYouWantTheseNumbersToDo = readline.question("Pshhhh, really?  Out of all the numbers in infinity, and you choose THAT one?  Fine, alright, like, what do you want to do with the numbers?: +, -, *, or, / ");

var calc = new mathificate(theFirstNumberYouWantToMathificate, theSecondNumberYouWantToMathificate, theKindOfMathificatingYouWantTheseNumbersToDo);

calc.result();