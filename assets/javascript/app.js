$(document).ready(function(){

//Trivia Questions
var triviaQuestions = [{
  question:"What is Kate's favorite food?",
  answers: ["Tamales", "Empanadas", "Mac and Cheese", "Pickles"],
  correctAnswer:"Tamales"
},{
  question:"What is Kate's favorite color?",
  answers:["White", "Pink", "Gold", "Black"],
  correctAnswer:"White"
},{
  question:"What is Kate's favorite book?",
  answers:["Eat Pray Love", "Wuthering Heights", "The Poisonwood Bible", "The Awakening"],
  correctAnswer:"The Poisonwood Bible"
},{
  question:"What is Kate's favorite holiday?",
  answers:["Fourth of July", "Halloween", "Thanksgiving", "Christmas"],
  correctAnswer:"Christmas"
},{
  question:"What is Kate's favorite animal?",
  answers:["Humpback Whale", "Crocodile", "Anaconda", "Great White Shark"],
  correctAnswer:"Crocodile"
},{
  question:"What is Kate's favorite hobby?",
  answers:["Reading", "Cooking", "Dancing", "Drawing"],
  correctAnswer:"Cooking"
},{
  question:"What is Kate's favorite television show?",
  answers:["Gossip Girl", "Game of Thrones", "It's Always Sunny in Philedelphia", "Westworld"],
  correctAnswer:"Westworld"
},{
  question: "What is Kate's favorite city?",
  answers:["Key West", "New Orleans", "Nashville", "Denver"],
  correctAnswer:"New Orleans"
},{
  question:"What is Kate's favorite movie?",
  answers:["Pirates of the Carribbean", "Mad Max: Fury Road", "King Kong: Skull Island", "Wonder Woman"],
  correctAnswer:"Mad Max: Fury Road"
}];

//Creating the timer and scoring
var timer;

var game = {
  correct:0,
  incorrect:0,
  score:150,
}

//Function for scoring and countdown
function countdown(){
  score--;
  $("#scoreboard").html(score);
  if (score === 0){
    alert("Time's up!");
    endGame();
  }
}

//Function to start the game
function startGame(){
  timer = setInterval(countdown, 1000);

  for (var i = 0; i < triviaQuestions.length; i++) {
      $("#trivia-div").append("<h2>" + triviaQuestions[i].question + "</h2>");
      for (var j = 0; j < triviaQuestions[i].answers.length; j++) {
        $("#trivia-div").append("<input type='radio' name='question-" + i +
        "' value='" + triviaQuestions[i].answers[j] + "''>" + triviaQuestions[i].answers[j]);
      }
  }
  $("#trivia-div").append("<button id='done-button'>Done</button>");
}

//Function to end the game
function endGame(){
  $.each($("input[name='question-0']:checked"), function(){
    if($(this).val() === triviaQuestions[0].correctAnswer){
      game.correct++;
    }
    else{
      game.incorrect++;
    }
  });
  this.result();
}

function result(){
  clearInterval(timer);
}

//Click to start and end the game
$("#start-button").click(function(){
  startGame();
})

$("#done-button").click(function(){
  endGame();
})

});
  




