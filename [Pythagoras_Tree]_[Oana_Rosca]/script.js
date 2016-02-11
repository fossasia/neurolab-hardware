var c = document.getElementById("tree");
var context = c.getContext("2d");
var n, angle, index;

var rect = [[3, 2, 1.4, 1.2, 1, 1], [2, 2, 1, 1, 1, 1], [2, 3, 1, 1, 1.4, 1.2]];

treeDraw = function(x1, y1, x2, y2, n) {
  var a = n*20;
  var b = 255-(n+10)*10;
  var c = 0;
  context.beginPath();
  context.strokeStyle='rgb(' + a + ',' + b + ',' + c + ')';
  context.lineWidth = 20-20/n;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  var xs = x1-x2;
  var ys = y1-y2;
  var xn = x2 + (ys/rect[index][0] - xs/rect[index][1])*rect[index][2];
  var yn = y2 - (xs/rect[index][0] + ys/rect[index][1])*rect[index][3];
  var xn2 = x2 - (ys/rect[index][1] + xs/rect[index][0])*rect[index][4];
  var yn2 = y2 + (xs/rect[index][1] - ys/rect[index][0])*rect[index][5];

  if (n > 0) {
    setTimeout(function() {
      treeDraw(x2,y2,xn,yn, n-1);
    }, 100);
    setTimeout(function() {
      treeDraw(x2,y2,xn2,yn2, n-1);
    }, 100);
  }
}

function draw() {
  context.clearRect(0, 0, 600, 400);
  var select = document.getElementById("iterations");
  var selectedValue = select.options[select.selectedIndex].value;
  n = Number(selectedValue);
  var select2 = document.getElementById("angle");
  var selectedValue2 = select2.options[select2.selectedIndex].value;
  angle = Number(selectedValue2);
  if (angle == 30)
    index = 0;
  else if (angle == 45)
    index = 1;
  else
    index = 2;
  setTimeout(function() {
    treeDraw(300, 400, 300, 300, n);
  }, 200);
}