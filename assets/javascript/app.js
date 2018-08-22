$(document).ready(function(){

  $("timer-div, #trivia-div, #scoreboard-div, #done-div").hide();

  let gameboard = $("#trivia-div");
  let scoreboard = $("#scoreboard-div");

  //Trivia Questions
  const questions = [{
    question:"What is Kate's favorite food?",
    answers: ["Tamales", "Empanadas", "Mac and Cheese", "Pickles"],
    correctAnswer:"Tamales"
  },{
    question:"What is Kate's favorite color?",
    answers:["White", "Pink", "Gold", "Mint"],
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
    answers:["Gossip Girl", "Game of Thrones", "It's Always Sunny in Philedelphia", "Criminal Minds"],
    correctAnswer:"Criminal Minds"
  },{
    question: "What is Kate's favorite U.S city to visit?",
    answers:["Key West", "New Orleans", "Nashville", "Chicago"],
    correctAnswer:"New Orleans"
  },{
    question: "What is Kate's favorite alcoholic beverage?",
    answers:["Moscow Mule", "Pinot Noir", "Champagne", "White Russian"],
    correctAnswer:"Champagne"
  },{
    question:"What is Kate's favorite movie?",
    answers:["Peter Pan", "Mad Max: Fury Road", "King Kong: Skull Island", "Mamma Mia 2"],
    correctAnswer:"Mad Max: Fury Road"
  }];

  let timer;
  let game = {

    correct: 0,
    incorrect: 0,
    counter: 60,

    countdown: function() {
      game.counter--;
      $("#counter-number").html(game.counter);
      if (game.counter === 0) {
        game.done();
      }
    },

    start: function() {
      timer = setInterval(game.countdown, 1000);

      $("#timer-div").prepend("<p class='timer-p'><span id='counter-number'>60</span></p>");
      $("#start-button, .welcome-p").remove();

      for (var i = 0; i < questions.length; i++) {
        gameboard.append("<h2>" + questions[i].question + "</h2>");
        for (var j = 0; j < questions[i].answers.length; j++) {
          gameboard.append("<input type='radio' name='question-" + i +
          "' value='" + questions[i].answers[j] + "' '>" + questions[i].answers[j]);
        }
      }
      $("#done-div").append("<button id='done'>Done</button>");
    },

    done: function() {

      $.each($("input[name='question-0']:checked"), function() {
        if ($(this).val() === questions[0].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() === questions[1].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-2']:checked"), function() {
        if ($(this).val() === questions[2].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-3']:checked"), function() {
        if ($(this).val() === questions[3].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-4']:checked"), function() {
        if ($(this).val() === questions[4].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-5']:checked"), function() {
        if ($(this).val() === questions[5].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-6']:checked"), function() {
        if ($(this).val() === questions[6].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-7']:checked"), function() {
        if ($(this).val() === questions[7].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-8']:checked"), function() {
        if ($(this).val() === questions[8].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

      $.each($("input[name='question-9']:checked"), function() {
        if ($(this).val() === questions[9].correctAnswer) {
          game.correct++;
        }
        else {
          game.incorrect++;
        }
      });

      this.result();
      $("#done-div").hide();
    },

    result: function() {
      clearInterval(timer);

        $("#timer-div, #trivia-div").hide();
        scoreboard.append("<h3>Correct Answers: " + this.correct + "</h3>");
        scoreboard.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
        scoreboard.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
        scoreboard.append("<h6>If you want to know the correct answers feel free to email me even if you have no interest in me professionally or romantically.</h6>");
    }
  };

  //Start and Stop Buttons
  $("#start-button").click(function() {
    game.start();
    $("timer-div, #trivia-div, #scoreboard-div, #done-div").show();
  });


  $(document).on("click", "#done", function() {
    game.done();
  });
});