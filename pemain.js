class pemain {
  constructor(x, y, nama) {
    this.d = 50
    this.x = x
    this.y = y
    this.nama = nama
    this.loncat = 50
  }
  
  tampilkan(){
    if(this.nama === "laki") {
      image(imgLaki, this.x, this.y)
    }
    else {
      image(imgWanita, this.x, this.y)
    }
  }
  maju(){
    this.x += this.loncat
  }
  cekfinish(){
    if(this.x > width - 100) {
      fill(255)
      textSize(69)
      textWidth(5)
      textFont('Comic Sans MS')
      textAlign(CENTER)
      text('FINISH', width/2, height/2)
      noLoop()
      musik.stop()
      sfxLoncat.stop()
    }
  }
}
