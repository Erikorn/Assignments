const readlineSync = require("readline-sync");

      let characterAlive = true;
      let doorClosed = true;
      let doesNotHaveKey = true;
      let triedToOpenDoor = false;

console.log ("\nYou find yourself waking up in a dark room.  \nA small, barred hole in the ceiling reveals just enough moonlight for you to make out three things: \A door, a hole in the wall, and a bucket.")

function escapeRoom() {
  let escapeRoom = readlineSync.keyIn("\nWhat do you do? \n\n[a]Inspect the Door \n[b]Inspect the Hole \n[c]Inspect the Bucket \n\n", {limit: ("abc")})
  if (escapeRoom === "a") {
    console.log ("\nIt appears to be a large and solid wooden door, \nwith a smaller trap door in the middle.  \nThere is also an iron keyhole on the side.")  
  }
  while (escapeRoom === "a")
  {let inspectDoor = readlineSync.keyIn(" \n[a]Knock on the Door \n[b]Open the Door \n[c]Leave the Door Alone \n\n", {limit: ("abc")})
    if (inspectDoor === "a") {
      console.log("\nYou pound on the door with your first, \nas soon as you finish the small trap door flings open and a Dwarf appears, \npunching you in the groin.  As you collapse to the floor, the tiny door slams shut, \na chorus of gruff laughter erupting from the other side. \n\nWASTED\n")
      characterAlive = false;
  break
  }
    else if (inspectDoor === "b") {
      if (doesNotHaveKey === false) {
        console.log("\nYou insert the horrible smelling key into the iron lock, \nwith some effort it turns with a loud click.  \nThe door swings opens easily, exposing a line of grinning Dwarves, \ntheir palms raised in the air, waiting to reward you with high fives in celebration of your glorious victory.\n\nThe End\n")
        doorClosed = false;
        break
      }
      else if (triedToOpenDoor === false) {
        console.log("\nYou try the door, it does not budge.  \nYou hear smirking from a group of people on the other side. ")
        triedToOpenDoor = true;
      } 
      else {
        console.log("You already tried that idiot.")
      }     
    }
    else if (inspectDoor === "c") {
      console.log("\nYou step back, leaving the door alone for now. ")
    break
    }
  }
  if (escapeRoom === "b") {
    console.log ("\nIt appears to be a small, dark and mysterious hole in the wall with a very ominous feeling.  \nIt is roughly wide enough to put your hand in. ")
  }
  while (escapeRoom === "b") {
    let inspectHole = readlineSync.keyIn("\n[a]Look through the Hole \n[b]Reach into the Hole \n[c]Leave the Hole Alone \n\n", {limit: ("abc")})
    if (inspectHole === "a") {
      console.log("\nYou crouch down to peer through the hole, as soon as you're eye level lines up, \na solid green fist pops out and punches you in the face. ")
    }
    else if (inspectHole === "b") {
      console.log("\nTentatively, you reach your hand into the hole.  \nA very solid and strong green hand locks around your wrist and yanks with an insane amount of force, \nripping your arm out of it's socket.  \nAs you fall to the ground, your life force seeping from you, you hear a sadistic giggling.  \nFor some reason, you feel like this was not a smart thing to do. \n\nWASTED\n")
      characterAlive = false;
      break
    }
    else if (inspectHole === "c") {
      console.log("\nYou leave the scary hole alone, \nfeeling like you have avoided something terrible. ")
      break
    }
  }
  if (escapeRoom === "c") {
    console.log ("\nIt appears to be a simple metal bucket, \nit smells horrible...  ")
  }
  while (escapeRoom === "c") {
    let inspectBucket = readlineSync.keyIn("\n[a]Kick the Bucket \n[b]Search the Bucket\n[c]Leave the Bucket Alone \n\n", {limit: ("abc")})
    if (inspectBucket === "a") {
      let kickBucket = readlineSync.keyIn("\nThis bucket smells horrible as it is! \nAre you sure you want to spread it's contents all over the floor? \n\n[a]On second thought, better not. \n[b]KICK IT!!!!! \n\n", {limit: ("ab")})
      if (kickBucket === "a") {
        console.log("\nYou leave the smelly bucket alone for now. ")
      }
      else if (kickBucket === "b") {
        console.log("\nThe sound of your foot connecting with the bucket rings loudly throughout the hollow room. \nThe vile contents fly through the air, splattering the walls and door.  \nYou hear loud footsteps ring down the hallway, coming closer until the door bangs open. \nA stout and smelly Dwarf pulls out a sword and runs you through the stomach.  \nAs you collapse to the floor, your innards spilling out, you have one last ironic though: \nNow you have kicked the bucket both figuratively and literally. \n\nWASTED\n")
        characterAlive = false;
        break
      }
    }
    else if (inspectBucket === "b") {
      console.log("\nWhile holding your breath, you reach your hand into the Bucket.  \nTrying not to think of what you're sifting through, you grasp onto something cool and hard.  \nPulling your hand out, you find yourself holding a very dirty and smelly iron key. ")
      doesNotHaveKey = false;
    }
    else if (inspectBucket === "c") {
      console.log("\nYou leave the smelly bucket alone for now. ")
      break
    }
  }
}

while (characterAlive && doorClosed) {
  escapeRoom()
}



/*
Want to add the option to play again at the end of every game.
Want to have the option for multiple responses to the same answer (look in the hole 1, look in the hole 2 search the bucket 1 search the bucket 2)
Proof read and polish
*/