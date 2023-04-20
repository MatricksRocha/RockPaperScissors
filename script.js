// enable all the buttons on the gamePick screen
function enableButtons(paperBtn, scissorBtn, rockBtn, rulesButton) {
    paperBtn.disabled = false;
    scissorBtn.disabled = false;
    rockBtn.disabled = false;
    rulesButton.disabled = false;
}

// disable all the buttons on the gamePick screen
function disableButtons(paperBtn, scissorBtn, rockBtn, rulesButton) {
    paperBtn.disabled = true;
    scissorBtn.disabled = true;
    rockBtn.disabled = true;
    rulesButton.disabled = true;
}

// open the rules of the game
function openRules(rulesWindow, container) {
    rulesWindow.style.display = "initial";
    container.style.opacity = "15%";
}

// close the rules of the game
function closeRules(rulesWindow, container) {
    rulesWindow.style.display = "none";
    container.style.opacity = "100%";
}

// returns the width of the window
function getWidth() {
    return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
    );
}

// generates a random number between 1 and 3 to be the house pick
function housePickGenerate() {
    return (Math.floor(Math.random() * 3) + 1);
}

// verify the step to check if the player is in a new game (play again), if yes, this function generates a new house pick... if negative, the house pick stays the same
function newHousePickIfPlayAgain(housePick, step) {
    if(step > 3) {
        return housePickGenerate();
    }
    return housePick;
}

// verify the step to check if the player is in a new game (play again), if yes, this means this is a new game and the step get back to 0 (zero)... if negative, the step stays the same
function verifyStep(step) {
    if(step > 3) {
        return 0;
    }
    return step;
}

// highlights the winner with 3 circles
function highlightWinner(winner, pageWidth) {
    let divPlayerPick;
    const circle1 = document.createElement('div');
    const circle2 = document.createElement('div');
    const circle3 = document.createElement('div');
    
    switch (winner) {
        // House Wins
        case 1:
            divPlayerPick = document.querySelector(".pick2");

            circle1.classList = "allHighlightCircle desktopHighlightCircle1 houseDesktopHighlightCircle1";
            circle1.setAttribute("id", "houseCircle1");
            divPlayerPick.append(circle1);

            circle2.classList = "allHighlightCircle desktopHighlightCircle2 houseDesktopHighlightCircle2";
            circle2.setAttribute("id", "houseCircle2");
            divPlayerPick.append(circle2);

            circle3.classList = "allHighlightCircle desktopHighlightCircle3 houseDesktopHighlightCircle3";
            circle3.setAttribute("id", "houseCircle3");
            divPlayerPick.append(circle3);
            break;
        // player 1 wins
        case 2:
            divPlayerPick = document.querySelector(".pick1");

            circle1.classList = "allHighlightCircle desktopHighlightCircle1 playerDesktopHighlightCircle1";
            circle1.setAttribute("id", "playerCircle1");
            divPlayerPick.append(circle1);
    
            circle2.classList = "allHighlightCircle desktopHighlightCircle2 playerDesktopHighlightCircle2";
            circle2.setAttribute("id", "playerCircle2");
            divPlayerPick.append(circle2);
    
            circle3.classList = "allHighlightCircle desktopHighlightCircle3 playerDesktopHighlightCircle3";
            circle3.setAttribute("id", "playerCircle3");
            divPlayerPick.append(circle3);
            break;
        default:
            break;
    }
}

// verify if a player highlight exists, if yes, removes the 3-circle highlight from this player
function removeHighlight() {
    // verify if player is highlighted
    if(document.querySelector("#playerCircle1") != null) {
        const divPlayerCircle1 = document.querySelector("#playerCircle1");
        const divPlayerCircle2 = document.querySelector("#playerCircle2");
        const divPlayerCircle3 = document.querySelector("#playerCircle3");

        divPlayerCircle1.remove();
        divPlayerCircle2.remove();
        divPlayerCircle3.remove();
    } 
    // verify if house is highlighted
    else if(document.querySelector("#houseCircle1") != null) {
        const divHouseCircle1 = document.querySelector("#houseCircle1");
        const divHouseCircle2 = document.querySelector("#houseCircle2");
        const divHouseCircle3 = document.querySelector("#houseCircle3");

        divHouseCircle1.remove();
        divHouseCircle2.remove();
        divHouseCircle3.remove();
    }
}

