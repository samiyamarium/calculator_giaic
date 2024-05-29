#! /usr/bin/env node
var inquirer = require('inquirer');
var chalk = require('chalk');
var q = inquirer.prompt([{
        name: 'num1',
        type: 'number',
        message: 'Enter first number',
    },
    { name: 'num2',
        type: 'number',
        message: 'Enter second number'
    },
    {
        name: 'calculate',
        type: 'checkbox',
        message: 'Select operation to perform',
        choices: ['Add', 'Subtract', 'Multiply', 'Divide']
    }])
    .then(function (answer) {
    if (answer.calculate == 'Add') {
        console.log(chalk.green('Performed Addition: Answer=', answer.num1 + answer.num2));
    }
    if (answer.calculate == 'Subtract') {
        console.log(chalk.yellow('Performed Subtraction: Answer=', answer.num1 - answer.num2));
    }
    if (answer.calculate == 'Multiply') {
        console.log(chalk.red('Performed Multiplication: Answer=', answer.num1 * answer.num2));
    }
    if (answer.calculate == 'Divide') {
        console.log(chalk.magenta('Perform Division: Answer=', answer.num1 / answer.num2));
    }
});
