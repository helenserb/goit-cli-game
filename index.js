const readline = require('readline');
const fs = require('fs/promises');
const { program } = require('commander');
const { read } = require('fs');
require('colors');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', (txt) =>{
console.log(`You have entered ${txt}!`)
})