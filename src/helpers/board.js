export const signs = [];
export const scores = { score1: 0, score2: 0 };

export const createBoard = (value = null) => {
  let board = [];
  for (let i = 0; i < 3; ++i) {
    let row = [];
    for (let j = 0; j < 3; ++j) {
      row.push(value);
    }
    board.push(row);
  }
  return board;
};

export const board = createBoard();

export const setBoardCellValue = (board, coordinates, value) => {
  let x = coordinates[0];
  let y = coordinates[1];
  board[x][y] = value;
  return board;
};

export const getBoardCellValue = (board, coordinates) => {
  let x = coordinates[0];
  let y = coordinates[1];
  let value = board[x][y];
  return value;
};

const checkBoardRows = (board) => {
  for (let row of board) {
    let count = 0;
    for (let item of row) {
      if (item === row[0]) {
        ++count;
      }
      if (count === board.length) {
        return item;
      }
    }
  }
  return 0;
};

const checkBoardColumns = (board) => {
  for (let n = 0; n < board.length; ++n) {
    let column = [];
    let tempItem = board[0][n];
    if (tempItem) {
      for (let i = 0; i < board.length; ++i) {
        if (tempItem === board[i][n]) column.push(board[i][n]);
        if (column.length === board.length) return tempItem;
      }
    }
  }
  return 0;
};

const checkBoardDiagonal = (board) => {
  let firstDiagonal = [];
  let secondDiagonal = [];
  let centeredItem = board[1][1];
  if (centeredItem) {
    for (let i = 0; i < board.length; ++i) {
      for (let j = 0; j < board.length; ++j) {
        if (i === j && board[i][j] === centeredItem) {
          firstDiagonal.push(board[i][j]);
          if (firstDiagonal.length === board.length) return centeredItem;
        }
        if (j === board.length - i && board[i][j] === centeredItem) {
          secondDiagonal.push(board[i][j]);
          if (secondDiagonal.length === board.length) return centeredItem;
        }
      }
    }
  }
  return 0;
};

export const findWinner = (board) => {
  let winnerSign =
    checkBoardRows(board) ||
    checkBoardColumns(board) ||
    checkBoardDiagonal(board);

  return winnerSign;
};

export const counter = (board) => {
  let count = 0;
  for (let row of board) {
    for (let cell of row) {
      if (cell) {
        ++count;
      }
    }
  }
  return count;
};

export const scoresHandler = (signs, arr, scores) => {
  if (signs.length) {
    if (signs[0][0] === arr[0]) {
      ++scores.score1
    } else {
      ++scores.score2;
    }
  }
};
