var readlineSync = require("readline-sync")
chalk = require('chalk');
var score = 0;

var highScores = [{
        name: "Aastha",
        score: 5
    },

    {
        name: "Anu",
        score: 4
    }
]

var userName = readlineSync.question(chalk.cyan("Heyaa!! May I know your Name? "))
console.log(chalk.magentaBright("Welcome " + userName + "!! Lets play **Do You Know Anjali** "))
console.log("")

function checkAnswer(question, answer) {
    var userAnswer = readlineSync.question(question)
    if (userAnswer.toLowerCase() === answer.toLowerCase()) {
        console.log(chalk.cyan("Your answer is correct"))
        score = score + 1;
    } else {
        console.log(chalk.cyan("Your answer is incorrect"))
    }
    console.log(chalk.magentaBright("Your current score is " + score))
    console.log(chalk.yellow("---------------------"))
}

// questionOne="Where do I work? "
// answerOne="Accenture"

// checkAnswer(questionOne,answerOne)
// console.log("Your score is: "+ score)

var questions = [{
        question: "Where do I live? ",
        answer: "Ghaziabad"
    },
    {
        question: "What do I like the most? ",
        answer: "Reading"
    },
    {
        question: "What's my favourite movie?",
        answer: "Intern"
    },
    {
        question: "What's my favourite book?",
        answer: "Alchemist"
    },
    {
        question: "Do I like to party? (Y/N)",
        answer: "N"
    }
];

for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i]
    checkAnswer(currentQuestion.question, currentQuestion.answer)

}

console.log("Your total score is " + score)


console.log(chalk.yellow("---------------------"))
if (score >= highScores[0].score) {
    console.log(chalk.bgMagenta("***Congratulations!!You scored the highest***"))
} else {
    console.log(chalk.bgCyan("Oooopsss!! You didn't score the highest!!"))
}

console.log(chalk.yellow("---------------------"))
console.log("Check out the below high scorers :- ")

for (var i = 0; i < highScores.length; i++) {
    console.log("Name : " + chalk.redBright(highScores[i].name))
    console.log("Score : " + chalk.redBright(highScores[i].score))
    console.log(chalk.yellow("----------"))
}

console.log(chalk.red.bold.underline("If you scored the highest or second highest, please send the screeshot to get it updated. :) "))