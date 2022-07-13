var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //criar um plano de fundo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // criar um arco para a flecha
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
}

function draw() {
 background(0);
  // mover o chão
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //mover o arco
  bow.y = World.mouseY
  
   // soltar a flecha quando a tecla espaço for pressionada
  if (keyDown("space")) {
    createArrow();
  }
  
  //mude o valor do balão aleatório para 4
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
   switch(select_balloon){
    case 1: //chamar o balãovermelho
    break; createred_balloonImage();
    case 2://chamar o balãoazul
    break; createblue_balloonImage();
    case 3://chamar o balãoverde
    break;creategreen_balloonImage();
    case 4://chamar o balãorosa
    break;createpink_balloonImage();

  }}
  
  drawSprites();
}


// criar flechas para o arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -37;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;

}

function blueBalloon() {
  //crieSprite para o balão 
  blueBalloon = createSprite(random(50,350),40,10,10);
  //adicioneImagem para o balão
  blueBalloon.addImage(blue_balloonImage);
  //adicione velocidade para fazer o balão se mover
  blueBalloon.velocityY = 2;
  //mudar a dimensão do balão
  blueBalloon.scale = 0.8;
  //atribua tempo de vida ao balão
  blueBalloon.lifetime = 150;
}
function greenBalloon() {
  //crieSprite para o balão
  greenBalloon = createSprite(random(50,350),40,10,10);
  //adicioneImagem para o balão
  greenBalloon.addImage(green_balloonImage);
  //adicione velocidade para fazer o balão se mover
  greenBalloon.velocityY = 2;
  //mudar a dimensão do balão
  greenBalloon.scale = 0.08;
  //atribua tempo de vida ao balão
  greenBalloon.lifetime = 150;
}
function pinkBalloon() {
  //crieSprite para o balão
  pinkBalloon = createSprite(random(50,350),40,10,10);
  //adicioneImagem para o balão
  pinkBalloon.addImage(pink_balloonImage);
  //adicione velocidade para fazer o balão se mover
pinkBalloon.velocityY = 2
  //mudar a dimensão do balão
pinkBalloon.scale = 0.8;
  //atribua tempo de vida ao balão
pinkBalloon.lifetime = 150;
}