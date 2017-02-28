var count = 50;
var org = [];
function setup() {
    createCanvas(1000,400);
    for(var i = 0; i < count; i++){
        org[i] = new Organism();
    }
}

function draw() {
    // background(112,2,112);
    for(var i = 0; i < org.length; i++){
        org[i].move();
        console.log(org[i].x, org[i].y);
        if(org[i].y > (height + ((org[i].size)/2))){
            console.log('greater than 100');
            org[i].y = 0;
            console.log(org[i].y, 'should be at top');
        }
        org[i].display();
    }

}

function Organism(){
    this.size = random(15, 50);
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.x = random(0, 1000);
    this.y = random(0, 400);

    this.move = function() {
        this.x += (noise(this.x*(random(-100,100)), this.y*(random(-100,100)), frameCount*.025) - .45) * 20;
        this.y += (noise(frameCount*.025, this.x*(random(-100,100)), this.y*(random(-100,100))) - .45) * 20;
        this.g -= .3;
        this.b -= .3;

    }

    this.display = function(){
        fill(this.r,this.g,this.b);
        ellipse(this.x, this.y, this.size, this.size);
    };
}
