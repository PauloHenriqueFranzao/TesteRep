function setup() {
    createCanvas(700, 700);
    background("white");
  }
  
  function draw() {
    
    stroke("red");
    fill("black");
    
    //console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 34,34);
    }
  
  }