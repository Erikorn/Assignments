const readlineSync = require("readline-sync");

      let characterAlive = true;
      let doorClosed = true;
      let foundDoorKey = false;
      let knockedOnDoor = false;
      let triedToOpenDoor = false;
      let lookedThroughHole = false;
      let searchedBucket = false;

console.log ("\nYou wake in a cold and dark room.  \nA small, barred window in the ceiling reveals \njust enough moonlight for you to make out three things: \nA door, a hole in the wall, and a bucket.")

function escapeRoom() {
  let escapeRoom = readlineSync.keyIn("\nWhat do you do? \n\n[a]Inspect the Door \n[b]Inspect the Hole \n[c]Inspect the Bucket \n\n", {limit: ("abc")})

  if (escapeRoom === "a") {
    console.log ("\nIt appears to be a large and solid wooden door, \nwith a smaller half-size door in the center, and an iron lock.")  
  }

  while (escapeRoom === "a") {
    let inspectDoor = readlineSync.keyIn(" \n[a]Knock on the Door \n[b]Open the Door \n[c]Leave the Door Alone \n\n", {limit: ("abc")})

    if (inspectDoor === "a") {
      if (knockedOnDoor === false) {
      console.log("\nAlmost as soon as your fist connects, an angry dwarf \nbursts through the half-door and punches you in the groin.  \nThe tiny door slams shut as you collapse to the floor. \nA chorus of gruff laughter erupts from the other side.")
      knockedOnDoor = true;
      }

      else {
        console.log ("\nYeah no, I don't think that's a good idea.")
      }
  }

    else if (inspectDoor === "b") {
      if (foundDoorKey === true) {
        console.log("\nWith some effort, the foul-smelling key turns with a loud click, and door swings opens easily. \nOutside you find a line of Dwarves, grinning as they raise their palms into the air, \nwaiting to reward you with high fives in celebration of your glorious victory.\n\nThe End Fool")
        let gameOver = readlineSync.keyIn("\nWould you like to play again? \n\n[y]Yes [n]No\n\n")
  
        if (gameOver === "y") {
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
          console.log("\nThanks for playing!\n") 
          doorClosed = false;
          break
        }
      }

      else if (triedToOpenDoor === false) {
        console.log("\nYou try the door.  It seems to be locked and will not budge.  \nA mix of snickering and snorts taunt you from the other side. ")
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
    console.log ("\nYou step forward, taking a closer look at the hole. \nYour gaze transfixed by some ominous darkness inside.  \nIt seems to be just about wide enough to reach through. ")
  }

  while (escapeRoom === "b") {
    let inspectHole = readlineSync.keyIn("\n[a]Peek through the Frightening Hole \n[b]Reach into the Terrifying Hole \n[c]Leave the Scary-Ass Hole Alone \n\n", {limit: ("abc")})

    if (inspectHole === "a") {
      if (lookedThroughHole === false) {
      console.log("\nAs you crouch down to peer through the hole, \na very green and VERY solid fist punches you in the face. ")
      lookedThroughHole = true;
      }

      else {
        console.log ("\nAgainst your better judgement, \nyou once again crouch back down to look through the hole.  \nThen find yourself on your back, this time with a broken nose.  \nI don't know how you thought that would be a good idea. ")
      }
    }

    else if (inspectHole === "b") {
      console.log("\nA voice screams from your head, begging you to stop. You ignore it, \ntentatively reaching into the hole. A deafening cry pierces the air as \na green hand locks around your wrist. It pulls with a sudden and terrifying strength, \nyour flesh tearing with a sickening sound as your arm is ripped off, shoulder and all.  \nSlumping to the ground, life force gushes from where your shoulder and arm used to be.  \nA sadistic cackling can be heard from the other side as your vision fades.  \nIn hindsight, you think that this may not have been a very good idea, then you die. ")
      let gameOver = readlineSync.keyIn("\nDidn't your mom ever teach you not to stick your hand into strange and Scary-Ass Holes?\n\nWould you like to try again? \n\n[y]Yes [n]No\n\n")

      if (gameOver === "y") {
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
      else if (gameOver === "n") {
        console.log("\nGoodbye\n") 
        characterAlive = false;
        break
      }
    }

    else if (inspectHole === "c") {
    console.log("\nManaging to tear your gaze away, you leave the Scary-Ass Hole Alone, \nand relief instantly washes over you. You feel as if you avoided something terrible. ")
    break
    }
  }
  if (escapeRoom === "c") {
    console.log ("\nA fetid stench invades your senses as you approach.  \nIt appears to be a simple metal bucket... \nA very smelly, simple, metal bucket.")
  }

  while (escapeRoom === "c") {
    let inspectBucket = readlineSync.keyIn("\n[a]Kick the Stinky Bucket! \n[b]Search the Smelly Bucket.\n[c]Leave the Foul Smelling-Bucket Alone. \n\n", {limit: ("abc")})
    
    if (inspectBucket === "a") {
      let kickBucket = readlineSync.keyIn("\nThis bucket smells foul enough as it is! \nAre you sure you want expose it's contents to the open air? \n\n[a]KICK IT!!!!! \n[b]On second thought, better not. \n\n", {limit: ("ab")})
      
      if (kickBucket === "a") {
        console.log("\nWith a satisfying punt, you send the bucket soaring across the room.  \nVile filth explodes outward as it crashes against the wall. \nShort, angry steps race toward your cell. A very angry dwarf \nbarges in and runs you through with a short sword.  \nCollapsing to the floor, you desperately cling to your stomach \nas your innards spill out.  Your final, dying thought is an ironic one: \nYou have just figuratively and literally kicked the bucket. \n\nYou dead, fool.")
        let gameOver = readlineSync.keyIn("\nWould you like to try again? \n\n[y]Yes [n]No\n\n")
  
        if (gameOver === "y") {
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
        else if (gameOver === "n") {
          console.log("\nGoodbye\n") 
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
        console.log("\nSuppressing a gag, you hold your breath and reach into the Bucket.  \nTrying not to think what you are sifting through, you clasp onto something cool and hard.  \nPulling your hand out, you find yourself holding a very dirty, and smelly iron key. ")
        searchedBucket = true;
        foundDoorKey = true;
      }

      else {
        console.log("\nWhat is wrong with you?")
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
