
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
            title.innerText = "";
            document.getElementById("board").appendChild(title)
        }
    }
    // Listen for Key Press
    document.addEventListener("keyup", (e) => {
    if(game0ver) return;

    // alert(e,code);
    if("KeyA" <= e.code && e.code <= "KeyZ"){
    if(col < width){
        let currentTile = document.getElementById(row.toString() + "-" + col.toString());
        if(currentTile.innerText == "")
        {
            currentTile.innerText = e.code[3];
            col++;
        }
    }
}
        else if(e.code == "Backspace"){
            if(0 < col && col <= width) {
                col--;
            }
            let currentTile = document.getElementById(row.toString() + "-" + col.toString()); 
            if (currentTile.innerText == "") {
                currentTile.innerText = e.code[3]
                col += 1;
             }
        
    
    }
    else if (e.code == "Backspace") {
        if (0 < col && col <= width) {
            col -=1;
        }
        let currentTile = document.getElementById(row.toString() +
         "-" + col.toString());
        currentTile.innerText = "";
    }
    
    else if (e.code == "Enter") {
        update();
        row++;
        col=0;
    }
    if (!gameOver && row == height) {
        game0ver = true;
        document.getElementById("answer").innerText = word;
    }
    })
}
    function update() {
        let correct = 0;
        for (let c = 0; c < width; c++) {
            let title = document.getElementById(row.toString() + "-" + c);
            let letter = title.innerText;

            // Correct position?
            if (word[c] == letter) {
                title.classList.add("correct");
                correct++;
            }
            else if (word.includes(letter)) {
                title.classList.add("present");
            }
            else {
                title.classList.add("absent");
            }

            if (correct == width) {
                gameOver = true;
                
            }
        }
    }