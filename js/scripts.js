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

var displayDig = ["", "", "", "", "", "", "", "", "", "", "", ""];
var i = 0;
var opClick = "";
var strSecond = "";
var number1;
var number2;
var digSecond = 0;
$(document).ready(function() {
  $("button").click(function() {
    if (opClick != "") {
      digSecond += 1;
    }

    if ($(this).text() === "+") {
      number1 = parseFloat(displayDig[0] + displayDig[1] + displayDig[2] + displayDig[3] + displayDig[4] + displayDig[5] + displayDig[6] + displayDig[7] + displayDig[8] + displayDig[9] + displayDig[10] + displayDig[11]);
      opClick = "+";
    }
    else if ($(this).text() === "-") {
      number1 = parseFloat(displayDig[0] + displayDig[1] + displayDig[2] + displayDig[3] + displayDig[4] + displayDig[5] + displayDig[6] + displayDig[7] + displayDig[8] + displayDig[9] + displayDig[10] + displayDig[11]);
      opClick = "-";
    }
    else if ($(this).text() === "*") {
      number1 = parseFloat(displayDig[0] + displayDig[1] + displayDig[2] + displayDig[3] + displayDig[4] + displayDig[5] + displayDig[6] + displayDig[7] + displayDig[8] + displayDig[9] + displayDig[10] + displayDig[11]);
      opClick = "*";
    }
    else if ($(this).text() === "/") {
      number1 = parseFloat(displayDig[0] + displayDig[1] + displayDig[2] + displayDig[3] + displayDig[4] + displayDig[5] + displayDig[6] + displayDig[7] + displayDig[8] + displayDig[9] + displayDig[10] + displayDig[11]);
      opClick = "/";
    }
    else if ($(this).text() === "^") {
      number1 = parseFloat(displayDig[0] + displayDig[1] + displayDig[2] + displayDig[3] + displayDig[4] + displayDig[5] + displayDig[6] + displayDig[7] + displayDig[8] + displayDig[9] + displayDig[10] + displayDig[11]);
      opClick = "^";
    }
    else if ($(this).text() === "log") {
      number1 = parseFloat(displayDig[0] + displayDig[1] + displayDig[2] + displayDig[3] + displayDig[4] + displayDig[5] + displayDig[6] + displayDig[7] + displayDig[8] + displayDig[9] + displayDig[10] + displayDig[11]);
      opClick = "log";
    }
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
    number1 = 0;
    number2 = 0;
    opClick = "";
    strSecond = "";
    digSecond = 0;
    $("#answer").text("Here's your answer");
  });
  $("#equals").click(function(event) {
    if (opClick === "+") {
      for (i = 0; i < digSecond; i++) {
        strSecond += displayDig[12-(digSecond - i)];
      }
      number2 = parseFloat(strSecond);
      $("#answer").text(add(number1, number2));
    }
    else if (opClick === "-") {
      for (i = 0; i < digSecond; i++) {
        strSecond += displayDig[12-(digSecond - i)];
      }
      number2 = parseFloat(strSecond);
      $("#answer").text(subtract(number1, number2));
    }
    else if (opClick === "*") {
      for (i = 0; i < digSecond; i++) {
        strSecond += displayDig[12-(digSecond - i)];
      }
      number2 = parseFloat(strSecond);
      $("#answer").text(multiply(number1, number2));
    }
    else if (opClick === "/") {
      for (i = 0; i < digSecond; i++) {
        strSecond += displayDig[12-(digSecond - i)];
      }
      number2 = parseFloat(strSecond);
      $("#answer").text(divide(number1, number2));
    }
    else if (opClick === "^") {
      for (i = 0; i < digSecond; i++) {
        strSecond += displayDig[12-(digSecond - i)];
      }
      number2 = parseFloat(strSecond);
      $("#answer").text(power(number1, number2));
    }
    else if (opClick === "log") {
      for (i = 0; i < digSecond; i++) {
        strSecond += displayDig[12-(digSecond - i)];
      }
      number2 = parseFloat(strSecond);
      $("#answer").text(logCalc(number1, number2));
    }
    else {
      $("#answer").text("That is not a valid command.");
    }
    event.preventDefault();
  });
});
