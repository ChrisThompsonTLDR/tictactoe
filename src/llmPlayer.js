const Player = require('./player');

/**
 * LLM Player stub/shim for future API integration
 * This is a placeholder that demonstrates how an LLM player would be integrated
 */
class LLMPlayer extends Player {
  constructor(symbol, apiConfig = {}) {
    super(symbol);
    this.apiConfig = apiConfig;
    // Future: API endpoint, model name, API key, etc.
  }

  async getMove(game) {
    // TODO: Future implementation
    // This would make an API call to an LLM service with the board state
    // and receive a move suggestion
    
    // Example structure:
    // const response = await fetch(this.apiConfig.endpoint, {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${this.apiConfig.apiKey}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     board: game.getBoard(),
    //     player: this.symbol,
    //     prompt: 'Choose the best move for tic-tac-toe'
    //   })
    // });
    // const data = await response.json();
    // return data.move;

    // For now, return a random valid move as a placeholder
    const board = game.getBoard();
    const availableMoves = board
      .map((cell, index) => cell === null ? index : null)
      .filter(move => move !== null);
    
    if (availableMoves.length === 0) return -1;
    
    const randomMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];
    console.log(`[LLM Player - Placeholder] Selected move: ${randomMove}`);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    return randomMove;
  }
}

module.exports = LLMPlayer;
