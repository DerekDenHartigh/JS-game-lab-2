"use strict";
// // Part one:
// (function () {

// function startGame(){ // The game, you just lost it.
//     let gameAnswer = prompt("*Jigsaw Voice*\nDo You Want to Play a Game?").toLowerCase();
//     if (gameAnswer==="yes"||gameAnswer==="ya"||gameAnswer==="yeah"||gameAnswer==="yeet"||gameAnswer==="yup"||gameAnswer==="uhuh"||gameAnswer==="affirmative"||gameAnswer==="fo sho"||gameAnswer==="you know it"){ // only yes is working, I'm not sure why.
//         let userName = prompt("What name shall I have them inscribe upon your epitaph?")
//         if (userName==="") {
//             while (userName===("")){
//             console.log("Answer ME! I am Grant the mighty");
//             userName = prompt("TELL ME YOUR NAME!!!"); 
//             }
//         }
//         let gameDifficulty = prompt("Select your difficulty level:\n\tEasy\n\tMedium\n\tHard\n\tImpossible").toLowerCase();
//         let userHP = 40;
//         switch(gameDifficulty){
//             case "easy": userHP = 100; break;
//             case "medium": userHP = 40; break;
//             case "hard": userHP = 20; break;
//             case "impossible": userHP = 1; break;
//             default: console.log("ERROR"); break;}
//         let grantHP = 10;
//         let userWins = 0;
//         while (userHP>0 && userWins<3){
//             userHP-=Math.floor((Math.random()*2)+1);
//             grantHP-=Math.floor((Math.random()*2)+1);
//             console.log(`Grant swings at ${userName},\n\t${userName}'s HP = ${userHP}`);
//             console.log(`${userName} swings at Grant,\n\tGrant's HP = ${grantHP}`);
//             if (grantHP<=0){
//                 console.log("I am REBORN!!!\n\t-Grant")
//                 grantHP = 10;
//                 userWins++;
//             }
//         }
//         if (userWins>=3) {console.log(`Just kidding!\n*Final Death Rattle* \n\t -Grant \n${userName} is WINNER!  Grant the Mighty is Defeat`)}
//         else {console.log(`HAHAHAHAHA you ${userName} are defeat, I am champion still!`)};
//     }
//     else {console.log("That is too bad.. I would have crushed you!")};
// }


// // function startCombat(){
// //     let userHP = 40;
// //     let grantHP = 10;
// //     let userWins = 0;
// //     while (userHP>0){
// //         userHP-=Math.floor((Math.random()*2)+1);
// //         grantHP-=Math.floor((Math.random()*2)+1);
// //         console.log(`Grant swings at ${userName},\n\t${userName}'s HP = ${userHP}`);
// //         console.log(`Grant's HP = ${grantHP}`);
// //         if (grantHP = 0){
// //             console.log("I am REBORN!!!\n\t -Grant")
// //             grantHP = 10;
// //             userWins++;
// //             return grantHP; // does this pass the value of 10 to the grantHP variable in the while loop scope?  or just end the whole function, kicking return out?  this a hoist situation?
// //         }

// //     }
// //     if (userWins>=3) {console.log(`*Final Death Rattle* \n\t -Grant \n${userName} is WINNER!  Grant the Mighty is Defeat`)} // Gramatic inspiration: https://en.wikipedia.org/wiki/Big_Rigs:_Over_the_Road_Racing
// //     else {console.log(`HAHAHAHAHA you ${userName} are defeat, I am champion still!`)}
// // }

// // function setDifficulty(){
// //     let gameDifficulty = prompt("Select your difficulty level:\n\tEasy\n\tMedium\n\tHard\n\tImpossible").toLowerCase();
// //     switch(gameDifficulty){
// //         case "easy": let userHP = 100; break;
// //         case "medium": let userHP = 40; break;
// //         case "hard": let userHP = 30; break;
// //         case "impossible": let userHP = 0; break;
// //         default: console.log("ERROR"); break;}
// //     return userHP;

// // }

// startGame()
// })();

