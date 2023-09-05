document.addEventListener("DOMContentLoaded", function() {


const startButton = document.getElementById("start");
const timerElement = document.getElementById("timer");
const choicesContainer = document.getElementById("choices");
const questionWords = document.getElementById("question-words");
const quizEnd = document.getElementById("quiz-end");
const finalScore = document.getElementById("score-final");
const nameEl = document.getElementById("name");
const submitButton = document.getElementById("submit-score");
const highScores = document.getElementById("high-scores");
const viewScoreList = document.getElementById("view-high-scores");
const goBackButton = document.getElementById("go-back");
const clearScoresButton = document.getElementById("clear-scores");

//When the start button is clicked, the timer starts and the user is presented with a question.
let currentQuestionIndex = 0;
let timeLeft = 0;

const questions = [
    {
    question: "Question 1: What is the capital of Alabama?",
    choices: ["Montgomery", "Huntsville", "Auburn", "Birmingham"],
    Answer: "Montgomery"
    },
    {
    question: "Question 2: What city's name is The Magic City?",
    choices: ["Montgomery", "Huntsville", "Auburn", "Birmingham"],
    Answer: "Montgomery"
    },
    {
    question: "Question 3: What city is the RedStone Arsenal located?",
    choices: ["Montgomery", "Huntsville", "Auburn", "Birmingham"],
    Answer: "Montgomery"
    },
    {
    question: "Question 4: What city is the University of Alabama located?",
    choices: ["Tuscaloosa", "Mobile", "Auburn", "Birmingham"],
    Answer: "Tuscaloosa"
    },
    {
    question: "Question 5: What city is did Mardi Gras originate?",
    choices: ["Tuscaloosa", "Mobile", "Auburn", "Birmingham"],
    Answer: "Mobile"
    }
  ];


function startQuiz() { 
    startButton.addEventListener("click", function() {
      startButton.parentNode.classList.add("hide");
      timeLeft = 60;
      displayQuestion();
      startTimer();
    });
    
}

function displayQuestion() {
 if (currentQuestionIndex < questions.length) {
  const currentQuestion = questions[currentQuestionIndex];
  questionWords.textContext = currentQuestion.question;
  choicesContainer.innerHTML = "";

  currentQuestion.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("button");
    choiceButton.textContent = choice;
    choiceButton.addEventListener("click", function() {
      checkAnswer(index);
      });
      choicesContainer.appendChild(choiceButton);
    });
  } else {
    endQuiz();
  }

}
//If time runs out before all questions are answered, the game is over.
function startTimer() {
  const timer = setInterval(function() {
    if (timeLeft > 0) {
      timerElement.textContent = timeLeft;
      timeLeft--;
    } else {
      clearInterval(timerInterval);
      endQuiz();

    }
    
  }, timeout, 1000);

} 

function checkAnswer(choiceIndex) {
  const question = questions[currentQuestionIndex];
  if (choiceIndex === question.answer) {
    alert("Correct!");
  } else {
    timeLeft -= 10; //Deduct 10 seconds for wrong answer
    alert("Wrong!");
  }
  currentQuestionIndex++;
  displayQuestion();
}

function endQuiz() {
  questionWords.textContent = "Game Over!";
  choicesElement.innerHTML = "";
  quizEnd.classList.remove("hide");
  finalScore.textContent = timeLeft;
}
//Initialize the quiz
startQuiz();


//When the game is over, the user can save their initials and score to a highscores view using local storage.
function saveHighscore() {
  const initials = nameEl.value.trim();
  if (initials !== "") {
    const highscores =
      JSON.parse(window.localStorage.getItem("highscores")) || [];
    const newScore = {
      score: time,
      name: nameEl.value.trim()
    };
    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));
    window.location.href = "highscores.html";
  }
}

//Save highscore and name to local storage
function checkForEnter(event) {
  if (event.key === "Enter") {
    saveHighscore();
   }
  }

});

