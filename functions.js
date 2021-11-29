// random enemy spawner
function spawnEnemy(){
  var x = 1000;
  var y = game.rnd.between(50, 590);
  var speed = game.rnd.between(2, 11);
  var image = 'enemy' + game.rnd.between(1,3);
  var freshEnemy = new Enemy(x, y, speed, image);
}
function checkCollision(object1, object2) {
  var distance = Phaser.Math.distance(object1.x, object1.y, object2.x, object2.y);

  if (distance <=object1.size + object2.size)
  {
    return true;
  }
  else {
    return false;
  }
}

function gameOver() {
  game.background.tint = 0xFF0000;
  player.destroy();
  game.isGameOver = true;
  if (game.score < game.highScore)
  {
    game.highScore = game.score;
    game.highScoreText.text = 'Best Score' + game.highScore;
  }



}
function checktext() {
  if (game.score < game.highScore)
  {
    game.highScore = game.score;
    game.highScoreText.text = 'Best Score' + game.highScore;
  }

}

function increaseScore() {
  if (!game.isGameOver) {
    game.score ++;
  }

  console.log('working')
  game.time.events.add(256, increaseScore, this);

}
function spawnCoins() {
  var randomNumber = game.rnd.between(1,2);
  var randomY = game.rnd.between(100, 551);

  if (randomNumber === 1) {
    game.coinSpawner.zigzag(1000, randomY);

  }
  if (randomNumber === 2) {
    game.coinSpawner.zigzag(1000, randomY);

  }
  game.time.events.add(5000, spawnCoins, this);

}
