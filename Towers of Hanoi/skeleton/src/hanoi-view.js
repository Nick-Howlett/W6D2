
class View{
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.clicked = null;
    let $towers = this.setupTowers();
    $el.append($towers);
    this.render();
    this.bindEvents();
    
  }

  bindEvents(){
    this.$el.on("click", ".tower", e =>{
      const $tower = $(e.currentTarget)
      this.clickTower($tower);
    });
  }

  clickTower($tower){
    if(this.clicked){
      let $fromTower = this.clicked;
      this.game.move($fromTower.attr("data"), $tower.attr("data"));
      this.clicked.removeClass("selected");
      this.clicked = null;
      this.render();
      if(this.game.isWon()){
        setTimeout(()=>{
          alert("YOU ARE AWESOME");
        }, 500);
      }
    }
    else{
      this.clicked = $tower;
      $tower.addClass("selected");
    }
  }


  
  setupTowers(){
    let $towers = $('<ul></ul>');
    $towers.addClass("towers");
    for(let i=0; i< 3; i++) {
      let $tower = $('<ul></ul>');
      let $towerli = $('<li></li>');
      $tower.addClass("tower");
      $tower.attr("id",`tower${i+1}`);
      $tower.attr("data", i);
      if (i===2) {
        for(let j=0; j< 3; j++) {
          let $block = $('<li></li>');
          $block.addClass("block");
          $block.attr("id",`block${j+1}`);
          $tower.append($block);
        }
      }
      $towerli.append($tower);
      $towers.append($towerli);
    }

    return $towers;
  }

  render(){
    const towers = this.game.towers;
    for(let i=0;i < towers.length;i++){
      for(let j=0; j < towers[i].length; j++){
        let num = towers[i][j];
        let $block = $(`#block${num}`);
        let $tower = $(`#tower${i+1}`);
        $tower.append($block);
      }
    }
  }
}

module.exports = View;
