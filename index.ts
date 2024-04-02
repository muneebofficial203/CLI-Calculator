#! /usr/bin/env node 
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter Your First Number: "
    },
    {
        type: "number",
        name: "num2",
        message: "Enter Your Second Number: "
    },
    {
         type: "list",
         name: "operator",
         message : 'Select the operator you want to perform: ',
         choices: [ "Add" , "Subtract", "Multiply" , "Division"]
    },
]);

let result: number;

switch(answer.operator){
    case  'Add':
    result = answer.num1 + answer.num2;
    console.log("The Answer For addition is =" + result);
    break;

    case  'Subtract':
    result = answer.num1 - answer.num2;
    console.log("The Answer For Subtract is =" + result);
    break;

    case  'Multiply':
    result = answer.num1 * answer.num2;
    console.log("The Answer For Multiply is =" + result);
    break;

    case 'Division':
    result = answer.num1 / answer.num2;
    console.log("The Answer For Division is =" + result);
    break;
}