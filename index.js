// Variables
let playerAnswer;
let incorrect = 0;
let correct = 0;
let rounds = 10;
let gamemode = null;
let number = null;
let label = document.getElementById("number");  // P element number will be shown in

let startBase = null;   // Base to start in
let endBase = null;     // Base to convert to

// DOM elements
const menu = document.getElementById("menu-div"); // Main menu div
const game = document.getElementById("main");     // Game div

const form = document.getElementById("inputForm");
const userInput = document.getElementById("userAnswer");

const correctElement = document.getElementById("correct");
const incorrectElement = document.getElementById("incorrect");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    playerAnswer = userInput.value;
    // Function to handle user input
    checkAnswer();

    // Clear answer box
    userInput.value = "";
})

function checkAnswer(){
    let correctAnswer = parseInt(number, startBase);
    let input = parseInt(playerAnswer, endBase);

    if(correctAnswer === input){
        correct++;
        console.log(correct);
        correctElement.innerHTML = 'Correct: ' +  String(correct);
    }
    else{
        incorrect++;
        console.log(incorrect);
        incorrectElement.innerHTML = 'Incorrect: ' + String(incorrect);
    }
}


// Sets the gamemode parameters
function setMode(mode, startbase, endbase){
    startBase = startbase;
    endBase = endbase;
    gamemode = mode;
    console.log('Start base: ' + startBase + ' end base ' + endBase);
    console.log(gamemode);
}


// Game Function
function startGame(){
    // Ensure a gamemode has been selected
    if(startBase === null){
        window.alert('No gamemode selected');
        return;
    }
       // Hide the menu div and display the game div
    menu.style.display = "none";
    main.style.display = "block";    
    changeNum(startBase);
}



// Generates a random number in one of the three bases and displays it
function changeNum(base){
    
    if(base === 10){
        number = Math.floor(Math.random() * 256);
        document.getElementById("number").innerHTML = String(number);
    }


    else{
        number = Math.floor(Math.random() * 256);
        number = (number.toString(base)).toUpperCase(); // Convert to base and make sure hex will be uppercase
        console.log(number, base);
        
        // Ensures hex string is always 2 characters
        if(base === 16 && number.length === 1){
            let str = '0';
            str = str.concat(number);
            number = str;
        }


        // This ensures the binary string is always 8 characters
        if(base === 2 && number.length < 8){
            let add = 8 - number.length;
            console.log('Add: ' + add);
            let str = '0';
            // Add zeros to the string 'str'
            for(let i = 1; i < add; i++){
                str = str.concat('0');
            }

            // Add the zeros to the beginning of the number
            str = str.concat(number);
            // Set the numebr equal to the string with leading zeros
            number = str;
        }

        document.getElementById("number").innerHTML = String(number);
    }
}




/*

1. Select Game mode
2. ** Select rounds later **
3. Game Loop
3a. Generate & Display Number
3b. Compare user input to number
3c. Update correct / incorrect answers
3d. Pick New Number


 */