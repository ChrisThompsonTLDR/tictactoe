#!/usr/bin/env node

const readline = require('readline');
const { GameController, HumanPlayer, LLMPlayer } = require('../src/index');

async function selectGameMode() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    console.log('\n=== Tic-Tac-Toe Game ===\n');
    console.log('Select game mode:');
    console.log('1. Hot-seat (2 human players)');
    console.log('2. Play against LLM (placeholder/demo)');
    console.log('3. Exit\n');
    
    rl.question('Enter your choice (1-3): ', (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function playAgain() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question('\nPlay again? (y/n): ', (answer) => {
      rl.close();
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

async function main() {
  let keepPlaying = true;

  while (keepPlaying) {
    const mode = await selectGameMode();

    if (mode === '1') {
      const player1 = new HumanPlayer('X');
      const player2 = new HumanPlayer('O');
      const controller = new GameController(player1, player2);
      await controller.playGame();
    } else if (mode === '2') {
      const player1 = new HumanPlayer('X');
      const player2 = new LLMPlayer('O');
      console.log('\nNote: LLM player is currently a placeholder with random moves.\n');
      const controller = new GameController(player1, player2);
      await controller.playGame();
    } else if (mode === '3') {
      console.log('\nThanks for playing!\n');
      process.exit(0);
    } else {
      console.log('\nInvalid choice. Please try again.\n');
      continue;
    }

    keepPlaying = await playAgain();
  }

  console.log('\nThanks for playing!\n');
  process.exit(0);
}

main().catch(error => {
  console.error('An error occurred:', error);
  process.exit(1);
});
