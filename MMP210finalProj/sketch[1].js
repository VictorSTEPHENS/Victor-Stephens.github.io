const cols = 7;
const rows = 7;
const w = 80;
const dw = 64;
const board = Array(7).fill().map(() => Array(7).fill(0));

let player = 1;
let playerPos;
let win = 0;

function setup() {
  createCanvas(cols*w, rows*w + w);
}

function hasWon() {
  for (let j = 0; j < rows; j++) {
  for (let i = 0; i <= cols-5; i++) {
  const test = board[j][i];
  if (test != 0) {
  let temp = true;
  for (let k = 0; k < 5; k++) {
  if (board[j][i+k] !== test) {
  temp = false;
}
}
    if (temp == true) {
    return true;
}
}
}
}
  
  for (let j = 0; j <= rows-5; j++) {
    for (let i = 0; i < cols; i++) {
      const test = board[j][i];
      if (test != 0) {
        let temp = true;
        for (let k = 0; k < 5; k++) {
          if (board[j+k][i] !== test) {
            temp = false;
}
}
        if (temp == true) {
          return true;
}
}
}
}
  

  for (let j = 0; j <= rows-5; j++) {
    for (let i = 0; i <= cols-5; i++) {
      const test = board[j][i];
      if (test != 0) {
        let temp = true;
        for (let k = 0; k < 5; k++) {
          if (board[j+k][i+k] !== test) {
            temp = false;
          }
        }
        if (temp == true) {
          return true;
}
}
}
}
  
  for (let j = 0; j <= rows-5; j++) {
    for (let i = 4; i < cols; i++) {
      const test = board[j][i];
      if (test != 0) {
        let temp = true;
        for (let k = 0; k < 5; k++) {
          if (board[j+k][i-k] !== test) {
            temp = false;
          }
        }
        if (temp == true) {
          return true;
}
}
}
}
  
  return false;
}

function draw() {
  background(0, 0, 0);
  
  playerPos = floor(mouseX/w)
  
  stroke(0);
  fill(255);
  rect(-1, -1, width+2, w);
  for (let j = 0; j < rows; j++) {
    for (let i = 0; i < cols; i++) {
      fill(255);
      if (board[j][i] == 1) {
        fill(0, 0, 255);
      } else if (board[j][i] == 2) {
        fill(255, 0, 0);
      }
      ellipse(i*w + w/2, j*w + 3*w/2, dw);
}
}
  
  stroke(102, 102, 0);
  for (let x = w; x < width; x += w) {
    line(x, w, x, height);
}
  
  stroke(0);
  if (player == 1) {
    fill(0, 0, 255);
} else if (player  == 2) {
    fill(255, 0, 0);
}
  ellipse((playerPos + 0.5) * w, w/2, dw);
  
  if (win != 0) {
    noStroke();
    fill(0);
    if (win == 1) {
      fill(0, 0, 255);
    } else if (win  == 2) {
      fill(255, 0, 0);
}
    textAlign(CENTER, CENTER);
    textSize(64);
    if (win == 4) {
      text("Victory!", width/2, w/2);
  } else if (win == 3) {
      text("It is a tie.", width/2, w/2);
} else {
      text(`${win > 1 ? 'Red' : 'Blue'} won!`, width/2, w/2);
}
    noLoop();
}
}

function mousePressed() {
  if (board[0][playerPos] != 0) {
    win = 4;
}
  
  board[0][playerPos] = player;
  let i = 0;
  while (true) {
    if (i >= rows-1) {
      break;
}
    if (board[i+1][playerPos] != 0) {
      break;
}
    [board[i+1][playerPos], board[i][playerPos]] = [board[i][playerPos], board[i+1][playerPos]];
    i++;
}
  
  if (hasWon()) {
    win = player;
}
  
  let tie = true;
  for (let j = 0; j < rows; j++) outer: {
    for (let i = 0; i < cols; i++) {
      if (board[j][i] == 0) {
        tie = false;
}
}
}
  
  if (tie) {
    win = 3;
}
  
  player = 3 - player;
}