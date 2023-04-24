// open the rules of the game
const openRules = (rulesBody) => {
    rulesBody.style.display = "initial";
}

// close the rules of the game
const closeRules = (rulesBody) => {
    rulesBody.style.display = "none";
}

// generates a random number between 1 and 3 to be the house pick
const housePickGenerate = () => {
    return (Math.floor(Math.random() * 3) + 1);
}

// verify the step to check if the player is in a new game (play again), if yes, this function generates a new house pick... if negative, the house pick stays the same
const newHousePickIfPlayAgain = (housePick, step) => {
    if(step > 3) {
        return housePickGenerate();
    }
    return housePick;
}

// verify the step to check if the player is in a new game (play again), if yes, this means this is a new game and the step get back to 0 (zero)... if negative, the step stays the same
const verifyStep = (step) => {
    if(step > 3) {
        return 0;
    }
    return step;
}

// highlights the winner with 3 circles
const highlightWinner = (winner) => {
    let divPlayerPick;
    const circle1 = document.createElement('div');
    const circle2 = document.createElement('div');
    const circle3 = document.createElement('div');
    
    switch (winner) {
        // House Wins
        case 1:
            divPlayerPick = document.querySelector(".pick2");

            circle1.classList = "allHighlightCircle highlightCircle1 houseHighlightCircle1";
            circle1.setAttribute("id", "houseCircle1");
            divPlayerPick.append(circle1);

            circle2.classList = "allHighlightCircle highlightCircle2 houseHighlightCircle2";
            circle2.setAttribute("id", "houseCircle2");
            divPlayerPick.append(circle2);

            circle3.classList = "allHighlightCircle highlightCircle3 houseHighlightCircle3";
            circle3.setAttribute("id", "houseCircle3");
            divPlayerPick.append(circle3);
            break;
        // player 1 wins
        case 2:
            divPlayerPick = document.querySelector(".pick1");

            circle1.classList = "allHighlightCircle highlightCircle1 playerHighlightCircle1";
            circle1.setAttribute("id", "playerCircle1");
            divPlayerPick.append(circle1);
    
            circle2.classList = "allHighlightCircle highlightCircle2 playerHighlightCircle2";
            circle2.setAttribute("id", "playerCircle2");
            divPlayerPick.append(circle2);
    
            circle3.classList = "allHighlightCircle highlightCircle3 playerHighlightCircle3";
            circle3.setAttribute("id", "playerCircle3");
            divPlayerPick.append(circle3);
            break;
        default:
            break;
    }
}

// verify if a player highlight exists, if yes, removes the 3-circle highlight from this player
const removeHighlight = () => {
    // verify if player is highlighted
    if(document.querySelector("#playerCircle1") !== null) {
        const divPlayerCircle1 = document.querySelector("#playerCircle1");
        const divPlayerCircle2 = document.querySelector("#playerCircle2");
        const divPlayerCircle3 = document.querySelector("#playerCircle3");

        divPlayerCircle1.remove();
        divPlayerCircle2.remove();
        divPlayerCircle3.remove();
    } 
    // verify if house is highlighted
    else if(document.querySelector("#houseCircle1") !== null) {
        const divHouseCircle1 = document.querySelector("#houseCircle1");
        const divHouseCircle2 = document.querySelector("#houseCircle2");
        const divHouseCircle3 = document.querySelector("#houseCircle3");

        divHouseCircle1.remove();
        divHouseCircle2.remove();
        divHouseCircle3.remove();
    }
}

// verify the playerPick and make the game goes to the next page, showing the image of the player pick
const gamePick = (pick) => {
    //remove any highlight existing, creates and add an image to the page, this image will show the player pick in the next game screen
    removeHighlight();
    const gamePick = document.querySelector("#gamePick");
    const gameSteps = document.querySelector("#gameSteps");
    const divPlayerPick = document.querySelector(".pick1 div");
    let img = document.createElement('img');
    img.classList = "pickImg";
    img.alt = "Player 1 Pick Image"
    divPlayerPick.append(img);

    // hide the gamePick screen and show the player and house pick screen
    gamePick.style.display = "none";
    gameSteps.style.display = "initial";

    // identify the image correspondent to player pick and changes the source of the img element to the correct image
    switch (pick) {
        case 1:
            img.src = "./images/icon-paper.svg";
            divPlayerPick.classList.add("paper");
            return pick;
        case 2:
            img.src = "./images/icon-scissors.svg";
            divPlayerPick.classList.add("scissor");
            return pick;
        case 3:
            img.src = "./images/icon-rock.svg";
            divPlayerPick.classList.add("rock");
            return pick;
        default:
            break;
    }
}

