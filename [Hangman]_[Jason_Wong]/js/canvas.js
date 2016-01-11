window.onload = function () {
  var hangman = document.getElementById("hangman");
  var context = hangman.getContext("2d");
  context.strokeStyle = "#000";
  context.lineWidth = 3;

  var draw = function (x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  };
  
  function stand () {
    draw(25,25, 25, 175);
    draw(25, 175, 175, 175);
    draw(25, 25, 175, 25);
  };

  function hanger () {
  draw(100, 25, 100, 50);
  };

  function head () {
    context.beginPath();
    context.arc(100, 60, 10, 0, 2*Math.PI);
    context.stroke();
  };

  function stick () {
    draw(100, 70, 100, 120);
  };

  function arms () {
    draw(100, 90, 80, 80); 
    draw(100, 90, 120, 80);
  };

  function legs () {
    draw(100, 120, 80, 140); 
    draw(100, 120, 120, 140);
  };
  
  function wipe() {
    context.clearRect (0, 0, 200, 200);
  }
  stand();
  
  canvas = {
    stand: stand,
    hanger: hanger,
    head: head,
    stick: stick,
    arms: arms,
    legs: legs,
    wipe: wipe
  }
};