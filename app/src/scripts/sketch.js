var count = 30;
var org = [];
function setup() {
    createCanvas(displayWidth,displayHeight);
    for(int i = 0; i < count; i++){
        org[i] = new Organism();
    }
}

function draw() {
    for(int i = 0; i < org.length; i++){
        org[i].display();
    }
    console.log(org);
}

function Organism(){
    this.size = random(5, 10);
    this.x = random(0, displayWidth);
    this.y = random(0, displayHeight);

    this.display = function(){
        ellipse(this.x, this.y, this.size, this.size);
    };
}
