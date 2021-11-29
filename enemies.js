function Enemy(x, y, speed, image) {
  Phaser.Sprite.call(this, game, x, y, image);
  game.add.existing(this);
  this.size = 40;
  this.anchor.setTo(0.5, 0.5)
  this.animations.add('walk');
  this.animations.play('walk', 8, true);
  this.speed = speed;



};
Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.update = function(){
    this.x -= this.speed;
    //hit player
    if (checkCollision(this, player))
    {
      game.background.tint = 0xFF0000
      gameOver();
      player.destroy();
      game.gameOverText.visible = true;
    }

    if(this.x < 0)
    {
      this.x = 1000;
    }


/* ################################################################################################################
                                    ZIG ZAG Enemy
########################################################################################################################
*/
function ZigZagger(x, y, speed)
{
  Enemy.call(this,x, y, speed, 'zigZagEnemy');
  ZigZagger.prototype = Object.create(Enemy.prototype);
}
  ZigZagger.prototype = Object.create(Enemy.prototype);



};
