// Player 1
// Generate random numbers
let randomNumber1 = Math.ceil(Math.random() * 6)
// console.log(randomNumber1);

// 2 Random dice from dice1 - dice6
let randomDiceImage = 'dice' + randomNumber1 + '.png';

// 3 Link images
let randomImageSource = 'images/' + randomDiceImage;

// 4 Query DOM
let image1 = document.querySelector('#one');
image1.setAttribute('src', randomImageSource);

// Player 2
// Generate random numbers
let randomNumber2 = Math.ceil(Math.random() * 6)
// console.log(randomNumber1);

// 2 Random dice from dice1 - dice6
let randomDiceImage2 = 'dice' + randomNumber2 + '.png';

// 3 Link images
let randomImagesSource = 'images/' + randomDiceImage2;

// 4 Query DOM
let image2 = document.querySelector('#two');
image2.setAttribute('src', randomImagesSource);

// Getting the winner
if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').innerHTML = 'Player 1 wins !!!'
} else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'Player 2 wins !!!'
} else {
    document.querySelector('h1').innerHTML = 'Draw'
}

