const readlineSync = require("readline-sync");

      let characterAlive = true;
      let doorClosed = true;
      let foundDoorKey = false;
      let knockedOnDoor = false;
      let triedToOpenDoor = false;
      let lookedThroughHole = false;
      let searchedBucket = false;

console.log ("\nYou wake in a cold and dark room.  \nA small, barred hole in the ceiling reveals \njust enough moonlight for you to make out three things: \nA door, a hole in the wall, and a bucket.")

function escapeRoom() {
  let escapeRoom = readlineSync.keyIn("\nWhat do you do? \n\n[a]Inspect the Door \n[b]Inspect the Hole \n[c]Inspect the Bucket \n\n", {limit: ("abc")})

  if (escapeRoom === "a") {
    console.log ("\nIt appears to be a large and solid wooden door, \nwith a smaller wicket door in the center.  \nThere is also an iron keyhole on the side.")  
  }

  while (escapeRoom === "a") {
    let inspectDoor = readlineSync.keyIn(" \n[a]Knock on the Door \n[b]Open the Door \n[c]Leave the Door Alone \n\n", {limit: ("abc")})

    if (inspectDoor === "a") {
      if (knockedOnDoor === false) {
      console.log("\nAlmost as soon as your fist connects with the door, \nan angry looking dwarf opens the wicket door and punches you in the groin.  \nThe tiny door slams shut as you collapse to the floor. \nA chorus of gruff laughter erupting from the other side.")
      knockedOnDoor = true;
      }

      else {
        console.log ("\nYeah no, I don't think that's a good idea.")
      }
  }

    else if (inspectDoor === "b") {
      if (foundDoorKey === true) {
        console.log("\nYou insert the foul-smelling key into the iron lock. \nWith some effort it turns with a loud click.  \nThe door swings opens easily, exposing a line of grinning Dwarves. \nTheir palms raised in the air, waiting to reward you with high fives in celebration of your glorious victory.\n\nThe End\n")
        let gameOver = readlineSync.keyIn("\nWould you like to play again? \n\n[a]Yes [b]No\n\n")
  
        if (gameOver === "a") {
          console.log ("\nYou wake in a cold and dark room.  \nA small, barred hole in the ceiling reveals \njust enough moonlight for you to make out three things: \nA door, a hole in the wall, and a bucket.")
          characterAlive = true; 
          doorClosed = true; 
          foundDoorKey = false; 
          knockedOnDoor = false; 
          triedToOpenDoor = false; 
          lookedThroughHole = false; 
          searchedBucket = false; 
          break
        }
        else if (gameOver === "b") {
          console.log("Thanks for playing!") 
          doorClosed = false;
          break
        }
      }

      else if (triedToOpenDoor === false) {
        console.log("\nYou try the door.  It seems to be locked and will not budge.  \nYou hear a lot of smirks and chuckles from the other side. ")
        triedToOpenDoor = true;
      } 

      else {
        console.log("\nYou already tried that idiot. \nIt's obviously still locked.")
      }     
    }

    else if (inspectDoor === "c") {
      console.log("\nYou step back, leaving the door alone for now. ")
    break
    }
  }

  if (escapeRoom === "b") {
    console.log ("\nYou step forward, taking a closer look at the hole. \nYour gaze transfixed by the ominous darkness inside.  \nIt seems to be just about wide enough to reach through. ")
  }

  while (escapeRoom === "b") {
    let inspectHole = readlineSync.keyIn("\n[a]Peek through the Frightening Hole \n[b]Reach into the Terrifying Hole \n[c]Leave the Scary-Ass Hole Alone \n\n", {limit: ("abc")})

    if (inspectHole === "a") {
      if (lookedThroughHole === false) {
      console.log("\nAs you crouch down to peer through the hole, \na very green and VERY solid fist punches you in the face. ")
      lookedThroughHole = true;
      }

      else {
        console.log ("\nAgainst your better judgement, \nyou crouch back down to look through the hole again.  \nOnce again youb find yourself on your back, this time with a broken nose.  \nI don't know why you thought that was a good idea. ")
      }
    }

    else if (inspectHole === "b") {
      console.log("\nThe voice of reason in your head screams for you to stop. \nYou tentatively reach your hand into the hole.  \nA green hand suddenly locks around your wrist with a terrifying strength. \nPulling with an insane amount of force, you hear the sickening \nsound of flesh tearing as your arm is ripped out of it's socket.  \nYou fall to the ground, life force gushing from where your shoulder used to be.  \nAs your vision fades, a sadistic cackling can be heard from the other side.  \nFor some reason, you feel like this was not a very smart thing to do. \n\nYou dead.")
      let gameOver = readlineSync.keyIn("\nWould you like to play again? \n\n[a]Yes [b]No\n\n")

      if (gameOver === "a") {
        console.log ("\nYou wake in a cold and dark room.  \nA small, barred hole in the ceiling reveals \njust enough moonlight for you to make out three things: \nA door, a hole in the wall, and a bucket.")
        characterAlive = true; 
        doorClosed = true; 
        foundDoorKey = false; 
        knockedOnDoor = false; 
        triedToOpenDoor = false; 
        lookedThroughHole = false; 
        searchedBucket = false; 
        break
      }
      else if (gameOver === "b") {
        console.log("Goodbye") 
        characterAlive = false;
        break
      }
    }

    else if (inspectHole === "c") {
    console.log("\nYou manage to tear your gaze away and leave the Scary-Ass Hole Alone, \nRelief washes over you, and you feel as if you avoided something terrible. ")
    break
    }
  }
  if (escapeRoom === "c") {
    console.log ("\nA fetid stench invades your senses as you approach.  \nIt appears to be a simple metal bucket... \nA very smelly, simple, metal bucket.")
  }

  while (escapeRoom === "c") {
    let inspectBucket = readlineSync.keyIn("\n[a]Kick the Stinky Bucket! \n[b]Search the Smelly Bucket.\n[c]Leave the Foul Smelling-Bucket Alone. \n\n", {limit: ("abc")})
    
    if (inspectBucket === "a") {
      let kickBucket = readlineSync.keyIn("\nThis bucket smells foul enough as it is! \nAre you sure you want its contents spread across the room? \n\n[a]KICK IT!!!!! \n[b]On second thought, better not. \n\n", {limit: ("ab")})
      
      if (kickBucket === "a") {
        console.log("\nWith a satisfying punt, you send the bucket soaring across the room.  \nIt's vile filth explodes throughout the room as it crashes against the wall. \nYou hear short footsteps angrily race toward your cell. \nThe door bursting open, a stout and angry Dwarf unsheathes a short sword and runs you through.  \nYou Collapse to the floor, desperately clinging to your stomach \nin vain as your innards spill out.  As you perish, your final, dying thought is an ironic one: \nYou just figuratively and literally kicked the bucket. \n\nYou dead, fool.")
        let gameOver = readlineSync.keyIn("\nWould you like to play again? \n\n[a]Yes [b]No\n\n")
  
        if (gameOver === "a") {
          console.log ("\nYou wake in a cold and dark room.  \nA small, barred hole in the ceiling reveals \njust enough moonlight for you to make out three things: \nA door, a hole in the wall, and a bucket.")
          characterAlive = true; 
          doorClosed = true; 
          foundDoorKey = false; 
          knockedOnDoor = false; 
          triedToOpenDoor = false; 
          lookedThroughHole = false; 
          searchedBucket = false; 
          break
        }
        else if (gameOver === "b") {
          console.log("Goodbye") 
          characterAlive = false;
          break
        }
      }

      else if (kickBucket === "b") {
        console.log("\nYou leave the smelly bucket alone for now. ")
      }
    }

    else if (inspectBucket === "b") {
      if (searchedBucket === false) {
        console.log("\nYou try to suppress a gag, holding your breath as you reach into the Bucket.  \nTrying not to think of what you're sifting through, you hand clasps onto something cool and hard.  \nPulling your hand out, you find yourself holding a very dirty, and smelly iron key. ")
        searchedBucket = true;
        foundDoorKey = true;
      }

      else {
        console.log("What is wrong with you?")
      }
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
