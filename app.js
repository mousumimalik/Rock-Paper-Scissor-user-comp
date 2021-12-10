// caching the DOM - storing something for future use
let userScore_span = document.getElementById("user-score"); // storing refference in a variable
let compScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_p = document.querySelector(".result > p");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissor_div = document.getElementById("s");

let userScore = 0;
let compScore = 0;

function getCompChoice() {
    let choices = ["r", "p", "s"];
    let randomNo = Math.floor(Math.random() * 3); // Math is a buil-in obj in JS, random() is a method in Math Math obj. floor() use to convert nos into decimal. * 3 means the random no. will not go above 3, it'll in between 1-3
    return choices[randomNo];
}
// console.log(getCompChoice());

function convertToWord(letter) {
    if(letter === "r") return "rock";
    if(letter === "p") return "paper";
    return "scissor";
}

// setTimeout(function() {
//     console.log("hello");
// }, 1000);

function win(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    
    // result_p.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(compChoice) + " . you win!"; // ES5
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(compChoice)}${smallCompWord}. you win!`; // ES6

    // document.getElementById(userChoice).classList.add("red-glow");
    userChoice_div.classList.add("green-glow");

    // setTimeout(function() {
    //     // document.getElementById(userChoice).classList.remove("red-glow");
    //     userChoice_div.classList.remove("green-glow");
    // }, 1000); // ES5
    setTimeout( () => userChoice_div.classList.remove("green-glow"), 1000); // ES6
    
}

function lose(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(compChoice)}${smallCompWord}. you lost!`;
    userChoice_div.classList.add("red-glow");
    setTimeout( () => userChoice_div.classList.remove("red-glow"), 1000);
}

function draw(userChoice, compChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(compChoice)}${smallCompWord}. it's a draw!!`;
    userChoice_div.classList.add("yellow-glow");
    setTimeout( () => userChoice_div.classList.remove("yellow-glow"), 1000);
}

function game(userChoice) {
    let compChoice = getCompChoice();
    switch(userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            // console.log("USER WINS");
            win(userChoice, compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            // console.log("USER LOSE");
            lose(userChoice, compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            // console.log("DRAW");
            draw(userChoice, compChoice);
            break;
    }

    // console.log("User " + userChoice);
    // console.log("Computer " + compChoice);
}

function main() {
    // rock_div.addEventListener("click", function() {
    //     game("r");
    // }); // ES5
    rock_div.addEventListener("click", () => game("r")); // ES6

    paper_div.addEventListener("click", () => game("p"));

    scissor_div.addEventListener("click", () => game("s"));
}

main();

