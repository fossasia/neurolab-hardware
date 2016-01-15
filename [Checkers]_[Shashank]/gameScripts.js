var selected = null, x_pos = 0, y_pos = 0, x_elem = 0, y_elem = 0;
var locationCount=1; 
var arrSquares, gameOver, lastUsed, multPossible;
var lastPlayer="null";

function newGame()
{
    gameOver = false;
    drawBoard();
    fillBoard();
    makePiecesDraggable();
    makeMouseUpDetectable();
    lastPlayer="null";
    locationCount=1;
    multPossible = false;
}

function drawBoard()
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,800,800);
    for(var i=0;i<=800;i+=200)
    {
        for(var w=100;w<=800;w+=200)
        {
            ctx.fillStyle = "#000000";
            ctx.fillRect(i,w,100,100);
        }
    }
    for(var i=100;i<=800;i+=200)
    {
        for(var w=0;w<=800;w+=200)
        {
            ctx.fillStyle = "#000000";
            ctx.fillRect(i,w,100,100);
        }
    }
    ctx.strokeStyle = "#98999A";
    for(var i=100;i<=800;i+=100)
    {
        ctx.moveTo(i,0);
        ctx.lineTo(i,800);
        ctx.stroke();
    }
    for(var i=100;i<=800;i+=100)
    {
        ctx.moveTo(0,i);
        ctx.lineTo(800,i);
        ctx.stroke();
    }
}

function fillBoard()
{
    loadArray();
    var filler = "";
    for(var i=0; i<8; i++)
    {
        for(var w=0; w<8; w++)
        {
            filler +="<div id='"+i+"a"+w+"' class='inline icon empty'></div>"
        }
        filler+="<br>";
    }
    document.getElementById("iconHolder").innerHTML = filler;
    changePieces();
}

function loadArray()
{
    arrSquares = new Array(8);
    for(i = 0; i<8; i++)
    {
        arrSquares[i] = new Array(8);
    }
    for(row = 0; row <8; row++)
    {
       for(col = 0; col <8; col++)
       {
            arrSquares[row][col] = {rowNumber:row, colNumber:col, type:'empty'};
       }
    }
}

function changePieces()
{
    for(var i=0; i<8; i++)
    {
        for(var w=0; w<8; w++)
        {
            if(((i+w)%2==0))
            {
                if(i<3)
                {
                    document.getElementById((i+'a'+w)).className='inline icon red';
                    arrSquares[i][w].type='red';
                }
                else if(i>4)
                {
                    document.getElementById((i+'a'+w)).className='inline icon black';
                    arrSquares[i][w].type='black';
                }
            }
        }
    }
}
function makePiecesDraggable()
{
    for(var i=0; i<8; i++)
    {
        for(var w=0; w<8; w++)
        {
            document.getElementById(i+'a'+w).onmousedown = function () 
            {
                _drag_init(this);
                return false;
            };
        }
    }
    document.onmousemove = _move_elem;
    document.onmouseup = _destroy;
}

