/**
 * Base Player interface for TicTacToe
 * This abstraction allows for different player implementations
 * including human players and AI/LLM players
 */
class Player {
  constructor(symbol) {
    this.symbol = symbol;
  }

  async getMove(game) {
    throw new Error('getMove must be implemented by subclass');
  }
}

module.exports = Player;
