




//This first line creates our game object.
var game = new Phaser.Game(960, 640, Phaser.AUTO, 'game', {preload: preload, create: create, update: update});
var player;
//Load all of your textures and sounds
function preload() {

  game.load.image('background','assets/backgrounds/background4.png');
  game.load.spritesheet('player', 'assets/players/robot_orange.png', 128, 114);
  game.load.spritesheet('enemy1','assets/enemies/octopus.png', 114, 114);
  game.load.spritesheet('enemy2','assets/enemies/ghost.png', 114, 114);
  game.load.spritesheet('enemy3','assets/enemies/mine.png', 114, 114);
  game.load.spritesheet('ZigZagEnemy','assets/enemies/bat.png', 114, 114);
  game.load.bitmapFont('font','assets/fonts/font1.png', 'assets/fonts/font1.fnt');
  game.load.image('coin','assets/pickups/coin5.png', 114, 114);


}

//Do all of your initial setup
function create() {

  game.scale.setUserScale(window.innerWidth/960, window.innerHeight/640);
  game.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
  game.background = game.add.tileSprite(0, 0, 960, 640, 'background');
  player = game.add.sprite(100, 200, 'player');
  player.size = 40;
  player.anchor.setTo(0.5, 0.5);


  player.update = function() {
    game.scoreText.text = 'Score:' + game.score.toString()


    if (game.input.activePointer.isDown)
    { if(this.y > 60)
      {
        this.y -= 4;
      }

   this.frame = 0; }
  else {
    if (this.y < 580)
    {
      this.y += 4;
    }

    this.frame = 1;
  }



  };
spawnEnemy();
spawnEnemy();
spawnEnemy();
spawnEnemy();
spawnCoins();
var zz = new ZigZagger (500, 300,8);

game.gameOverText = game.add.bitmapText(game.world.centerX, game.world.centerY, 'font', 'Seriosly, you lost?? \n Game Over \n Refresh To Restart');
game.gameOverText.anchor.setTo(0.5, 0.5);
game.gameOverText.align = 'center';
game.gameOverText.visible = false;
game.score = 0;
increaseScore();
//high score
game.highScore = 0;
game.highScoreText = game.add.bitmapText(25, 60, 'font', 'Best Score: ' + game.highScore.toString());

game.scoreText = game.add.bitmapText(25, 25, 'font', 'Nothing!!!');
game.scoreText.text = game.score.toString();
game.coinScore = 0;
game.coinScoreText = game.add.bitmapText(960-25, 25, 'font', 'ARG! This is NOTHING!!!!!!!!');
game.coinScoreText.anchor.setTo(1,0);






}





//Write all of your continuous game logic here
function update() {
  checktext();

  game.background.tilePosition.x -= 24;
  game.coinScoreText.text = 'coins: ' + game.coinScore.toString();

}

function checkCollision(object1, object2) {
  var distance = Phaser.Math.distance(object1.x, object1.y, object2.x, object2.y);

  if (distance <=object1.size + object2.size)
  {
    return true;
    gameOver();




}
};
