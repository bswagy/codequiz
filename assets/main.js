console.log("hello");
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Leveler",
    ],
    answer: "Hyper Text Markup language",
  },

  {
    question: "What is the purpose of the HTML '<div>' element?",
    options: [
      "Define a division or a section in a HTML document",
      "Display an inline block of content",
      "Create a hyperlink to another webpage",
      "Represent an ordered list of items",
    ],
    answer: "Define a division or a section in a HTML document",
  },
  {
    question: "Which tag is used to define an unordered list in HTML?",
    options: [
      "<ol>",
      "<li>",
      "<ul>",
      "<dl>",
    ],
    answer: "<ul>",
  },
  {
    question: "What does the HTML attribute 'href' specify?",
    options: [
      "The color of a text",
      "The location of the linked document",
      "The height of the image",
      "The alignment of an element",
    ],
    answer: "The location of the linked document",
  },

  // Add more questions here
];

let currentQuestionIndex = 0;
let timer;
let score = 0;
let timeLimitInSeconds = 60; // change as needed
let highScore = { initials:"", score: 0};


const questionTitle = document.getElementById("question-title");
const startBtn = document.getElementById("start-btn");
const gameOverel = document.getElementById("game-over");
const finalScoreEl = document.getElementById("final-score");
const initialsInput = document.getElementById("initials");
const submitScoreBtn = document.getElementById("submit-score");
const quizContainer = document.getElementById("quiz-container");
const option1 = document.getElementById("option-1");
const option2 = document.getElementById("option-2");
const option3 = document.getElementById("option-3");
const option4 = document.getElementById("option-4");
const timerEl = document.getElementById("timer");
const highScoreModal = document.getElementById("high-score-modal");
const viewHighScoreBtn =  document.getElementById("view-high-score");
const closeHighScoreBtn = document.getElementById("high-score-modal").querySelector(".close");

function startQuiz() {
  quizContainer.style.display = "block";
  startTimer();
  showNextQuestion();
  startBtn.style.display = "none";
}

function startTimer() {
 timer = setInterval(() => {
     timeLimitInSeconds--;
     if (timeLimitInSeconds <= 0) {
clearInterval(timer);
timeLimitInSeconds = 0;
gameOver();
     }


     
     timerEl.textContent = Math.max(0,timeLimitInSeconds);
    
  }, 1000);
}

function showNextQuestion() {
  const quest = questions[currentQuestionIndex];
  questionTitle.textContent = quest.question;
  option1.textContent = quest.options[0];
  option2.textContent = quest.options[1];
  option3.textContent = quest.options[2];
  option4.textContent = quest.options[3];
}
function checkAnswer(event) {
  const  userAnswer = event.target.textContent
  if (userAnswer == questions[currentQuestionIndex].answer) {
    score++;
  } else {
    timeLimitInSeconds -=5
    //subtract time if answer is incorrect
    //adjust time subtraction logic as needed
  }
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showNextQuestion();
  } else {
    gameOver();
  }
}

function gameOver() {
  gameOverel.style.display = "block";
  finalScoreEl.textContent = score;  

  if (score > highScore.score) {
    
    highScore.initials = initialsInput.value.trim();
    highScore.score = score;
    const highScoreDisplay=`${highScore.initials}:  ${highScore.score}`;
    document.getElementById("high-score").textContent= highScoreDisplay;
  }
  submitScoreBtn.addEventListener("click", saveScore);
}

let highScores = []

function saveScore() {
 const initials = initialsInput.value.trim();
//save initials and score
const scoreItem = document.createElement("li");
scoreItem.textContent = `${initials}: ${score}`;
document.getElementById("score-list").appendChild(scoreItem);
console.log("Initials:", initials);
console.log("Score:", score);
console.log("High Score:", highScore);

//push the initials and score to the highScores array
highScores.push({ initials: initials, score: score});

//update highscore display
updateHighScoreDisplay();

}
function updateHighScoreDisplay() {
// clear existing high score display
const highScoreList = document.getElementById("high-score");
highScoreList.innerHTML ="";

//Create list item for each high score entry
highScores.forEach(entry => {
const scoreItem = document.createElement("li");
scoreItem.textContent = `${entry.initials}: ${entry.score}`;
highScoreList.appendChild(scoreItem);


});


}

// update high score display on page load
updateHighScoreDisplay();


viewHighScoreBtn.onclick = function() {
  const highScoreDisplay = `${initialsInput.value}: ${score}`;
document.getElementById("high-score").textContent = highScoreDisplay;
highScoreModal.style.display = "block";

}

closeHighScoreBtn.onclick = function() {
  highScoreModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == highScoreModal) {
    highScoreModal.style.display = "none";
  }
}
//submitScoreBtn.addEventListener("click", () => {
//Save initials and score
//});

startBtn.addEventListener("click", startQuiz);
option1.addEventListener("click", checkAnswer)
option2.addEventListener("click", checkAnswer)
option3.addEventListener("click", checkAnswer)
option4.addEventListener("click", checkAnswer)