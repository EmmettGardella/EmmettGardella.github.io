let list = []

function setup() {
  createCanvas(550, 550);
  
  let x = random(-5,5)
  let y = random(-5,5)
  
  button = createButton('Bubble');
  button.position(0,0);
  button.mousePressed(create);
  
  button2 = createButton('Clear');
  button2.position(52,0);
  button2.mousePressed(reset);
  
}

function draw() {
  background(255, 35);
  
  for (i = 0; i < list.length; i++) {
    fill(list[i].r, list[i].g, list[i].b);
    ellipse(list[i].x, list[i].y, list[i].radius, list[i].radius);
    list[i].x = list[i].x + list[i].xvel
    if (list[i].x + list[i].radius/2 >= 550 || list[i].x - list[i].radius/2 <= 0) {
      list[i].xvel = -list[i].xvel
    }
    list[i].y = list[i].y + list[i].yvel
    if (list[i].y + list[i].radius/2 >= 550 || list[i].y - list[i].radius/2 <= 0) {
      list[i].yvel = -list[i].yvel
    }
  }
}

function create() {
  list.push(new Bubble(random(25, 525), random(25, 525), random(20,50), random(-5,5), random(-5,5), random(255), random(255), random(255)))
}

function reset() {
  list = [];
}

function mousePressed() {
  for (let z = 0; z < list.length; z++) {
    let d = dist(mouseX, mouseY, list[z].x, list[z].y);
    if (d < list[z].size/2) {
      list.splice(i, 1);
    }
  }
}
