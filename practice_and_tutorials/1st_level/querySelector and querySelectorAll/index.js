// querySelector 
// Select a single element from the page. (Returns the first element it finds that matches the query)

// querySelectorAll
// Select All elements from the page that match the query.

var result = document.querySelector("#favorite-things")
console.log(result)
//returns "<ol id="favorite-things">"

var result = document.querySelectorAll("#favorite-things")
console.log(result)
//returns "NodeList"

var result = document.querySelectorAll("#favorite-things")
console.log(result.length)
//returns "1"

var result = document.querySelector("ol#favorite-things > li")
console.log(result)
// returns "<li class="thing">"

var result = document.querySelectorAll("ol#favorite-things > li")
console.log(result)
// returns "NodeList"

var result = document.querySelectorAll("ol#favorite-things > li")
console.log(Array.from(result))
//returns "[<li class="thing">, <li class="thing">, <li class="thing">, <li class="thing">]"

var result = document.querySelectorAll("ol#favorite-things > li")
console.log(Array.from(result))

for (var i = 0; i < result.length; i++) {
    result[i].textContent = "** REDACTED **"
}
//Returns"     ** REDACTED **    ** REDACTED **    ** REDACTED **    ** REDACTED **""



