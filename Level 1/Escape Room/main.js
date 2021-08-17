const readlineSync = require("readline-sync");


      let characterAlive = true;
      let doorClosed = true;
      let characterHasKey = false;

function escapeRoom() {
  let escapeRoom = readlineSync.keyIn("What do you do at this time? \n[i]inspect bucket [h]put hand in hole ", {limit: ("ih")})
  if (escapeRoom === "i") {
    console.log("You inspect the bucket.\n")
    let escapeRoom = readlineSync.keyIn("")
    
  }
}

while (characterAlive||doorClosed) {
  escapeRoom()
}



/*et walking = readlineSync.keyIn("\nWhat will you do?\n\n[w]Walk [p]Player Info [q]Quit ", {limit: "wpq"})
if (walking === "w" && distanceLeftToTravel >= 0) {
  let distanceWalked = Math.floor(Math.random() * 25)
}
if (originalQuestion == 'die') {
  console.log ('You have died.');
  characterAlive = false;
} else if (originalQuestion != 'I inspect the bucket.') {
    console.log("You are now inspecting the bucket");
} 

const originalQuestion = () => readlineSync.question("What do you do at this time? ");

let answer = "Inspect Bucket"

while  (originalQuestion != answer) {
  console.log(`Is the character alive? ${characterAlive}`)
  if (originalQuestion == `die`) {
    console.log ('blahblahblah')
    characterAlive = false;
  }
  originalQuestion()
} 

console.log("You are now inspecting the bucket")*/