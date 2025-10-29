const readline = require('readline');
const Player = require('./player');

/**
 * Human player implementation for hot-seat gameplay
 */
class HumanPlayer extends Player {
  constructor(symbol) {
    super(symbol);
  }

  async getMove(game) {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise((resolve) => {
      rl.question(`Player ${this.symbol}, enter your move (0-8): `, (answer) => {
        rl.close();
        const move = parseInt(answer, 10);
        resolve(isNaN(move) ? -1 : move);
      });
    });
  }
}

module.exports = HumanPlayer;
