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

export const setBoardValue = (board, coordinates, value) => {
  let x = coordinates[0];
  let y = coordinates[1];
  board[x][y] = value;
  return board;
};
