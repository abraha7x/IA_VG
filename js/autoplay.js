var board = new Array(3);
var turn;

var Cross_Sellected_x;
var Cross_Sellected_y;

var Ball_Sellected_x;
var Ball_Sellected_y;


function ClearCell(x, y){
  board[x][y] = 0;
  cell = document.getElementById("c" + x + y)
  cell.innerHTML = "";
}

function ClearBoard(){

  for(i=0; i<3; i++)
    for(j=0; i<3; i++){
      ClearCell(i, j);
    }
}

function PaintCell(x, y){
  cell = document.getElementById("c" + x + y);
  cell.innerHTML = "<img src="+ turn +".gif></img>";

  if(turn = "ball"){
    board[x][y] = 1;
    Ball_Sellected_x = x;
    Ball_Sellected_y = y;
  }
  else{
    board[x][y] = 2;
    Cross_Sellected_x = x;
    Cross_Sellected_y = y;
  }

  if(turn == "ball") turn = "cross";
  else turn = "ball;"

}

function autoplay(){

  for(i=0; i<3; i++)
    board[i] = new Array(3);
  turn = "cross";

  Cross_Sellected_x = 4;
  Cross_Sellected_y = 4;

  Ball_Sellected_x = 4;
  Ball_Sellected_y = 4;

  ClearBoard();
  SearchMove();


}

autoplay();
