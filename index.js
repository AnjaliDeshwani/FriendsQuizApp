var readlineSync = require('readline-sync');
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

var userName = readlineSync.question(chalk.blueBright("Hey!! May I know your name? "))
console.log(chalk.white.bold.bgBlue("Welcome " + userName + " on Friends Quiz !!"))

var questions = [{
        question: "What did Ross name his pet monkey?",
        options: ['Marcella', 'Marciel', 'Marcel', 'Macarena'],
        ans: 'Marcel'
    },
    {
        question: "How many times has Ross Geller been married and divorced?",
        options: ['Married thrice, two divorces, one annulment',
            'Married and divorced thrice',
            'Married thrice, two divorces and a separation'
        ],
        ans: 'Married and divorced thrice'
    },

    {
        question: "What kind of pets did Joey and Chandler have?",
        options: ['Chick and duck',
            'Alligator and dove',
            'Monkey and parrot',
            'Frog and turtle'
        ],
        ans: 'Chick and duck'
    },

    {
        question: "What was the name of Chandler's psycho roommate",
        options: ['Phil',
            'Mario',
            'Lance',
            'Eddie'
        ],
        ans: 'Eddie'
    },

    {
        question: "What kind of animal does Phoebe believe her mother's spirit returns as?",
        options: ['Cat',
            'Duck',
            'Monkey',
            'Dog'
        ],
        ans: 'Cat'
    }

]


if (readlineSync.keyInYN("Are you ready for the quiz? ")) {
    console.log(chalk.green.italic("Let's begin then....\n"))

    for (var i = 0; i < questions.length; i++) {
        currentQuestion = questions[i];
        play(currentQuestion.question, currentQuestion.options, currentQuestion.ans)
    }

    function play(question, options, ans) {
        console.log(chalk.bgMagenta(question))
        index = readlineSync.keyInSelect(options, "Kindly select the correct answer", { cancel: "None of the above" })
        if (options[index] == ans) {
            score += 1;
            console.log(chalk.yellow("Your answer is correct!!"))
        } else {
            console.log(chalk.green("Your answer is incorrect!!"))
        }

        console.log("Your current score is " + score);
        console.log(chalk.magenta.bold("-----------------------------------------------------"))

    }

    // console.log(chalk.bgYellow("YAY! Your total Score is "+ score))

    // console.log(chalk.green.italic("Highest score is " +highScores.score ))

    // if(score>=highScores[0].score){
    //   console.log(chalk.bgWhite.red("Congratulations!! You scored the highest. Please Send the screenshot to update your name and highscore."))
    // }

    console.log(chalk.bgYellow("Your total score is " + score))


    console.log(chalk.magenta("------------"))
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


} else {
    console.log(chalk.magenta.bold.bgYellow("You've pressed No. Hope you will play it next time ."))
}