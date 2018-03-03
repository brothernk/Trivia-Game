$(document).ready(function(){

//Variables
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

var timer;
var correctAnswer = 0;
var incorrectAnswer = 0;
var startingTime = 10;

  //Function Scoring and Countdown
  function countdown(){
    startingTime--;
    $("#scoreboard").html(startingTime);
    if (startingTime === 0){
      endGame();
    }
  };

  //Timer Function and Adding Trivia Questions to Screen
  function startGame(){
    $("#start-button").remove();

    timer = setInterval(countdown, 1000);

    $("#timer-div").html("<h2> TIME LEFT: </h2>");

    for (var i = 0; i < triviaQuestions.length; i++) {
        $("#trivia-div").append("<h2>" + triviaQuestions[i].question + "</h2>");
        for (var j = 0; j < triviaQuestions[i].answers.length; j++) {
          $("#trivia-div").append("<input type ='radio'>" + triviaQuestions[i].answers[j]);
        }
    }
    $("#trivia-div").append("<button id='done-button'>DONE</button>");
  };

  //Function to Check Questions
  function endGame(){

    clearInterval(timer);

    $.each($("input[name='question-0']:checked"), function(){
      if($(this).val() === triviaQuestions[0].correctAnswer){
        correct++;
      }
      else{
        incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function(){
      if($(this).val() === triviaQuestions[1].correctAnswer){
        correct++;
      }
      else{
        incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function(){
      if($(this).val() === triviaQuestions[2].correctAnswer){
        correct++;
      }
      else{
        incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function(){
      if($(this).val() === triviaQuestions[3].correctAnswer){
        correct++;
      }
      else{
        incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function(){
      if($(this).val() === triviaQuestions[4].correctAnswer){
        correct++;
      }
      else{
        incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function(){
      if($(this).val() === triviaQuestions[5].correctAnswer){
        correct++;
      }
      else{
        incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function(){
      if($(this).val() === triviaQuestions[6].correctAnswer){
        correct++;
      }
      else{
        incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function(){
      if($(this).val() === triviaQuestions[7].correctAnswer){
        correct++;
      }
      else{
        incorrect++;
      }
    });
    $.each($("input[name='question-8']:checked"), function(){
      if($(this).val() === triviaQuestions[8].correctAnswer){
        correct++;
      }
      else{
        incorrect++;
      }
    });

    this.result();
  };

  //Result Function
  function result(){
    clearInterval(timer);
    $("#scoreboard").append("<h3>Correct Answers: " + this.correct + "</h3>");
    $("#scoreboard").append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    $("#scoreboard").append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  };

  //Click to Start and End
  $("#start-button").click(function(){
    startGame();
  })

  $("#done-button").click(function(){
    endGame();
  })

});
  




