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
var timer = 5;
var score = 0;
var startBtn = document.querySelector("#start-button");
var questionScrn = document.querySelector("#question-screen");
var welcomeScrn = document.querySelector("#welcome-screen");
var gameoverScrn = document.querySelector("#gameover-screen");
var nextBtn = document.querySelector("#next-button");

// Create a function that runs when a user starts the quiz
function startQuiz() {
  // Hide the welcome screen and show the first question
  questionScrn.classList.remove("hide");
  welcomeScrn.classList.add("hide");
}

// Create a function that runs when a user clicks the next button
function nextScreen() {
  // Hide the current question and go to the next screen
  questionScrn.classList.add("hide");
  gameoverScrn.classList.remove("hide");
}

  // First question appears
  // Timer starts
  // function countdown() {

  // }

  // Listen for user to click on one of the answers

// When an answer is clicked
  // Determine if it's right or wrong
// function checkAnswer() 
    // If it's right

    // If it's wrong


// Listen for button clicks
startBtn.addEventListener("click", startQuiz)
nextBtn.addEventListener("click", nextScreen)


}
