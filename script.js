// Gary's Tips:
// Need global variables
// Need functions
// Need a way to cycle through all the answers and store them
// Start off by making 2 generic questions and run tests till working right
// Test in short, controlled areas, can always make everything bigger later on
// Don't make timer really long
// Test functions in isolation: write the function, call the function to test it
// Preferable not to have an event listener for each of the buttons
  // Have a global event listener for any click on the page

// Set the global variables
var timer = document.querySelector(".time"); // h1 tag
var secondsLeft = 5;
var score = 0;
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
    question: "Who is the best TA",
    answers: ['Katy', "Joe"],
    correct: 'Katy'
  },
  {
    question: "Who is the best dog",
    answers: ['Dizzy', "Buddy"],
    correct: 'Dizzy'
  },
  {
    question: "Who is the best instructor",
    answers: ['Gary', "Joe", 'Not Gary', "Monkey"],
    correct: 'Monkey'
  }
]

// Create a timer function
function setTime() {
  var timerInterval = setInterval(function() {
    if (secondsLeft !== 0 && playing === true) {
      secondsLeft--;
      timer.textContent = secondsLeft + " seconds left";
    } else {
      clearInterval(timerInterval)
      gameOver()
    }
  }, 1000);
}

// Create a function that runs when a user clicks the start button
function startQuiz() {
  // Hide the welcome screen and show the first question
  questionScrn.classList.remove("hide");
  welcomeScrn.classList.add("hide");
  setTime()
  displayNextQuestion()
}

/*
{
    question: "Who is the best TA",
    answers: ['Katy', "Joe"],
    correct: 'Katy'
  },
*/

function displayNextQuestion() {
  var currQuestionObj = questions[currQuestionIdx];
  var questionToDisplay = currQuestionObj.question;
  var answers = currQuestionObj.answers;

  questionTag.textContent = questionToDisplay;

  for(var i = 0; i<answers.length; i++ ){
    var currAnswer = answers[i];
    var liTag = document.createElement("li");
    liTag.textContent = currAnswer;

    if( currAnswer === currQuestionObj.correct ){
      liTag.setAttribute("data-correct", "yes");
    }

    answersTag.appendChild(liTag);
  }



  // grab current question from questions array based on current index
  // set the text content of the question title element to be the current question 
  // for the length of the answers array in the current question,
    // create a button element for each answer and append to the ul
    // text content is the answer

  // event listener on ul for button clicks
  // call check answer with the selected answer as the argument
}

// Create a function that runs when a user clicks the next button
function nextScreen() {
  // Hide the current question and go to the next screen
  
}


function gameOver() {
  questionScrn.classList.add("hide");
  gameoverScrn.classList.remove("hide");
}


// When an answer is clicked
  // Determine if it's right or wrong
// function checkAnswer(selected) 
    // if (selected === currentQuestion.correct) add points


    // If it's wrong subtract time
    // increase current index
    //either way, empty the ul with element.innerHTML = ''
    // if () displayNextQuestion()

// Listen for click inside the answer ul tag
answersTag.addEventListener("click", function(event){
  console.log("click");
  if( event.target.matches("li") ){
    if( event.target.getAttribute("data-correct") !== undefined ){
      console.log("correct!")
      // add the score
    } else {
      // subtract some time
    }
    currQuestionIdx++;
    displayNextQuestion();
  }
})

// Listen for button clicks
startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", nextScreen)


console.log("hello")