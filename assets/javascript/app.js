const $body = $('body');
const $gameboard = $('.gameboard');

//Trivia Questions
const questions = [{
  question:"What is Kate's favorite food?",
  answers: ["Curry Burritos", "Sushi", "Tamales", "Pickles"],
  correctAnswer:"Curry Burritos"
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
  answers:["Fourth of July", "Halloween", "Easter", "Christmas"],
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
  question:"What is Kate's favorite TV show?",
  answers:["Westworld", "Game of Thrones", "Grey's Anatomy", "Criminal Minds"],
  correctAnswer:"Criminal Minds"
},{
  question: "What is Kate's favorite U.S city to visit?",
  answers:["Key West", "New Orleans", "Nashville", "Chicago"],
  correctAnswer:"New Orleans"
},{
  question: "What is Kate's favorite cocktail?",
  answers:["Moscow Mule", "Spicy Margarita", "Mojito", "White Russian"],
  correctAnswer:"Spicy Margarita"
},{
  question:"What is Kate's favorite board game?",
  answers:["Settlers of Catan", "Dominion", "Code Names", "Ticket to Ride"],
  correctAnswer:"Code Names"
}];

let timer;
let game = {
  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
    game.counter--;
    $('.counter').html(game.counter);

    if (game.counter === 0) {
      game.done();
    }
  },

  start: function() {
    $body.addClass('trivia-started');

    timer = setInterval(game.countdown, 1000);

    for (var i = 0; i < questions.length; i++) {
      $('<h2>' + questions[i].question + '</h2>').appendTo($gameboard);

      for (var j = 0; j < questions[i].answers.length; j++) {
        $('<div class="radio-container"><input type="radio" name="question-' + i+ '" value="' + questions[i].answers[j] + '" id="radio-' + questions[i].answers[j].toLowerCase().replace(' ','-') + '"><label for="radio-' + questions[i].answers[j].toLowerCase().replace(' ','-') + '">' + questions[i].answers[j] + '</label></div>').appendTo($gameboard);
      }
    }
  },

  done: function() {
    $body.removeClass('trivia-started');
    $body.addClass('trivia-ended');


    for (var i = 0; i < questions.length; i++) {
      $.each($('input[name="question-'+i+'"]:checked'), function() {
        $(this).val() === questions[i].correctAnswer ? game.correct++ : game.incorrect++;
      });
    }

    this.result();
  },

  result: function() {
    clearInterval(timer);

    $('.answers--correct').text('Correct answers: ' + this.correct);
    $('.answers--incorrect').text('Incorrect answers: ' + this.incorrect);
    $('.answers--unanswered').text('Unanswered: ' + (questions.length - (this.incorrect + this.correct)));
  }
};

$(document).ready(function(){
  $('.button--start').click(function() {
    game.start();
  });

  $('.button--done').click(function() {
    game.done();
  });

  $body.on('click','.radio-container',function(){
    $(this).find('input').prop("checked", true);

    $('.radio-container').removeClass('selected');
    $(this).addClass('selected');
  });
});