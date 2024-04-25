#! /usr/bin/env node
import inquirer from "inquirer"
let myBalance = 50000;
let myPin = 6969;
console.log("Welcome to Wajahat - ATM Machine");

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "Enter your pin code: ",
    type: "number",
  },
]);

if (pinAnswer.pin === myPin) {
   {
  console.log("Correct pin code");
  console.log("Your Current Balance is ${myBalance}");
}

let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: "Please Select Option",
    type: "list",
    choices: ["Withdraw", "Check Balance", "Fast Cash"],
  },
]);
if (operationAns.operation === "Withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "How much do you want to Withdraw??",
      type: "number",
    },
  ]);
  if (amountAns.amount <= myBalance) {
    myBalance -= amountAns.amount;
    console.log(`Your Remaining Balance is: ${myBalance}`);
  } else {
    console.log("Insufficient Balance!");
  }
} else if (operationAns.operation === "Check Balance") {
  console.log(`Your Balance is:  ${myBalance}`);
} else if (operationAns.operation === "Fast Cash") {
  let fastCashAns = await inquirer.prompt([
    {
      name: "fastCash",
      message: "How much Amount You Want to Fast Cash: ",
      type: "list",
      choices: [1000, 2000, 5000, 10000],
    },
  ]);
  myBalance -= fastCashAns.fastCash;
  console.log(`Your Remaining amount is:  ${myBalance}`)
} 
} 
else {
  console.log("Incorrect pin number");
}