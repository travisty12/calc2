function add(in1, in2) {
  return in1 + in2;
};

function subtract(in1, in2) {
  return in1 - in2;
};

function multiply(in1, in2) {
  return in1 * in2;
};

function divide(in1, in2) {
  return in1 / in2;
};

function power(base, exp) {
  return base ** exp;
};

function logCalc(base, num) {
  return Math.log(num) / Math.log(base);
};

$(document).ready(function() {
  $("form#form-one").submit(function(event) {
    var inputOne = parseInt($("input#input-one").val());
    var inputTwo = $("input#input-two").val();
    var inputThree = parseInt($("input#input-three").val());

    if (inputTwo === "add") {
      $("#answer").text(inputOne + " plus " + inputThree + " is " + add(inputOne, inputThree));
    }
    else if (inputTwo === "subtract") {
      $("#answer").text(inputOne + " minus " + inputThree + " is " + subtract(inputOne, inputThree));
    }
    else if (inputTwo === "multiply") {
      $("#answer").text(inputOne + " times " + inputThree + " is " + multiply(inputOne, inputThree));
    }
    else if (inputTwo === "divide") {
      $("#answer").text(inputOne + " divided by " + inputThree + " is " + divide(inputOne, inputThree));
    }
    else if (inputTwo === "raise") {
      $("#answer").text(inputOne + " raised to " + inputThree + " is " + power(inputOne, inputThree));
    }
    else if (inputTwo === "log") {
      $("#answer").text("The logarithm of " + inputThree + " in base " + inputOne + " is " + logCalc(inputOne, inputThree));
    }
    else {
      $("#answer").text("That is not a valid command.");
    }
    event.preventDefault();

  });


});