// adjust the winner highlight size according to desktop or mobile layout
function adjustHighlightSize(pageWidth) {
    // verify if player is highlighted
    if (document.querySelector("#playerCircle1") != null) {
        const divPlayerCircle1 = document.querySelector("#playerCircle1");
        const divPlayerCircle2 = document.querySelector("#playerCircle2");
        const divPlayerCircle3 = document.querySelector("#playerCircle3");

        // mobile layout for player highlight circles
        if (pageWidth < 1000) { // If media query matches
            divPlayerCircle1.classList = "allHighlightCircle mobileHighlightCircle1 playerMobileHighlightCircle1";
            divPlayerCircle2.classList = "allHighlightCircle mobileHighlightCircle2 playerMobileHighlightCircle2";
            divPlayerCircle3.classList = "allHighlightCircle mobileHighlightCircle3 playerMobileHighlightCircle3";
        } 
        // desktop layout for player highlight circles
        else {
            divPlayerCircle1.classList = "allHighlightCircle desktopHighlightCircle1 playerDesktopHighlightCircle1";
            divPlayerCircle2.classList = "allHighlightCircle desktopHighlightCircle2 playerDesktopHighlightCircle2";
            divPlayerCircle3.classList = "allHighlightCircle desktopHighlightCircle3 playerDesktopHighlightCircle3";
        }
    } 
    // verify if house is highlighted
    else if (document.querySelector("#houseCircle1") != null) {
        const divHouseCircle1 = document.querySelector("#houseCircle1");
        const divHouseCircle2 = document.querySelector("#houseCircle2");
        const divHouseCircle3 = document.querySelector("#houseCircle3");
        
        // mobile layout for house highlight circles
        if (pageWidth < 1000) { // If media query matches
            divHouseCircle1.classList = "allHighlightCircle mobileHighlightCircle1 houseMobileHighlightCircle1";
            divHouseCircle2.classList = "allHighlightCircle mobileHighlightCircle2 houseMobileHighlightCircle2";
            divHouseCircle3.classList = "allHighlightCircle mobileHighlightCircle3 houseMobileHighlightCircle3";
        } 
        // desktop layout for house highlight circles
        else {
            divHouseCircle1.classList = "allHighlightCircle desktopHighlightCircle1 houseDesktopHighlightCircle1";
            divHouseCircle2.classList = "allHighlightCircle desktopHighlightCircle2 houseDesktopHighlightCircle2";
            divHouseCircle3.classList = "allHighlightCircle desktopHighlightCircle3 houseDesktopHighlightCircle3";
        }
    }
}

// verify the playerPick and make the game goes to the next page, showing the image of the player pick
function gamePick(pick) {
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
function playerSelectedPick(value, step) {
    step++;
    let playerPick = gamePick(value); 
    step = verifyStep(step);
    
    return [playerPick, step];
}

// this function is responsible to deal with all the game steps after the player pick
function gameSteps(step, playerPick, housePick, score) {
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
            if((playerPick - housePick) == -1 || (playerPick - housePick) == 2) {
                result.textContent = "YOU LOSE";
                score -= 1;
                newScore = String(score);
                actualScore.textContent = newScore;
    
                highlightWinner(1, pageWidth);
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
const rulesWindow = document.querySelector("#containerRulesPopup");
const container = document.querySelector("#container");
let step = 0;
let playerPick = 0;
let housePick = 0;
let score = 0;
let pageWidth = 0;
let playerSectedPick;

housePick = housePickGenerate();

rulesButton.addEventListener("click", () => {
    openRules(rulesWindow, container);
    disableButtons(paperBtn, scissorBtn, rockBtn, rulesButton);
});
closeRulesButton.addEventListener("click", () => {
    closeRules(rulesWindow, container);
    enableButtons(paperBtn, scissorBtn, rockBtn, rulesButton);
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
    pageWidth = getWidth();
    adjustHighlightSize(pageWidth);
});

window.addEventListener("resize", () => {
    pageWidth = getWidth();
    adjustHighlightSize(pageWidth);
});