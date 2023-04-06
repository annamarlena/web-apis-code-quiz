// Set the global variables
var timer = document.querySelector(".time"); // h1 tag
var secondsLeft = 15;
var score = secondsLeft;
var startBtn = document.querySelector("#start-button");
var questionScrn = document.querySelector("#question-screen");
var welcomeScrn = document.querySelector("#welcome-screen");
var gameoverScrn = document.querySelector("#gameover-screen");
var nextBtn = document.querySelector("#next-button");
var questionTag = document.querySelector("#question");
var answersTag = document.querySelector("#answers");
var playing = true;
var currQuestionIdx = 0;

// array of question objects
var questions = [
  {
    question: "Which of the following is not a semantic HTML tag:",
    answers: ['nav', 'footer', 'div', 'main'],
    correct: 'div'
  },
  {
    question: "When styling with flexbox, most of the flexbox properties get placed in the:",
    answers: ['header', 'footer', 'body', 'parent'],
    correct: 'parent'
  },
  {
    question: "What is the DOM?",
    answers: ['digital office media', 'document object model', 'digital object modification', "your buddy Dominic's nickname"],
    correct: 'document object model'
  },
  {
    question: "Which of the following is not a primitive date type in JavaScript:",
    answers: ['object', 'boolean', 'string', 'number'],
    correct: 'object'
  },
  {
    question: "When styling with flexbox, most of the flexbox properties get placed in the:",
    answers: ['header', 'footer', 'body', 'parent'],
    correct: 'parent'
  },
  {
    question: "Gary's tips for success include all of these except:",
    answers: ['keep everything lowercase', 'use your tutor', 'stay on camera', 'send Gary peanut butter'],
    correct: 'send Gary peanut butter'
  },
]

// Create a timer function
function setTime() {
  var timerInterval = setInterval(function() {
    if (secondsLeft !== 0 && playing === true) {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds left";
    } else {
      clearInterval(timerInterval)
      playing = false;
      gameOver()
    }
  }, 1000);
}

// Create a function that runs when a user clicks the start button
function startQuiz() {
  // Hide the welcome screen and show the first question
  setTime()
  questionScrn.classList.remove("hide");
  welcomeScrn.classList.add("hide");
  displayNextQuestion()
}

function displayNextQuestion() {
  var currQuestionObj = questions[currQuestionIdx];
  var questionToDisplay = currQuestionObj.question;
  var answers = currQuestionObj.answers;
  answersTag.innerHTML = "";
  questionTag.textContent = questionToDisplay;

  for(var i = 0; i<answers.length; i++ ){
    var currAnswer = answers[i];
    var liTag = document.createElement("li");
    liTag.textContent = currAnswer;

    if( currAnswer === currQuestionObj.correct ){
      liTag.setAttribute("data-correct", "yes");
    } else {
      liTag.setAttribute("data-correct", "no");
    }
    answersTag.appendChild(liTag);
  }
  // for the length of the answers array in the current question,
    // create a button element for each answer and append to the ul
    // text content is the answer

  // event listener on ul for button clicks
  // call check answer with the selected answer as the argument
}



function gameOver() {
  questionScrn.classList.add("hide");
  gameoverScrn.classList.remove("hide");
  document.getElementById("final-score").textContent = "Final Score: " + secondsLeft;
}

// Listen for click inside the answer ul tag
answersTag.addEventListener("click", function(event){
  console.log("click");
  if( event.target.matches("li") ){
    if( event.target.getAttribute("data-correct") === "yes" ){
      console.log("correct!")
    } else {
      // subtract some time
      secondsLeft--
      timer.textContent = secondsLeft + " seconds left";
      console.log("WRONG!")
    }
    currQuestionIdx++;
    if( currQuestionIdx < questions.length ) {
      displayNextQuestion();
    } else {
      playing = false;
      gameOver()
    }
  }
})

// Listen for button clicks
startBtn.addEventListener("click", startQuiz)
