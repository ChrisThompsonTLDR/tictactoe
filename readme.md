# Tic-Tac-Toe CLI Game

A command-line interface (CLI) hot-seat tic-tac-toe game built with Node.js. Features support for two-player hot-seat gameplay and includes a scaffold for future LLM (Language Learning Model) API integration.

## Features

- 🎮 Hot-seat gameplay for 2 human players
- 🤖 Placeholder/shim for future LLM player integration
- 🎯 Clean, modular architecture with player abstraction
- ✅ Comprehensive game logic tests
- 📦 Packaged as an NPM CLI tool

## Installation

```bash
npm install
```

## Usage

### Run the game

```bash
npm start
```

Or if installed globally:

```bash
tictactoe
```

### Game Modes

1. **Hot-seat mode**: Two human players take turns on the same terminal
2. **LLM mode (Demo)**: Play against a placeholder LLM player (currently makes random moves)

### How to Play

- The board positions are numbered 0-8:
  ```
   0 | 1 | 2
  -----------
   3 | 4 | 5
  -----------
   6 | 7 | 8
  ```
- Players take turns entering the position number where they want to place their mark (X or O)
- First player to get three in a row (horizontally, vertically, or diagonally) wins
- If all positions are filled without a winner, the game is a draw

## Development

### Run tests

```bash
npm test
```

### Project Structure

```
tictactoe/
├── bin/
│   └── tictactoe.js          # CLI entry point
├── src/
│   ├── game.js               # Core game logic
│   ├── player.js             # Base player interface
│   ├── humanPlayer.js        # Human player implementation
│   ├── llmPlayer.js          # LLM player stub/shim
│   ├── gameController.js     # Game flow controller
│   └── index.js              # Module exports
├── tests/
│   └── game.test.js          # Game logic tests
├── package.json
└── readme.md
```

## Future LLM Integration

The game includes a player abstraction layer that makes it easy to add LLM-powered opponents. The `LLMPlayer` class in `src/llmPlayer.js` is a scaffold that demonstrates the structure needed for API integration.

To implement a real LLM player:

1. Configure API credentials in the `LLMPlayer` constructor
2. Implement the API call in the `getMove()` method
3. Parse the LLM response to extract the move position

Example API integration structure is commented in the code.

## License

ISC
