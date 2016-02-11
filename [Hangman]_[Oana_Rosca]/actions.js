var c = document.getElementById("hang");
var context = c.getContext("2d");
context.strokeStyle = "white";
context.lineWidth = 2;

var draw = function (x1, y1, x2, y2) {
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
};

var initialDrawing = function () {
  draw(20, 180, 280, 180);
  draw(40, 180, 40, 20);
  draw(20, 30, 130, 30);
};

rope = function () {
  draw(120, 30, 120, 50);
};

head = function () {
  context.beginPath();
  context.arc(120, 60, 10, 0, 2*Math.PI);
  // coordonatele centrului, raza, unghiul de inceput si cel de sfarsit in radiani
  context.stroke();
};

body = function () {
  draw(120, 70, 120, 110);
};

arms = function () {
  draw(120, 90, 105, 75); draw(120, 90, 135, 75);
};

legs = function () {
  draw(120, 110, 105, 130); draw(120, 110, 135, 130);
};

initialDrawing();
var drawThings = [rope, head, body, arms, legs];
var categories = [["UNICORN", "DOG", "ELEPHANT", "GIRAFFE", "DOLPHIN"], ["CHICAGO", "PARIS", "SYDNEY", "BERLIN", "ROME"], ["JAWS", "TITANIC", "INCEPTION", "FROZEN", "TED"], ["FOOTBALL", "HOCKEY", "DANCING", "SWIMMING", "RUNNING"]];
var index = 0, word, lettToWin, newWord, partOne, partTwo, index2 = 0;
var voc = "AEIOU";

function changeCategory() {
  
  var select = document.getElementById("select");
  var selectedValue = select.options[select.selectedIndex].value;
  index = Number(selectedValue);
  index2 = 0;
  reset();
};

function vowelsDisplay() {
  newWord = "";
  for (i in word) {
    if (voc.indexOf(word.charAt(i)) != -1) {
      newWord += word.charAt(i) + " ";
      lettToWin--;
      var vowel = document.getElementById(word.charAt(i));
      $(vowel).addClass("used");
    }
    else
      newWord += "_ ";
  }
  document.getElementById("wordDisplay").innerHTML = newWord;
}

function play() {
  //alert(index);
  word = categories[index][Math.floor(Math.random() * 5)];
  lettToWin = word.length;
  vowelsDisplay();
};

play();
index = 0;

$('li').click(function() { // check
  if (this.className != "used") {
    var letter = this.innerHTML;
    if (word.indexOf(letter) != -1) {
      for (i in word)
        if (letter == word.charAt(i)) {
          if (i == 0) {
            partOne = letter;
            var res = newWord.substring(1, newWord.length);
            partOne += res;
          }
          else {
            partOne = newWord.substring(0, 2*i);
            partTwo = newWord.substring(2*i+1, newWord.length);
            partOne += letter + partTwo;
          }
          newWord = partOne; lettToWin--;
          document.getElementById("wordDisplay").innerHTML = newWord;
        }
    }
    else {
      drawThings[index2]();
      index2++;
    }
    $(this).addClass("used");
    if (index2 == 5) {
      document.getElementById("wordDisplay").innerHTML = "You lost!";
      $("li").addClass("used");
      index2 = 0;
    }
    if (lettToWin == 0) {
      document.getElementById("wordDisplay").innerHTML = "You won!";
      $("li").addClass("used");
      index2 = 0;
    }
  }
});


function reset() {
  $("li").removeClass("used");
  document.getElementById("wordDisplay").innerHTML = "";
  context.clearRect(0, 0, 300, 200);
  initialDrawing();
  play();
};