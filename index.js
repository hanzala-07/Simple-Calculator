#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter FirstNumber", type: "number", name: "FirstNumber" },
    { message: "Enter SecondNumber", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "Operator",
        choices: ["ADD", "SUBTRACT", "MULTIPLY", "DIVIDE"],
    },
]);
if (answer.Operator === "ADD") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.Operator === "SUBTRACT") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.Operator === "MULTIPLY") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.Operator === "DIVIDE") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("Select the correct Operator");
}
