const jokes = require('give-me-a-joke');//패키지명 입력
const colors = require('colors');
// console.dir(jokes)
const cowsay = require('cowsay');

// To get a random dad joke
jokes.getRandomDadJoke(function (joke) {
    console.log(joke.rainbow);
});


