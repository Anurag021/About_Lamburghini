var readlinesync = require("readline-sync");
var name = readlinesync.question('May i know your name: ')
console.log("Hi "+name+" Welcome To quiz on Lambourghini")

//Array of Questions and answers
var questions = [{question:"Which group owns Lambourghini Cars ?",
answer:"Volkswagen Group"},
{question:"What is theHorsepower of lambourghini Aventadoor is ?",
answer:"500"},
{question:"Engine type of lambourghini Gallado ?",
answer:"V10"}]
var score = 0

//loop
for (var i = 0; i<questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
}

function play(question, answer){
  var userAnswer = readlinesync.question(question)
  if (userAnswer === answer ){
    console.log("you are right")
    score ++
  }

}
console.log("your score is :"+ score)