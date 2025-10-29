class TicTacToe {
  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
    this.gameOver = false;
  }

  reset() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
    this.gameOver = false;
  }

  makeMove(position) {
    if (this.gameOver) {
      return { success: false, message: 'Game is over' };
    }

    if (position < 0 || position > 8) {
      return { success: false, message: 'Invalid position. Choose 0-8.' };
    }

    if (this.board[position] !== null) {
      return { success: false, message: 'Position already taken' };
    }

    this.board[position] = this.currentPlayer;
    
    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
      this.gameOver = true;
      return { success: true, message: `Player ${this.currentPlayer} wins!`, gameOver: true, winner: this.currentPlayer };
    }

    if (this.checkDraw()) {
      this.gameOver = true;
      return { success: true, message: "It's a draw!", gameOver: true, winner: null };
    }

    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    return { success: true, message: 'Move made successfully', gameOver: false };
  }

  checkWinner() {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]             // diagonals
    ];

    return winPatterns.some(pattern => {
      const [a, b, c] = pattern;
      return this.board[a] !== null &&
             this.board[a] === this.board[b] &&
             this.board[a] === this.board[c];
    });
  }

  checkDraw() {
    return this.board.every(cell => cell !== null);
  }

  getBoard() {
    return [...this.board];
  }

  getBoardDisplay() {
    const display = this.board.map((cell, index) => cell || index);
    return `
 ${display[0]} | ${display[1]} | ${display[2]}
-----------
 ${display[3]} | ${display[4]} | ${display[5]}
-----------
 ${display[6]} | ${display[7]} | ${display[8]}
`;
  }

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  isGameOver() {
    return this.gameOver;
  }

  getWinner() {
    return this.winner;
  }
}

module.exports = TicTacToe;
