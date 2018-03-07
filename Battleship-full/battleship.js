var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    
    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

view.displayMiss("00");
view.displayMiss("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMessage("Tap tap, is this thing on?");

var model = {
    boardSize:7,
    numShips:3,
    shipLength: 3,
    shipsSunk: 0,

    ships:[{locations: ["06", "16", "26"], hits: ["", "", ""]},
    {locations: ["24", "34", "44"], hits: ["", "", ""]},
    {locations: ["10", "11", "12"], hits: ["", "", ""]}],

    fire: function(guess) {
        for(var i = 0; i < this.numShips; i++) {
            var index = this.ships[i].locations.indexOf(guess);
            if(index >= 0) {
                ship.hits[index] = "hit";
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
        view.displayMessage("You missed");
        return false;
    },

    isSunk: function(ship) {
        for(var i = 0; i < ship.locations; i++) {
            if (ship.locations[i] !== "hit") {
                return false;
            }
        }
        return true;
    }
}