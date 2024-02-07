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


const questionEl = document.getElementById("question");
const optionsElc = document.getElementById("options");
const startBtn = document.getElementById("start-btn");
const gameOverel = document.getElementById("game-over");
const finalScoreEl = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitScoreBtn = document.getElementById("submit-score");

function startQuiz() {
startTimer();
showNextQuestion();
}

function startTimer() {
let timeRemaining = timeLimitInSeconds;
timer = setInterval(() => {
timeRemaining--;
if (timeRemaining <= 0) {
gameOver();
  }
}, 1000);
}

function showNextQuestion(){
const question = questions[currentQuestionIndex];

questionsEl.textContext = question.question;
optionsEl.innerHTML = "";
questions.options.forEach(option => {
   const btn = document.createElement("button");
btn.textContent = option;
btn.addEventListener("click", () => checkAnswer(option));
optionsEl.appendChild(btn);
});

}
function checkAnswer(option){
const question = questions[currentQuestionIndex];
if (option === question.answer) {
score++;
} else {
    //subtract time if answer is incorrect
    //adjust time subtraction logic as needed
}
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
showNextQuestion();
}else {
    gameOver();

}
}

function gameOver() {
clearInterval(timer);
gameOverEl.style.display = "block";
finalScoreEl.textContent = score;
}

startBtn.addEventListener("click", startQuiz);
submitScoreBtn.addEventListener("click", () => {
const initials = initialsInput.value.trim();
//Save initials and score



});







