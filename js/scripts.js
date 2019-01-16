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

var displayDig = ["","","","","","","","","","","",""];
var i = 0;
$(document).ready(function() {
  $("button").click(function() {
    for (i = 0; i < 11; i++) {
      displayDig[i] = displayDig[i+1];
      $("#display div:nth-child(" + (i + 1) + ")").children("h1").text(displayDig[i]);
    };
    displayDig[11] = $(this).text();
    $("#display div:nth-child(12)").children("h1").text($(this).text());
  });
  $("#clear-btn").click(function(event) {
    for (i = 0; i < 12; i++) {
      displayDig[i] = "";
      $("#display div:nth-child(" + (i + 1) + ")").children("h1").text(displayDig[i]);
    };
    displayDig[11] = "";
    $("#display div:nth-child(12)").children("h1").text("");
  });
  $("#submit").click(function(event) {
    var inputOne = parseInt($("input#input-one").val());
    var inputTwo = $("#input-two").val();
    var inputThree = parseInt($("input#input-three").val());

    if (inputTwo === "+") {
      $("#answer").text(inputOne + " plus " + inputThree + " is " + add(inputOne, inputThree));
    }
    else if (inputTwo === "-") {
      $("#answer").text(inputOne + " minus " + inputThree + " is " + subtract(inputOne, inputThree));
    }
    else if (inputTwo === "*") {
      $("#answer").text(inputOne + " times " + inputThree + " is " + multiply(inputOne, inputThree));
    }
    else if (inputTwo === "/") {
      $("#answer").text(inputOne + " divided by " + inputThree + " is " + divide(inputOne, inputThree));
    }
    else if (inputTwo === "^") {
      $("#answer").text(inputOne + " raised to the power of " + inputThree + " is " + power(inputOne, inputThree));
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