// Notes:  Math.floor((Math.random()*2)+1) //https://www.wikihow.com/Generate-Random-Numbers-in-JavaScript, this code generates a 'random' number 1 or 2

// Part 2:

(function () {
function startGame(){ // The game, you just lost it.
    let gameAnswer = prompt("*Jigsaw Voice*\nDo You Want to Play a Game?").toLowerCase();
    if (gameAnswer==="yes"||gameAnswer==="ya"||gameAnswer==="yeah"||gameAnswer==="yeet"||gameAnswer==="yup"||gameAnswer==="uhuh"||gameAnswer==="affirmative"||gameAnswer==="fo sho"||gameAnswer==="you know it"){
        let userName = prompt("What name shall I have them inscribe upon your epitaph?")
        if (userName==="") {
            while (userName===("")){
            console.log(`\n\n\nAnswer ME! I am Grant the mighty`);
            userName = prompt("TELL ME YOUR NAME!!!"); 
            }
        }
        startCombat()
    }
    else {
        console.log("That is too bad.. I would have crushed you!")
    }; return; // return just to end program
    }   

function startCombat(){
    let grantHP = 10;
    let userWins = 0;
    let retreat = false;
    getDifficulty();
    getDamage();
    while (userHP>0 && userWins<3 && retreat===false){
        userHP-=Math.floor((Math.random()*7)); // I gave grant a battleaxe in v2.0
        grantHP-= attackObject.damage;
        console.log(`Grant swings at ${userName},\n\t${userName}'s HP = ${userHP}`);
        console.log(`${userName} ${attackObject.attack} at Grant,\n\tGrant's HP = ${grantHP}`);
        if (grantHP<=0){
            console.log("I am REBORN!!!\n\t-Grant")
            grantHP = 10;
            userWins++;
        }
        let retreatResponse = prompt("Do you wish to flee?").toLowerCase();
        if (retreatResponse==="yes"||retreatResponse==="ya"||retreatResponse==="yeah"||retreatResponse==="yeet"||retreatResponse==="yup"||retreatResponse==="uhuh"||retreatResponse==="affirmative"||retreatResponse==="fo sho"||retreatResponse==="you know it"){
            let retreat = true;
        }
    }
    if (userWins>=3) {console.log(`Just kidding!\n*Final Death Rattle* \n\t -Grant \n${userName} is WINNER!  Grant the Mighty is Defeat`)}
    else {console.log(`HAHAHAHAHA you ${userName} are defeat, I am champion still!`)};
}

function getDamage(){
    let userDamage;
    let attackType;
    let userWeapon = prompt("Select your weapon:\n\t-Fists\n\t-Sword\n\t-Glock\n\t-BFG").toLowerCase();
    switch(userWeapon){
        case "fists": userDamage = Math.floor((Math.random()*3)); attackType = "punches"; break; // I wanted to include 0 in this version
        case "sword": userDamage = Math.floor((Math.random()*5)); attackType = "slashes"; break; // to account for misses
        case "glock": userDamage = Math.floor((Math.random()*10)); attackType = "fires"; break; // crits would be a nice touch, but...
        case "bfg": userDamage = Math.floor((Math.random()*100)); attackType = "kerpows"; break; // I'm just going to get this working first.
        default: console.log("ERROR"); break;}
    let attackObject = {
        weapon: userWeapon,
        damage: userDamage,
        attack: attackType
    }
    return attackObject;  // wanted different actions of the user, can't return 2 variables that I know of, but I can return an object or array
}

function getDifficulty(){
 let gameDifficulty = prompt("Select your difficulty level:\n\tEasy\n\tMedium\n\tHard\n\tImpossible").toLowerCase();
    let userHP = 40;
    switch(gameDifficulty){
        case "easy": userHP = 100; return userHP;
        case "medium": userHP = 40; return userHP;
        case "hard": userHP = 20; return userHP;
        case "impossible": userHP = 1; return userHP;
        default: console.log("ERROR"); return;
    }
}
startGame()
})();