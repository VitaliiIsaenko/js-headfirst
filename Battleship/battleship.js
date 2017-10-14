var location1 = Math.floor(Math.random() * 5);
var location2 = location1 + 1;
var location3 = location2 + 1;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (!isSunk) {
    guess = prompt("Ready, aim, fire! (enter a number between 0 and 6):");
    if (guess < 0 || guess > 6) {
        alert("Please, enter a valid cell number");
    }
    else {
        guesses++;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert("Hit!");
            hits++;
            if (hits == 3){
                isSunk = true;
                alert("You sunk my battleship!");
            }
        }
        else {
            alert("Miss!");
        }
    }
}

var stats = "You took " + guesses + " and accuracy is " + 3/guesses;
alert(stats);