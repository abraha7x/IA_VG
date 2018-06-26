var board = new Array(3);
var turn;

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
  }
  else{
    board[x][y] = 2;
  }

  if(turn == "ball") turn = "cross";
  else turn = "ball;"

}

function autoplay(){

  for(i=0; i<3; i++)
    board[i] = new Array(3);
  turn = "ball";

  ClearBoard();
  PaintCell(1,2);

}

autoplay();
