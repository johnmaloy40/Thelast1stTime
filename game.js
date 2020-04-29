

let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score_board");
const result_div = document.querySelector(".result");
const bernie_div = document.getElementById("b");
const mcconell_div = document.getElementById("m");
const corona_div = document.getElementById("c");

function getComputerChoice() {
    const choices = ['b', 'm', 'c'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
}
function win() {
    userScore++;
    userScore_span.innerHTML = user-score;
    compScore_span.innerHTML = computer-score;
}
function lose() {
    console.log("lose");
}
function draw() {
    console.log("draw");
}
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "mb":
        case "mc":
        case "cb":
            win();
            break;
        case "bc":
        case "mc":
        case "cm":
            lose();
            break;
        case "bb":
        case "mm":
        case "cc":
            draw();
            break;
    }
}

function main() {
    bernie_div.addEventListener('click', function() {
        game("b");
    })

    mcconell_div.addEventListener('click', function() {
        game("m");
    })

    corona_div.addEventListener('click', function() {
        game("c");
    })
}

main();