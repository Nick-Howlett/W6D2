
const View = require('./ttt-view.js');
const Game = require('../../solution/game.js');

  $(() => {
    // Your code here
    const game = new Game();
    const $rootEl = $('.ttt');
    const view = new View(game,$rootEl);
    
  });
