const cells = document.querySelectorAll('.cell');
let currentPlayer = 'X';
const button = document.getElementById("resetButton")
let counter = 0;
let gameOn = true;


cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (!cell.textContent && gameOn) {
            cell.textContent = currentPlayer;
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.querySelector('h1').textContent = currentPlayer + "'s turn";
            counter++;

            if (counter > 4) { 
                if (winGame(cells)) {
                    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                    document.querySelector('h1').textContent = currentPlayer + "'s WIN!";
                    gameOn = false;
                } else if (counter === 9) {
                    document.querySelector('h1').textContent = "Draw!";
                    gameOn = false;
                }
            }
        }
    });
});

function resetGame() {
    cells.forEach(cell => {
    cell.textContent = '';
    });
currentPlayer = 'X';
document.querySelector('h1').textContent = currentPlayer + "'s turn";
counter = 0;
gameOn = true;
}

button.addEventListener('click', () => {
    resetGame();
  });


  function winGame(cells) {
  let wCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  for (let wComb of wCombs) {
    if (
        cells[wComb[0]].textContent == cells[wComb[1]].textContent &&
        cells[wComb[1]].textContent == cells[wComb[2]].textContent &&
        cells[wComb[0]].textContent != ''
    ){
        return true;
    }
  }
  return false;
  }