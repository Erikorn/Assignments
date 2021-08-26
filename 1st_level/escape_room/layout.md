
//const name = readline.question("What is your name? ");
//console.log(name + ", you find yourself waking up in a dark room.  A small, barred hole in the ceiling reveals just enough moonlight for you to make out three things: A door, a hole in the wall, and a bucket.  What do you do?");

//boolean
class storyVariable {
    constructor(characterAlive) {
        this.characterAlive = true;
        this.doorOpen = false;
        this.characterHasKey = false;
    }    
}

let Story = new storyVariables

while (Story.characterAlive === true) {


if (question == "Inspect Bucket") {
  console.log('You Inspect the Bucket');
} else if(question == "Inspect Door") {
  console.log('You Inspect the Door');
} else {
    console.log("Error!")
}
}



//boolean value alive or dead
//while loop stopping value will be the boolean value`

Escape Room

The character has 3 variables that will affect the game.
    isAlive
        true-game continues(default)
        false-game ends
    doorOpen
        true-game ends
        false-game continues(default)
    hasKey
        true-door can open
        false-door won't open(default)

"You find yourself waking up in a dark room.  A small, barred hole in the ceiling reveals just enough moonlight for you to make out three things: A door, a hole in the wall, and a bucket.  What do you do?"
      
Three choices:
            
Inspect Door
    "It appears to be a large and solid wooden door, with a smaller trap door in the middle.  There is also an iron keyhole on the side."
        Knock on the Door
            "You pound on the door with your first, as soon as you finish the small trap door flings open and a Dwarf appears, punching you in the groin.  You collapse to the floor as the trap door slams shut, hearing hysterical laughing on the other side."
        Open the Door
            (noKey = True) "You try the door, it does not budge.  You hear smirking from a group of people on the other side."
            (noKey = False) "You insert the horrible smelling key into the iron lock, turning it and hearing a loud click.  The door opens easily, exposing a line of grinning Dwarves, their palms raised in the air, waiting to reward you with high fives in celebration of your glorious victory." (doorOpen = true)
        Leave Door Alone
            "You step back, leaving the door alone for now." (exit inspect door)

Inspect Hole
    "It appears to be a small, dark and mysterious hole in the wall with a very ominous feeling.  It is roughly wide enough to put your hand in."
        Look through the Hole 
            (1st Time)"You crouch down to peer through the hole, as soon as you're eye level lines up, a solid green fist pops out and punches you in the face." (exit inspect hole)
            (2nd Time)"Against your better judgement you decide to look through the hole again.  To nobody's surprise you find your nose once again flattened by a broad green fist."
        Reach into the Hole
            "Tentatively, you reach your hand into the hole.  A very solid and strong green hand locks around your wrist and yanks with an insane amount of force, ripping your arm out of it's socket.  As you fall to the ground, your life force seeping from you, you hear a sadistic giggling.  For some reason, you feel like this was not a smart thing to do." (isAlive = false)
        Leave Hole Alone
            "You leave the scary hole alone, feeling like you have avoided something terrible." (exit inspect hole)

Inspect Bucket
    "It appears to be a simple metal bucket, it smells horrible..."
        Kick the Bucket
            "This bucket smells horrible as it is, are you sure you want to spread it's contents all over the floor?"
                On second thought, better not.
                    "You leave the smelly bucket alone for now." (exit inspect bucket)
                KICK IT!
                    "The sound of your foot connecting with the bucket rings loudly throughout the hollow room, as the vile contents fly through the air, splattering the walls and door.  You hear loud footsteps ring down the hallway, coming closer until the door bangs open. A stout and smelly Dwarf pulls out a sword and runs you through the stomach.  As you collapse to the floor, your innards spilling out, you have one last ironic though: Now you have kicked the bucket both figuratively and literally." (isAlive=false)
        Reach into the Bucket
            "While holding your breath, you reach your hand into the Bucket.  Trying to ignore the thought of what you're sifting through, you grasp onto something cool and hard.  Pulling your hand out, you find yourself holding a very dirty and smelly iron key." (hasKey=true) (exit inspect bucket)
        Leave Bucket Alone
            "You leave the smelly bucket alone for now." (exit inspect bucket)


    if (escapeRoom === "") {
      console.log(" \n")
      let escapeRoom = readlineSync.keyIn (" \n[a] \n[b] \n[c] ", {limit: ("abc")})
    }