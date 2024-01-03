
var height = 6; //number of guesses
var width = 5; //length of the word

var row = 0; //current guess (attempt #)
var col = 0; // current letter for that attempt

var game0ver = false;
var word = "SQUID";


window.onload = function(){
    intialize();
}


function intialize() {

    // Create the game board
    for (let r = 0; r < height; r++) {
        for (let c = 0; c < width; c++) {
            let title = document.createElement("span");
            title.id = r.toString() + "-" + c.toString();
            title.classList.add("title");
            title.innerText = "p";
            document.getElementById("board").appendChild(title)
        }
    }
}