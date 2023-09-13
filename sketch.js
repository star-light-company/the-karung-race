let pemain1, pemain2
let img, imgLaki, imgWanita;
let sfxLoncat, musik;

function preload() {
  img = loadImage('./image/lapang.jpeg')
  imgLaki = loadImage('./image/pemain.png')
  imgWanita = loadImage('./image/pemain.png')
  sfxLoncat = loadSound("./sounds/loncat.mp3")
  musik = loadSound("./sounds/musik.mp3")
}

function setup() {
  createCanvas(800, 600);

  pemain1 = new pemain(50, 320, "laki")
  pemain2 = new pemain(50, height-170, "wanita")
  
  musik.play()
}


function draw() {
  image(img,0,0,width,height)
  
  pemain1.tampilkan()
  pemain2.tampilkan()
  
  pemain1.cekfinish()
  pemain2.cekfinish()
}

function keyPressed() {
  if(keyCode === LEFT_ARROW) {
    pemain1.maju()
    sfxLoncat.play()
  }
  else if(keyCode === RIGHT_ARROW){
    pemain2.maju()
    sfxLoncat.play()
  }
}