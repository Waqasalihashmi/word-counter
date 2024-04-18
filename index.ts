#!/usr/bin/env node
// This line is called shebang, it tells the os to run file with the Node.js
//import the 'inquirer' module, which is a command line interface for Node.js
import inquirer from "inquirer"

// Declare a constant 'answers' and assign it to the result of inquirer.prompt function

const answers :{
    Sentences: string
} =await inquirer.prompt([
    {
        name: "Sentences",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
])

const words = answers.Sentences.trim().split(" ")


//print the array of words to the console
console.log(words)

// Print the word count of the sentence to the consloe
console.log(`Your sentence word count is ${words.length}`);