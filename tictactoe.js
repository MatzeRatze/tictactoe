console.log ("Hallo Player, let the game begin")

//Your hand

function playersPlay (playersSelection) {

 console.log("Please make a choice: Rock, Paper or Scissors")

    let auswahl = prompt ("Whats your choice dude? Rock, Paper or Scissors ")
     console.log("Deine Auswahl ist " + auswahl)

};
playersPlay();



// Computer Hand
function computersPlay (computerSelection) {
    
    return computerSelection[Math.floor(Math.random()*computerSelection.length)];

};

    let computerSelection = ["Rock", "Paper", "Scissors"]
    console.log(computersPlay(computerSelection));


//Start the game and show result


