var colors = [];
var definedColor;
var numberofdiamonds = 3;
var diamonds = document.querySelectorAll(".diamond");
var resultDisplay = document.querySelector("#result");
var colorDisplay = document.querySelector("#colorDisplay");
var respawnButton = document.querySelector("#respawn");
var modeButtons = document.querySelectorAll(".mode1,.mode2,.mode3");
var h1 = document.querySelector("h1");

data();
function data() {
    createMode();
    creatediamond();
    reset();
}
function createMode() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            modeButtons[2].classList.remove("selected");
            this.classList.add("selected");
            if (this.textContent === "Easy")
                numberofdiamonds = 3; 
            
            else if (this.textContent === "Normal")
                numberofdiamonds = 6;

            else
                numberofdiamonds = 9;
            reset();
        });
    }

}


function creatediamond() {
    for (var i = 0; i < diamonds.length; i++) {
        diamonds[i].addEventListener("click", function () {
            var clickedColor = this.style.background;
            if (definedColor === clickedColor) {
                resultDisplay.textContent = "Correct !";
                respawnButton.textContent = "Play Again ?"
                changeColors(definedColor);
                h1.style.background = definedColor;
            }
            else {
                this.style.background = "#232323";
                resultDisplay.textContent = "Try Again!";
            }

        });
    }
}

function reset() {
    colors = generateRandomColors(numberofdiamonds);
    definedColor = pickColor();
    respawnButton.textContent = "New Colors";
    resultDisplay.textContent = "";
    for (var i = 0; i < diamonds.length; i++) {
        if (colors[i]) {
            diamonds[i].style.display = "block";
            diamonds[i].style.background = colors[i];
        }
        else {
            diamonds[i].style.display = "none";
        }

    }
    h1.style.background = "black";
}

respawnButton.addEventListener("click", function () {
    reset();
});



function changeColors(color) {
    for (var i = 0; i < diamonds.length; i++) {
        diamonds[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    var add1 = [];
    for (var i = 0; i < num; i++) {
        add1.push(randomColor());
    }
    return add1;
}
function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}