function makeMouseUpDetectable()
{
    for(var i=0; i<8; i++)
    {
        for(var w=0; w<8; w++)
        {
            $('#'+i+'a'+w).click(function(e) {
              var offset = $('#myCanvas').offset();
              var relativeX = (e.pageX - offset.left);
              var relativeY = (e.pageY - offset.top);
              movePiece(this.id, relativeX, relativeY);
            });
        }
    }
}
function movePiece(idName, XCoor, YCoor)
{
    if(!gameOver)
    {
        var fromRow= parseInt(idName.substring(0,1)), fromCol= parseInt(idName.substring(2,3));
        var toCoorString = determineSquare(XCoor,YCoor);
        var toRow = parseInt(toCoorString.substring(2,3)), toCol = parseInt(toCoorString.substring(0,1));
        var avRow = Math.floor((toRow+fromRow)/2), avCol = Math.floor((toCol+fromCol)/2);
        var avType = arrSquares[avRow][avCol].type, fromType =arrSquares[fromRow][fromCol].type;
        
        if(((arrSquares[fromRow][fromCol].type)!='empty')&&(arrSquares[toRow][toCol].type=='empty') && (((toCol+toRow)%2)==0))
        {
            if((Math.abs(toRow-fromRow)<2)&&(Math.abs(toCol-fromCol)<2)&&(fromType.substring(0,1)!=lastPlayer.substring(0,1)))
            {
                if(!(((fromType=='red')&&(toRow<fromRow))||((fromType=='black')&&(toRow>fromRow))))
                {
                    arrSquares[toRow][toCol].type = arrSquares[fromRow][fromCol].type;
                    arrSquares[fromRow][fromCol].type = 'empty';
                    lastUsed = toCoorString;
                    lastPlayer = arrSquares[toRow][toCol].type;
                    multPossible=false;
                }
            }
            else if(((multPossible&&(lastUsed==(fromCol+'a'+fromRow))&&avType.substring(0,1)!=fromType.substring(0,1))||((fromType).substring(0,1)!=lastPlayer.substring(0,1)))&&(Math.abs(toRow-fromRow)<3)&&(Math.abs(toCol-fromCol)<3)&&((avType=='red')||(avType=='redK')||(avType=='black')||(avType=='blackK')))
            {   
                if((!(((fromType=='red')&&(toRow<fromRow))||((fromType=='black')&&(toRow>fromRow))))||(multPossible&&(lastUsed==(fromCol+'a'+fromRow))))
                {
                    if(fromType=='black'||fromType=='blackK')
                    {
                        if(avType=='red'||avType=='redK')
                        {
                            arrSquares[avRow][avCol].type='empty';
                        }
                        arrSquares[toRow][toCol].type = arrSquares[fromRow][fromCol].type;
                        arrSquares[fromRow][fromCol].type = 'empty';
                        lastUsed = toCoorString;
                        lastPlayer = arrSquares[toRow][toCol].type;
                        multPossible = true;
                    }
                    else
                    {
                       if(avType=='black'||avType=='blackK')
                        {
                            arrSquares[avRow][avCol].type='empty';
                        } 
                        arrSquares[toRow][toCol].type = arrSquares[fromRow][fromCol].type;
                        arrSquares[fromRow][fromCol].type = 'empty';
                        lastUsed = toCoorString;
                        lastPlayer = arrSquares[toRow][toCol].type;
                        multPossible=true;
                    }
                }
            }
        }
        checkKing();
        replacePieces();
        checkWin();
    }
    else
    {
        replacePieces();
    }
}

function determineSquare(XCoor, YCoor)
{
    return ((Math.floor(XCoor/100))+'a'+Math.floor(YCoor/100));
}

function checkKing()
{
    for(var w=0;w<8;w++)
    {
        if(arrSquares[7][w].type=='red')
        {
            arrSquares[7][w].type='redK';
        }
        if(arrSquares[0][w].type=='black')
        {
            arrSquares[0][w].type='blackK';
        }
    }
}

function replacePieces()
{
    for(var i=0; i<8; i++)
    {
        for(var w=0; w<8; w++)
        {
            document.getElementById(i+'a'+w).className="inline icon " +arrSquares[i][w].type;
        }
    }
}
function checkWin()
{
    var redCount=0, blackCount=0;
    for(var i=0; i<8; i++)
    {
        for(var w=0; w<8; w++)
        {
            var type = arrSquares[i][w].type;
            if((type=='red')||(type=='redK'))
            {
                redCount++;
            }
            if((type=='black')||(type=='blackK'))
            {
                blackCount++;
            }
        }
    }
    if(redCount<1)
    {
        alert("BLACK WINS!!!");
        gameOver = true;
    }
    else if(blackCount<1)
    {
        alert("RED WINS!!!");
        gameOver = true;
    }
}

function _drag_init(elem) {
    selected = elem;
    selected.style.position='relative';
    x_elem = x_pos;
    y_elem = y_pos;
}

function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

function _destroy() {
    if(selected != null)
    {
        selected.className='inline icon empty';
        selected.removeAttribute('style');
    }
    selected = null;
}
