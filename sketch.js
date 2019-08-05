function setup(){
    createCanvas(600,600);
}

let posX = 250;
let posY = 60;

let speedX = 1;
let speedY = 1;

let limit = 111.8;
function draw(){
    background(0);
    let dist = Math.sqrt(Math.pow(mouseX - posX,2)+Math.pow(mouseY-posY,2));
    if(dist <= 50){
        if(mouseIsPressed){
            fill(0,255,0);
        }else{
            fill(255,0,0);
        }
    }else{
        fill(255,0,0);
    }
    ellipse(posX,posY,100,100);
    if(posX >= 550 || posX <= 50){
        speedX *= -1.5;
        if(speedX > limit){
            speedX = limit;
        }
    
    }
    if(posY >= 550 || posY <= 50){
        speedY *= -1.5;
        if(speedY > limit){
            speedY = limit;
        }
    }
    posX += speedX;
    posY += speedY;
}