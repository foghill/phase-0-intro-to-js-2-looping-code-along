/*for ( let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old, Happy Birthday to me!`);
}
*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);
*/


function writeCards(cards) {
    for (let i = 0; i < cards.length; i++){
        console.log(`Happy Birthday ${cards[i]}`);
    }
    return cards;
}

writeCards(["Charlie","Samip","Ali"]);

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     let i = 0;
//     while (i < gifts.length) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         i++;
//     }
//     return gifts;
// }

// wrapGifts(gifts);

// function plantGarden() {
//     let keepWorking = true;
//     while (keepWorking) {
//         chooseSeedLocation();
//         plantSeed();
//         waterSeed();
//         keepWorking = checkForMoreSeeds();
//     }
// }

// let countup = 0;
// while (countup<10) {
//     console.log(countup++);
// }

// for (let countup = 0; countup < 10; countup++) {
//     console.log(countup);
// }


function countDown(init = 10) {
    while (init >=0) {
        console.log(init--);
    }
} 

countDown(10)