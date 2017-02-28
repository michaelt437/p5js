var count = 75;
var org = [];
function setup() {
    createCanvas(windowWidth,500);
    for(var i = 0; i < count; i++){
        org[i] = new Organism();
    }
}

function draw() {
    // background(112,2,112);
    for(var i = 0; i < org.length; i++){
        org[i].move();
        if(org[i].y > (height + org[i].radius)){
            org[i].y = 0 - org[i].radius;
        }
        if(org[i].x > (width + org[i].radius)){
            org[i].x = 0 - org[i].radius;
        }
        org[i].display();
    }

}

function Organism(){
    this.size = random(15, 70);
    this.radius = this.size/2;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.changeRate = .3;
    this.alpha = 0;
    this.x = random(0, width);
    this.y = random(0, height);

    this.move = function() {
        this.x += (noise(this.x*(random(-100,100)), this.y*(random(-100,100)), frameCount*.025) - .45) * 20;
        this.y += (noise(frameCount*.025, this.x*(random(-100,100)), this.y*(random(-100,100))) - .45) * 20;
        this.b -= this.changeRate;
        this.g -= this.changeRate;

    }

    this.display = function(){
        stroke(0);
        fill(this.r,this.g,this.b);
        ellipse(this.x, this.y, this.size, this.size);
    };
}