// this function will be called when the player picks an icon, so this function will increase the step (it means that we are going to the next step of the game) and return the playerPick and the new step of the game
const playerSelectedPick = (value, step) => {
    step++;
    let playerPick = gamePick(value); 
    step = verifyStep(step);
    
    return [playerPick, step];
}

// this function is responsible to deal with all the game steps after the player pick
const gameSteps = (step, playerPick, housePick, score) => {
    const nextButton = document.querySelector(".nextStepButton");
    const divNextStep = document.querySelector("#nextStep");
    let divHousePick;
    let result;

    switch (step) {
        // shows the house pick on screen
        case 2:
            let img = document.createElement('img');
            img.classList = "pickImg";
            img.alt = "House Pick Image"
            divHousePick = document.querySelector(".pick2 div");
            divHousePick.append(img);
    
            switch (housePick) {
                case 1:
                    img.src = "./images/icon-paper.svg";
                    divHousePick.classList = "iconsDiv pickDiv paper";
                    return score;
                case 2:
                    img.src = "./images/icon-scissors.svg";
                    divHousePick.classList = "iconsDiv pickDiv scissor";
                    return score;
                case 3:
                    img.src = "./images/icon-rock.svg";
                    divHousePick.classList = "iconsDiv pickDiv rock";
                    return score;
                default:
                    return score;
            }
            
        // shows the result of the game and also shows the "play again" option to the player
        case 3:
            nextButton.textContent = "PLAY AGAIN";
            const actualScore = document.querySelector("#scoreNumber");
            let newScore = "";
            result = document.createElement("p");
            result.style.fontSize = "55px";
            result.style.color = "white";
            result.style.margin = "0 0 20px 0";
            result.style.textAlign = "center";
            divNextStep.insertBefore(result, nextButton)
    
            // House Wins
            if((playerPick - housePick) === -1 || (playerPick - housePick) === 2) {
                result.textContent = "YOU LOSE";
                score -= 1;
                newScore = String(score);
                actualScore.textContent = newScore;
    
                highlightWinner(1);
            } 
            // Draw
            else if (playerPick === housePick) {
                result.textContent = "DRAW";
            } 
            // Player Wins
            else {
                result.textContent = "YOU WIN";
                score += 1;
                newScore = String(score);
                actualScore.textContent = newScore;
    
                highlightWinner(2);
            }
            return score;

        // returns all game settings to the initial state, except for the score... this case happens when player clicks on "play again"
        case 4:
            const gameSelection = document.querySelector("#gamePick");
            const gameSteps = document.querySelector("#gameSteps");
            const imgPlayerPick = document.querySelector(".pick1 div img");
            const imgHousePick = document.querySelector(".pick2 div img");
            const divPlayerPick = document.querySelector(".pick1 div");
            divHousePick = document.querySelector(".pick2 div");
            result = document.querySelector("#nextStep p");
    
            gameSelection.style.display = "flex";
            gameSteps.style.display = "none";
            imgPlayerPick.remove();
            imgHousePick.remove();
            divHousePick.classList = "housePickStep1";
            divPlayerPick.classList = "iconsDiv pickDiv";
            result.remove();
            nextButton.textContent = "NEXT";
    
            return score;
        default:
            return score;
    }
}

const paperBtn = document.querySelector(".paper")
const scissorBtn = document.querySelector(".scissor")
const rockBtn = document.querySelector(".rock")
const rulesButton = document.querySelector("#rulesButton");
const nextButton = document.querySelector(".nextStepButton");
const closeRulesButton = document.querySelector("#buttonClose");
const rulesBody = document.querySelector("#rulesBody");
let step = 0;
let playerPick = 0;
let housePick = 0;
let score = 0;
let playerSectedPick;

housePick = housePickGenerate();

rulesButton.addEventListener("click", () => {
    openRules(rulesBody);
});

closeRulesButton.addEventListener("click", () => {
    closeRules(rulesBody);
});

paperBtn.addEventListener("click", () => {
    playerSectedPick = playerSelectedPick(1, step);
    playerPick = playerSectedPick[0]; 
    step = playerSectedPick[1];
});

scissorBtn.addEventListener("click", () => {
    playerSectedPick = playerSelectedPick(2, step);
    playerPick = playerSectedPick[0]; 
    step = playerSectedPick[1];
});

rockBtn.addEventListener("click", () => {
    playerSectedPick = playerSelectedPick(3, step);
    playerPick = playerSectedPick[0]; 
    step = playerSectedPick[1];
});

nextButton.addEventListener("click", () => {
    step++; 
    score = gameSteps(step, playerPick, housePick, score);
    housePick = newHousePickIfPlayAgain(housePick, step);
    step = verifyStep(step);
});