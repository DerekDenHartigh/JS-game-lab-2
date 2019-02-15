"use strict";

function startGame(){ // The game, you just lost it.
    let gameAnswer = prompt("*Jigsaw Voice*\nDo You Want to Play a Game?").toLowerCase();
    if (gameAnswer==="yes"||gameAnswer==="ya"||gameAnswer==="yeah"||gameAnswer==="yeet"||gameAnswer==="yup"||gameAnswer==="uhuh"||gameAnswer==="affirmative"||gameAnswer==="fo sho"||gameAnswer==="you know it"){ // only yes is working, I'm not sure why.
        let userName = prompt("What name shall I have them inscribe upon your epitaph?")
        if (userName==="") {
            let userName2="";
            while (userName2===("")){
            console.log("Answer ME! I am Grant the mighty");
            userName2 = prompt("TELL ME YOUR NAME!!!"); 
            // combat code dupe here, will need to change userName's to userName2's
            }
        }
        // startCombat(); just plugging the function in until i learn hoisting and such
        // let userHP = 40; want to get userHP from 
        let gameDifficulty = prompt("Select your difficulty level:\n\tEasy\n\tMedium\n\tHard\n\tImpossible").toLowerCase();
        switch(gameDifficulty){
            case "easy": let userHP = 100; break;
            case "medium": let userHP = 40; break;
            case "hard": let userHP = 20; break;
            case "impossible": let userHP = 0; break;
            default: console.log("ERROR"); break;} // so this should define User's HP? but its local to the switch... how to get userHP out
        let grantHP = 10;
        let userWins = 0;
        let grantDefeats = 0;  // Fear Grant the undefeated
        while (userHP>0 && grantDefeats<3){
            userHP-=Math.floor((Math.random()*2)+1);
            grantHP-=Math.floor((Math.random()*2)+1);
            console.log(`Grant swings at ${userName},\n\t${userName}'s HP = ${userHP}`);
            console.log(`${userName} swings at Grant,\n\tGrant's HP = ${grantHP}`);
            if (grantHP<=0){
                console.log("I am REBORN!!!\n\t -Grant")
                grantHP = 10; // will this reset grantHP?
                userWins++;
                grantDefeats++;
            }
    
        }
        if (userWins>=3) {console.log(`Just kidding!\n*Final Death Rattle* \n\t -Grant \n${userName} is WINNER!  Grant the Mighty is Defeat`)}
        else {console.log(`HAHAHAHAHA you ${userName} are defeat, I am champion still!`)};
    }
    else {console.log("That is too bad.. I would have crushed you!")};
}


function startCombat(){
    let userHP = 40;
    let grantHP = 10;
    let userWins = 0;
    while (userHP>0){
        userHP-=Math.floor((Math.random()*2)+1);
        grantHP-=Math.floor((Math.random()*2)+1);
        console.log(`Grant swings at ${userName},\n\t${userName}'s HP = ${userHP}`);
        console.log(`Grant's HP = ${grantHP}`);
        if (grantHP = 0){
            console.log("I am REBORN!!!\n\t -Grant")
            grantHP = 10;
            userWins++;
            return grantHP; // does this pass the value of 10 to the grantHP variable in the while loop scope?  or just end the whole function, kicking return out?  this a hoist situation?
        }

    }
    if (userWins>=3) {console.log(`*Final Death Rattle* \n\t -Grant \n${userName} is WINNER!  Grant the Mighty is Defeat`)}
    else {console.log(`HAHAHAHAHA you ${userName} are defeat, I am champion still!`)}
}

function setDifficulty(){
    let gameDifficulty = prompt("Select your difficulty level:\n\tEasy\n\tMedium\n\tHard\n\tImpossible").toLowerCase();
    switch(gameDifficulty){
        case "easy": let userHP = 100; break;
        case "medium": let userHP = 40; break;
        case "hard": let userHP = 30; break;
        case "impossible": let userHP = 0; break;
        default: console.log("ERROR"); break;}
    return userHP;

}

startGame()


// Notes:  Math.floor((Math.random()*2)+1) //https://www.wikihow.com/Generate-Random-Numbers-in-JavaScript, this code generates a 'random' number 1 or 2
// need to make a new variable for this conditional dupe the code for the game, wasnt working bc I had a let before it, redefining the variable, not letting you out of loop.