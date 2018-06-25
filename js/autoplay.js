var board = new Array(3);

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
  cell.innerHTML = "<img src=ball.gif></img>";
}

function autoplay(){

  for(i=0; i<3; i++)
    board[i] = new Array(3);

  ClearBoard();

}

autoplay();
