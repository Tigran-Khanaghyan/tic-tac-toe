export const makeMove = (board, sign) => {
  if (!board[1][1]) {
    board[1][1] = sign;
    return board
  } else {
    for (let row of board) {
      for (let cell of row) {
        if (!cell) {
          cell = sign;

          return board;
        }
      }
    }
  }
};
