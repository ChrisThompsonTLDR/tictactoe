const TicTacToe = require('./game');
const HumanPlayer = require('./humanPlayer');
const LLMPlayer = require('./llmPlayer');

class GameController {
  constructor(player1, player2) {
    this.game = new TicTacToe();
    this.players = { 'X': player1, 'O': player2 };
  }

  async playGame() {
    console.log('\n=== Welcome to Tic-Tac-Toe ===\n');
    console.log('Board positions:');
    console.log(this.game.getBoardDisplay());
    console.log('\nStarting game...\n');

    while (!this.game.isGameOver()) {
      console.log(this.game.getBoardDisplay());
      
      const currentPlayer = this.players[this.game.getCurrentPlayer()];
      const move = await currentPlayer.getMove(this.game);
      
      const result = this.game.makeMove(move);
      
      if (!result.success) {
        console.log(`Error: ${result.message}`);
        continue;
      }

      if (result.gameOver) {
        console.log('\n' + this.game.getBoardDisplay());
        console.log(result.message);
        break;
      }
    }

    return this.game.getWinner();
  }

  reset() {
    this.game.reset();
  }
}

module.exports = GameController;
