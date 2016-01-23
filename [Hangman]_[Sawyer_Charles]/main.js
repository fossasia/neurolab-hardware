$(document).ready(function () {
  $('#start-btn').click(function () {start();});
  $('#re-btn').click(function () {location.reload();});
  var word;
  var wrong;
  var guess;
  var right;
  var stopped = false;
  function start() {
    word  = null;
    wrong = 0;
    guess = ['a', 'e', 'i', 'o', 'u'];
    right = 0;
    stopped = false;
    $('center').each(function () {
      $(this).css('display', 'none');
    });
    $('#game-c').css('display', 'block');

    words = []
    c = $('select :selected').val();
    switch (c) {
      case 'animals':
        words = ['donkey', 'llama', 'otter', 'sheep', 'goat'];
        break;
      case 'clothes':
        words = ['shirt', 'pants', 'scarf', 'socks', 'jacket'];
        break;
      case 'food':
        words = ['apple', 'pizza', 'steak', 'hamburger', 'chicken'];
        break;
    }

    n =  Math.floor(Math.random() * 5);
    word = words[n];
    draw(0, null);
    $('#game-i').focus();
    $('#game-i').blur(function () {$('#game-i').focus();});
    $('#game-i').keyup(function (e) {
      if (!stopped) {
        l = String.fromCharCode(e.which);
        if ($.inArray(l.toLowerCase(), guess) == -1) {
          guess.push(l);
          draw(1, l.toLowerCase());
        }else {
          draw(2, l.toUpperCase());
        }
      }


    });
  }

  function new_msg(board, msg) {
    board.beginPath();
    board.fillStyle = 'black';
    board.fillRect(0,0,600,74.5);
    board.closePath();
    board.font = "40px Arial";
    board.textAlign = "center";
    board.fillStyle = 'white';
    board.fillText(msg, 300, 50);
    console.log(msg);
  }

  function draw(step, letter) {
    canvas = document.getElementById('game');
    board  = canvas.getContext("2d");
    l = word.length;
    s = 600 / (l*2+1);
    switch (step) {
      case 0:
        board.fillStyle = 'black';
        board.fillRect(0,0,600,400);
        t = 1;
        i = 0;
        v = 0;
        while (l > 0) {
          l--;
          board.beginPath();
          board.moveTo(s*t,350);
          t++;
          board.lineTo(s*t, 350);
          t++;
          board.strokeStyle = 'white';
          board.stroke();
          board.closePath();
          p = word.split('')[i];
          if ($.inArray(p, ['a','e','i','o','u']) != -1) {
            board.font = "40px Arial";
            board.textAlign = "center";
            //x = s*(t-2);
            x = 0.5*((s*(t-2)) + (s*(t-1)));
            board.fillStyle = 'white';
            board.fillText(p.toUpperCase(),x,325,s);
            v++;
          }
          i++;
        }
        right += v;

        board.beginPath();
        board.moveTo(50.5,250.5);
        board.lineTo(200.5,250.5);
        board.lineWidth = '5';
        board.stroke();
        board.closePath();
        board.beginPath();
        board.moveTo(125.5,75.5);
        board.lineTo(125.5,250.5);
        board.stroke();
        board.closePath();
        board.beginPath();
        board.moveTo(125.5,75.5);
        board.lineTo(250.5,75.5);
        board.stroke();
        board.closePath();
        msg = 'Type a Letter To Try It!';
        board.fillText(msg, 300, 50);
        break;

      case 1:
        a = word.split('');
        c = 0;
        pos = -1;
        a.forEach(function(e) {
          if (e == letter) {
            c++;
            pos = a.indexOf(e, pos+1);
            board.font = "40px Arial";
            board.textAlign = "center";
            x = 0.5*((s*((pos*2)+1)) + (s*((pos*2)+2)));
            board.fillStyle = 'white';
            board.fillText(e.toUpperCase(),x,325,s);
          }
        });
        right += c;
        console.log(c);
        if (right == l) {
          stopped = true;
          board.beginPath();
          board.fillStyle = 'black';
          board.fillRect(0,0,600,400);
          board.closePath();
          board.font = "40px Arial";
          board.textAlign = 'center';
          board.fillStyle = 'green';
          board.fillText('You won! The word is ' + word, 300, 200);
        }else if (c > 0) {
          new_msg(board, letter.toUpperCase() + ' is in the word!');
        }else {
          wrong++;
          new_msg(board, letter.toUpperCase() + ' is wrong! ' + wrong + ' wrong guesses!');
          hang(board, wrong);
        }
        if (wrong >= 5) {
          stopped = true;
          board.beginPath();
          board.fillStyle = 'black';
          board.fillRect(0,0,600,400);
          board.closePath();
          board.font = "40px Arial";
          board.textAlign = 'center';
          board.fillStyle = 'red';
          board.fillText('You lost! The word was ' + word, 300, 200);
        }
        break;
      case 2:
        new_msg(board, 'You Already Guessed ' + letter);
        break;

    }

  }

  function hang(b, w) {
    switch (w) {
      case 1:
        //250.5,75.5
        b.beginPath();
        b.lineWidth = '5';
        b.strokeStyle = 'white';
        b.arc(250.5, 105.5, 30, 0, 2*Math.PI);
        b.stroke();
        b.closePath();
        break;
      case 2:
        b.beginPath();
        b.lineWidth = '5';
        b.strokeStyle = 'white';
        b.moveTo(250.5, 135.5);
        b.lineTo(250.5, 230.5);
        b.stroke();
        b.closePath();
        break;
      case 3:
        b.beginPath();
        b.lineWidth = '5';
        b.strokeStyle = 'white';
        b.moveTo(250.5, 165.5);
        b.lineTo(200.5, 140.5);
        b.stroke();
        b.closePath();
        b.beginPath();
        b.moveTo(250.5, 165.5);
        b.lineTo(300.5, 140.5);
        b.stroke();
        b.closePath();
        break;
      case 4:
        b.beginPath();
        b.lineWidth = '5';
        b.strokeStyle = 'white';
        b.moveTo(250.5, 230.5);
        b.lineTo(220.5, 260.5);
        b.stroke();
        b.closePath();
        b.beginPath();
        b.moveTo(250.5, 230.5);
        b.lineTo(280.5, 260.5);
        b.stroke();
        b.closePath();
        break;
    }
  }

});
