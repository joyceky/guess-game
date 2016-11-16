"use strict";

$(function() {
 generateRandomNum();

 $input_button.click(getGuess);

 $reset_button.click(generateRandomNum);
 });

//Variables
var $input_button = $("#guess_button");
var $reset_button = $("#reset_button");
var $dynamic_text = $("#dynamic_text");

var randomNum = 0;


function generateRandomNum() {
  randomNum = Math.random() * (100 - 1) + 1;
}

function getGuess() {
  var guess = $("#guess_input").val();
  runGameLoop(guess);
}

function runGameLoop(guess) {
  if(guess < randomNum) {
    $dynamic_text.text("Too low! Guess again.");
    console.log('low');
  }
  if(guess > randomNum) {
    $dynamic_text.text("Too high! Guess again.");
    console.log('high');
  }
  if(guess === randomNum) {
    userWins();
  }
}

function userWins() {
  // run win animation
  // add
}
