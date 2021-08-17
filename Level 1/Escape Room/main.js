const readlineSync = require("readline-sync");

      let characterAlive = true;
      let doorClosed = true;
      let characterHasKey = false;

console.log ("You find yourself waking up in a dark room.  A small, barred hole in the ceiling reveals just enough moonlight for you to make out three things: A door, a hole in the wall, and a bucket.")

function escapeRoom() {
  let escapeRoom = readlineSync.keyIn("What do you do? \n[a]Inspect the Door \n[b]Inspect the Hole \n[c]Inspect the Bucket ", {limit: ("abc")})
  if (escapeRoom === "a") {
    let inspectDoor = readlineSync.keyIn("It appears to be a large and solid wooden door, with a smaller trap door in the middle.  There is also an iron keyhole on the side.\n \n[a]Knock on the Door \n[b]Open the Door \n[c]Leave the Door Alone ", {limit: ("abc")})
    if (inspectDoor === "a") {
      console.log("You pound on the door with your first, as soon as you finish the small trap door flings open and a Dwarf appears, punching you in the groin.  You collapse to the floor as the trap door slams shut, a chorus of laughter erupting from the other side. \n")
    }
    else if (inspectDoor === "b") {
      console.log("You try the door, it does not budge.  You hear smirking from a group of people on the other side. \n")
    }
    else if (inspectDoor === "c") {
      console.log("You step back, leaving the door alone for now. \n")
    }
  }
  if (escapeRoom === "b") {
    let inspectHole = readlineSync.keyIn("It appears to be a small, dark and mysterious hole in the wall with a very ominous feeling.  It is roughly wide enough to put your hand in. \n[a]Look through the Hole \n[b]Reach into the Hole \n[c]Leave the Hole Alone ", {limit: ("abc")})
    if (inspectHole === "a") {
      console.log("You crouch down to peer through the hole, as soon as you're eye level lines up, a solid green fist pops out and punches you in the face. \n")
    }
    else if (inspectHole === "b") {
      console.log("Tentatively, you reach your hand into the hole.  A very solid and strong green hand locks around your wrist and yanks with an insane amount of force, ripping your arm out of it's socket.  As you fall to the ground, your life force seeping from you, you hear a sadistic giggling.  For some reason, you feel like this was not a smart thing to do. \n")
    }
    else if (inspectHole === "c") {
      console.log("You leave the scary hole alone, feeling like you have avoided something terrible. \n")
    }
  }
  if (escapeRoom === "c") {
    let inspectBucket = readlineSync.keyIn("It appears to be a simple metal bucket, it smells horrible...  \n[a]Kick the Bucket \n[b]Search the Bucket\n[c]Leave the Bucket Alone ", {limit: ("abc")})
    if (inspectBucket === "a") {
      let kickBucket = readlineSync.keyIn("This bucket smells horrible as it is, are you sure you want to spread it's contents all over the floor? \n[]On second thought, better not. \n[b]KICK IT!!!!! ", {limit: ("ab")})
      if (kickBucket === "a") {
        console.log("You leave the smelly bucket alone for now. \n")
      }
      else if (kickBucket === "b") {
        console.log("The sound of your foot connecting with the bucket rings loudly throughout the hollow room, as the vile contents fly through the air, splattering the walls and door.  You hear loud footsteps ring down the hallway, coming closer until the door bangs open. A stout and smelly Dwarf pulls out a sword and runs you through the stomach.  As you collapse to the floor, your innards spilling out, you have one last ironic though: Now you have kicked the bucket both figuratively and literally. \n")
      }
    }
    else if (inspectBucket === "b") {
      console.log("While holding your breath, you reach your hand into the Bucket.  Trying to ignore the thought of what you're sifting through, you grasp onto something cool and hard.  Pulling your hand out, you find yourself holding a very dirty and smelly iron key. \n")
    }
    else if (inspectBucket === "c") {
      console.log("You leave the smelly bucket alone for now. \n")
    }
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