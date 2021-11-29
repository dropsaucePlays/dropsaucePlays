function Coin(x, y) {
  Phaser.Sprite.call(this, game, x, y,'coin');
  game.add.existing(this);
  this.size = 16;
  this.anchor.setTo(0.5, 0.5);

}
Coin.prototype = Object.create(Phaser.Sprite.prototype);
Coin.prototype.update = function() {
  this.x -=4;
  if (checkCollision(this, player))
{
  this.destroy();
  game.coinScore++;
}

}
game.coinSpawner = {};
game.coinSpawner.zigzag = function (x, y) {
  var coin1 = new Coin(x, y);
  var coin2 = new Coin(x + 50, y - 50);
  var coin3 = new Coin(x + 100, y - 100);
  var coin4 = new Coin(x + 151, y);
  var coin5 = new Coin(x + 200, y + 50);
  var coin6 = new Coin(x + 300, y + 400);


};

game.coinSpawner.diamond = function (x, y) {
  var coin1 = new Coin(x, y);
  var coin2 = new Coin(x + 50, y + 50);
  var coin3 = new Coin(x + 100, y  -50);
  var coin4 = new Coin(x + 100, y + 100 );
  var coin5 = new Coin(x, y);
  var coin6 = new Coin(x + 100, y);
  var coin7 = new Coin(x + 200, y);
  var coin8 = new Coin(x + 149, y - 150);



}
