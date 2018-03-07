var view = {
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },


    displayMiss: function (location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

var model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships: [{ locations: ["06", "16", "26"], hits: ["", "", ""] },
    { locations: ["24", "34", "44"], hits: ["", "", ""] },
    { locations: ["10", "11", "12"], hits: ["", "", ""] }],

    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++) {
            var index = this.ships[i].locations.indexOf(guess);
            if (index >= 0) {
                this.ships[i].hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("Hit!");
                if (this.isSunk(ship)) {
                    view.displayMessage("You sank my battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessag e("You missed");
        return false;
    },

    isSunk: function (ship) {
        for (var i = 0; i < ship.locations; i++) {
            if (ship.locations[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
}

var controller = {
    guesses: 0,

    processGuess: function (guess) {


    }


}

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2) {
        alert("oops! Please, enter a letter and a number on the board");
    } else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);

        if (isNan(row) || isNan(column)) {
            alert("Oops, that isn't on the board");
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert("Ooops, that's off the board!");
        } else {
            return row + column;
        }
    }
    return null;
}