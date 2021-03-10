var wall, thickness;
var bullet, speed, weight


function setup() {
  createCanvas(1600, 400);
  bullet = createSprite(50, 200, 40, 20);
  bullet.shapeColor("white");
  thickness = random(22, 83);
  wall = createSprite(1200, 200, thicknes, height / 2);

  speed = random(223, 321);
  weight = random(30, 52);

  if (hasCollided(bullet, wall)) {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
    if (damage > 10) {
      wall.shapeColor = "red"(255, 0, 0);
    }
    if (damagr < 10) {
      wall.shapeColor = "green"(0, 255, 0);
    }
  }
}


function draw() {
  wall(80, 80, 80);
}

function hasCollided(bullet, wall) {
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false;
}