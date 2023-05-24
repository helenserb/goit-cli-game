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
const isValid = (val) => {
    if (!Number.isNaN(val) && val > 0 && val <= 10) return true;

    if(Number.isNaN(val)) console.log('Please enter a number!'.yellow)
    if (val < 1 || val > 10) console.log('Number should be between 1 and 10'.yellow);
    return false;
}
const game = () => {
    rl.question('Please enter any whole number between 1 and 10:\n', (val) => {
        const number = +val;
        counter++;

        if (!isValid(number)) return game();


        if (number !== mind) {
            console.log('Oh no! Try again'.red);
            return game();
        }

        console.log(`Congratulations! You guessed in ${counter} steps!`.green);
        rl.close();
    })
}

game();