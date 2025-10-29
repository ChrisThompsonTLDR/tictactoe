const TicTacToe = require('../src/game');

function assert(condition, message) {
  if (!condition) {
    throw new Error(`Assertion failed: ${message}`);
  }
}

function testInitialState() {
  console.log('Testing initial state...');
  const game = new TicTacToe();
  
  assert(game.getCurrentPlayer() === 'X', 'Initial player should be X');
  assert(game.isGameOver() === false, 'Game should not be over initially');
  assert(game.getWinner() === null, 'Winner should be null initially');
  assert(game.getBoard().every(cell => cell === null), 'Board should be empty initially');
  
  console.log('✓ Initial state test passed');
}

function testValidMove() {
  console.log('Testing valid move...');
  const game = new TicTacToe();
  
  const result = game.makeMove(0);
  assert(result.success === true, 'Valid move should succeed');
  assert(game.getBoard()[0] === 'X', 'Position 0 should be X');
  assert(game.getCurrentPlayer() === 'O', 'Current player should switch to O');
  
  console.log('✓ Valid move test passed');
}

function testInvalidMove() {
  console.log('Testing invalid move...');
  const game = new TicTacToe();
  
  game.makeMove(0);
  const result = game.makeMove(0);
  assert(result.success === false, 'Move on occupied position should fail');
  
  const outOfBounds = game.makeMove(9);
  assert(outOfBounds.success === false, 'Out of bounds move should fail');
  
  console.log('✓ Invalid move test passed');
}

function testWinConditionRow() {
  console.log('Testing win condition (row)...');
  const game = new TicTacToe();
  
  game.makeMove(0); // X
  game.makeMove(3); // O
  game.makeMove(1); // X
  game.makeMove(4); // O
  const result = game.makeMove(2); // X wins
  
  assert(result.gameOver === true, 'Game should be over');
  assert(result.winner === 'X', 'X should be the winner');
  assert(game.isGameOver() === true, 'Game should be marked as over');
  
  console.log('✓ Win condition (row) test passed');
}

function testWinConditionColumn() {
  console.log('Testing win condition (column)...');
  const game = new TicTacToe();
  
  game.makeMove(0); // X
  game.makeMove(1); // O
  game.makeMove(3); // X
  game.makeMove(2); // O
  const result = game.makeMove(6); // X wins
  
  assert(result.gameOver === true, 'Game should be over');
  assert(result.winner === 'X', 'X should be the winner');
  
  console.log('✓ Win condition (column) test passed');
}

function testWinConditionDiagonal() {
  console.log('Testing win condition (diagonal)...');
  const game = new TicTacToe();
  
  game.makeMove(0); // X
  game.makeMove(1); // O
  game.makeMove(4); // X
  game.makeMove(2); // O
  const result = game.makeMove(8); // X wins
  
  assert(result.gameOver === true, 'Game should be over');
  assert(result.winner === 'X', 'X should be the winner');
  
  console.log('✓ Win condition (diagonal) test passed');
}

function testDrawCondition() {
  console.log('Testing draw condition...');
  const game = new TicTacToe();
  
  // Create a draw scenario
  game.makeMove(0); // X
  game.makeMove(1); // O
  game.makeMove(2); // X
  game.makeMove(4); // O
  game.makeMove(3); // X
  game.makeMove(5); // O
  game.makeMove(7); // X
  game.makeMove(6); // O
  const result = game.makeMove(8); // X - draw
  
  assert(result.gameOver === true, 'Game should be over');
  assert(result.winner === null, 'Winner should be null for draw');
  
  console.log('✓ Draw condition test passed');
}

function testResetGame() {
  console.log('Testing game reset...');
  const game = new TicTacToe();
  
  game.makeMove(0);
  game.makeMove(1);
  game.reset();
  
  assert(game.getCurrentPlayer() === 'X', 'Player should reset to X');
  assert(game.isGameOver() === false, 'Game should not be over after reset');
  assert(game.getBoard().every(cell => cell === null), 'Board should be empty after reset');
  
  console.log('✓ Reset game test passed');
}

function testMoveAfterGameOver() {
  console.log('Testing move after game over...');
  const game = new TicTacToe();
  
  game.makeMove(0); // X
  game.makeMove(3); // O
  game.makeMove(1); // X
  game.makeMove(4); // O
  game.makeMove(2); // X wins
  
  const result = game.makeMove(5);
  assert(result.success === false, 'Move after game over should fail');
  
  console.log('✓ Move after game over test passed');
}

function runTests() {
  console.log('\n=== Running TicTacToe Tests ===\n');
  
  try {
    testInitialState();
    testValidMove();
    testInvalidMove();
    testWinConditionRow();
    testWinConditionColumn();
    testWinConditionDiagonal();
    testDrawCondition();
    testResetGame();
    testMoveAfterGameOver();
    
    console.log('\n=== All tests passed! ===\n');
  } catch (error) {
    console.error('\n=== Test failed! ===');
    console.error(error.message);
    process.exit(1);
  }
}

runTests();
