const triviaGame = $("trivia");

$("#start-button").on("click", function startGame(){
  setTimeout(function(){ alert("Time's Up!"); }, 3000);
}

startGame();

//Object containing trivia questions
const triviaQuestions = [

  {question:"What is Kate's favorite food?",
    answers:{
      a:"Tamales",
      b:"Empanadas",
      c:"Mac and Cheese",
      d:"Pickles"
    },

    correctAnswer:"Tamales"
  },

  {question:"What is Kate's favorite color?",
    answers:{
      a:"White",
      b:"Pink",
      c:"Gold",
      d:"Black"
    },

    correctAnswer:"White"
  }, 

  {question:"What is Kate's favorite book?",
    answers:{
      a:"Eat Pray Love",
      b:"Wuthering Heights",
      c:"The Poisonwood Bible",
      d:"The Awakening"
    },

    correctAnswer:"The Poisonwood Bible"
  },

  {question:"What is Kate's favorite holiday?",
    answers:{
      a:"Fourth of July",
      b:"Halloween",
      c:"Thanksgiving",
      d:"Christmas"
    },

    correctAnswer:"Christmas"
  },
  
  {question:"What is Kate's favorite animal?",
    answers:{
      a:"Humpback Whale",
      b:"Crocodile",
      c:"Anaconda",
      d:"Great White Shark"
    },

    correctAnswer:"Crocodile"
  },

  {question:"What is Kate's favorite hobby?",
    answers:{
      a:"Reading",
      b:"Cooking",
      c:"Dancing",
      d:"Drawing"
    },

    correctAnswer:"Cooking"
  },

  {question:"What is Kate's favorite television show?",
    answers:{
      a:"Gossip Girl",
      b:"Game of Thrones",
      c:"It's Always Sunny in Philedelphia",
      d:"Westworld"
    },

    correctAnswer:"Westworld"
  },

  {question:"What is Kate's favorite bar?",
    answers:{
      a:"Stella's",
      b:"Exchange",
      c:"Bar Louie",
      d:"Honey"
    },

    correctAnswer:"Stella's"
  },

  {question: "What is Kate's favorite city?",
    answers:{
      a:"Key West",
      b:"New Orleans",
      c:"Nashville",
      d:"Denver"
    },

    correctAnswer:"New Orleans"
  },

  {question:"What is Kate's favorite movie?",
    answers:{
      a:"Pirates of the Carribbean",
      b:"Mad Max: Fury Road",
      c:"King Kong: Skull Island",
      d:"Wonder Woman"
    },
    correctAnswer:"Mad Max: Fury Road"
  }];

$("trivia").html(triviaQuestions);
  




