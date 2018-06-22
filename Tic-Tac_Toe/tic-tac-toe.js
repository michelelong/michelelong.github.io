let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];

const winCombos = [
  [0, 1, 2], // Top row 0
  [3, 4, 5], // Middle row 1
  [6, 7, 8], // Bottom row 2
  [0, 3, 6], // Column 1 3
  [1, 4, 7], // Column 2 4
  [2, 5, 8], // Column 3 5
  [0, 4, 8], // Back diagonal 6
  [2, 4, 6] // Forward diagonal 7
];

validMove = function(board, index) {
  if (board[index] == " ") return true;
};

full = function(board) {
  if (board.includes(" ")) {
    return false;
  } else {
    return true;
  }
};

draw = function(board) {
  if (full(board) && !won(board)) {
    info.textContent = `There was no winner!`;
    document.removeEventListener("click", play);
    return true;
  } else {
    return false;
  }
};

function testWin(value, index, array) {
  return (
    index === 0 || (value === array[index - 1] && array[index - 1] !== " ")
  );
}

won = function(board) {
  winCombos.forEach(function(row) {
    let winRow = [];
    row.forEach(function(index) {
      winRow.push(board[index]);
    });
    if (winRow.every(testWin)) {
      info.textContent = `${winRow[0]} has won the game!`;
      document.removeEventListener("click", play);
      return true;
    }
    return winRow;
  });
};

npcTurn = function(board) {
  let randomnumber = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
  let npcPosition = `index${randomnumber}`;
  let npcMove = document.getElementById(npcPosition);
  if (full(board) || draw(board)) {
    return;
  } else if (validMove(board, randomnumber)) {
    npcMove.textContent = "O";
    board[randomnumber] = "O";
  } else {
    npcTurn(board);
  }
  draw(board);
  won(board);
};

function play() {
  const info = document.getElementById("info");
  info.textContent = "";
  let position = document.getElementById(event.target.id) || "";
  let index = position.textContent - 1;

  if (validMove(board, index)) {
    position.textContent = "X";
    board[index] = "X";
  } else {
    info.textContent = "Move is invalid. Try again!";
    return;
  }
  if (!full(board) && !won(board)) {
    npcTurn(board);
  }
  draw(board);
  won(board);
}

document.addEventListener("click", play);
