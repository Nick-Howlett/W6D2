class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    let $ul = this.setupBoard;
    this.$el.append($ul);
    this.bindEvents();
  }


  bindEvents() {
    this.$el.on('click','li',e=> {
      const $li = $(e.target);
      this.makeMove($li);
    });

  }

  makeMove($square) {
    this.game.playMove($square.data("pos"));
    $square.css("background", "white");
    $square.text(this.game.currentPlayer);
    $square.addClass(this.game.currentPlayer);
    // console.log(this.game.winner);
    if (this.game.winner()) {
      setTimeout(()=> {
        alert(`Congratuations, player ${this.game.currentPlayer}!`)
      },1000);
    }
  }

  setupBoard() {
    const $ul = $('<ul></ul>');
    for(let i=0; i < 3;i++) {
      for(let j=0; j < 3; j++){
        const $li = $('<li></li>');
        $li.attr("class", "square");
        $li.data("pos", [i, j]);
        $ul.append($li);
      }
    }
    return $ul
  }
}

module.exports = View;
