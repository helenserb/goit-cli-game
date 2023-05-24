const readline = require('readline');
const fs = require('fs/promises');
const { program } = require('commander');
const { read } = require('fs');
const { connected } = require('process');
require('colors');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

program.option('-f --file [type]', 'file for saving game results', 'game_results.txt');
program.parse(process.argv);

let counter = 0;
const mind = Math.ceil(Math.random() * 10);
// const logFile = program.opts().file;

const game = () => {
    rl.question('Please enter whole number between 1 and 10:\n', (val) => {
        const number = +val;
        counter++;

        if (number !== mind) {
            console.log('Oh no! Try again'.red);
            return game();
        }

        console.log(`Congratulations! You guessed in ${counter} steps!`.green);
        rl.close();
    })
}

game();