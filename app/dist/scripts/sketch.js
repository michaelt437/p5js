var count = 60;
var org = [];
function setup() {
    createCanvas(windowWidth-20,800);
    // background(0,0,0);
    for(var i = 0; i < count; i++){
        org[i] = new Organism();
    }
}

function draw() {
    // background(255);
    for(var i = 0; i < org.length; i++){
        org[i].move();
        if(org[i].y > (height + org[i].radius)){
            // org[i].y = 0 - org[i].radius;
            org.splice(i, 1);
            continue;
        }
        if(org[i].x > (width + org[i].radius)){
            // org[i].x = 0 - org[i].radius;
            org.splice(i, 1);
            continue;
        }
        org[i].display();
    }
    // for(var i=0; i < org.length;){
    //     if(org[i].y > (height + org[i].radius)){
    //         org.splice(i,1);
    //         console.log(org);
    //     }else{
    //         org[i].move();
    //         org[i].display();
    //         i++;
    //     }
    // }

}

function Organism(){
    this.size = random(15, 70);
    this.radius = this.size/2;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.changeRate = .3;
    this.alpha = 0;
    this.x = random(-10, width - 200);
    this.y = random(-10, height - 200);

    this.move = function() {
        // this.x += random(-10, 10, 5);
        // this.y += random(-10, 10, 5);
        this.x += (noise(this.x*(random(-100,100)), this.y*(random(-100,100)), frameCount*.025) - .45) * 30;
        this.y += (noise(this.x*(random(-100,100)), frameCount*.025, this.y*(random(-100,100))) - .45) * 30;
        this.b -= this.changeRate * 2;
        this.g -= this.changeRate * 1.324;

    }

    this.display = function(){
        stroke(0);
        fill(this.r,this.g,this.b);
        ellipse(this.x, this.y, this.size, this.size);
    };
}
