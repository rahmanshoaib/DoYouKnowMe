let readlineSync = require('readline-sync');

const chalk = require('chalk');

let userName = readlineSync.question("Enter your name: ");

let score = 0;

let questions = [
  {
    question: "What's my native? ",
    answer: "Vellore"
  },
  {
    question: "What's my favorite sports? ",
    answer: "Football"
  },
  {
    question: "What's my lastname? ",
    answer: "Rahman"
  }
];

console.log(chalk.blue("Welcome " + userName + " to play DO YOU KNOW ME!"));

function play(question, answer) {

  let userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Correct!"));
    score = score + 1;
  }
  else
    console.log(chalk.red("Wrong!"));
}

for (let i = 0; i < questions.length; i++) {

  let currentQuestion = questions[i];

  play(currentQuestion.question, currentQuestion.answer);

  console.log(chalk.yellow("Your Score: " + score));
}