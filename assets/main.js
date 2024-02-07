const questions = [
{
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language","Hyperlinks and Text Markup Language","Home Tool Markup Language","Hyperlinks and Text Markup Leveler"],
    answer: "Hyper Text Markup language"
},
// Add more questions here
];

let currentQuestionIndex = 0;
let timer;
let score = 0;
const timeLimitInSeconds = 60; // change as needed


const questionEl = document.getElementbyId("question");
const optionsElc = document.getElementbyId("options");
const startBtn = document.getElementbyId("start-btn");
const gameOverel = document.getElementbyId("game-over");
const finalScoreEl = document.getElementbyId("final-score");
const initialsInput = document.getElementbyId("initials");
const submitScoreBtn = document.getElementbyId("submit-score");

function startQuiz() {
startTimer();
showNextQuestion();
}

function startTimer() {
let timeRemaining = timeLimitInSeconds;
timer = setInterval(() => {
timeRemaining--;
if (timeRemaining <= 0) {
gameOverel();
}
}, 1000);
}


