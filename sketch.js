let pageNum = 1; //declare a variable to hold current page number (current state)
let numPages = 10; //declare a variable to hold total number of pages (states)

let stars = [];
let numStars = 300;



function setup() {
  createCanvas(850, 600);
  console.log(pageNum); 

  for (let i = 0; i < numStars; i++){
  stars[i] = [];
   stars[i][0] = random(0,width);
  stars[i][1] = random(0,height);
}
}
function draw() {
  
  if (pageNum == 1){
    background(30);
    stroke(355)
    fill(255,220,);
    text("Welcome to our Solar System", 340,100);
     text("Click the sun to explore the rest of the solar system",280,120);
    
    for (let i = 0; i < numStars; i++){
      point(stars[i][0], stars[i][1]);
    }
    
    fill(255, 220, 0);
  stroke(255, 255, 100);
  strokeWeight(0);
    ellipse(width/2, height/2.4, 200,200);
    text("This is the sun The sun is the star that is the central object in the solar system.", 240,430);
    
   text(" It is made up of 92% hydrogen, almost 8% helium and the rest is assorted elements.", 240, 450);
    
     text("An example of sun is what rises in the east and sets in the west each day.", 240, 470);
  }
  
  
  
  
  
  
  else if (pageNum == 2){
   background(30);
    text("PAGE 1", 800,60);
    text("There are 9 planets in our solar system", 350,100);
    
       for (let i = 0; i < numStars; i++){
      point(stars[i][0], stars[i][1]);
         
    }
      fill(255, 220, 0);
  stroke(255, 255, 100);
  strokeWeight(0);
    ellipse(width/200, height/2, 200,700);
    fill(85, 55, 20);
  stroke(255,220,165);
  strokeWeight(1);
    ellipse(width/6, height/2, 20,20);
   
    fill(211, 113, 0);
  stroke(255, 155, 0);
  strokeWeight(1);
  ellipse(width/5, height/2, 30,30);
  
    fill(127, 208, 255);
  stroke(235, 235, 255,200);
  strokeWeight(1);
  ellipse(width/4, height/2, 40,40);
    
    fill(231, 133, 0);
  stroke(255, 155, 0);
  strokeWeight(1);
  ellipse(width/3.3, height/2, 35,35);
   
    fill(188, 136, 84);
  stroke(74, 44, 12);
  strokeWeight(2);
  ellipse(width/2.5, height/2, 90,90); 
    
     fill(214, 163, 61);
  stroke(224+20, 173+20, 71+20);
  strokeWeight(1);
  ellipse(width/1.95, height/2, 80,80);
   
     
     fill(127, 208, 255);
  stroke(220,200,200);
  strokeWeight(.5);
  ellipse(width/1.45, height/2, 60, 60); 
  

    fill(100, 100, 255);
  strokeWeight(0);
  ellipse(width/1.2, height/2, 55,55);  


  

  
  
  }
  
  
  
  
  
  
  
  
  
  else if (pageNum == 3){
    background(30);
    fill(255,220);
    text("PAGE 2", 800,60);
    text("This is Mercury", 350,100);
    
    
    text("Mercury is a planet in our solar system. ", 350,150);
    
    text(" It is the smallest of the eight planets. It is also the closest to the sun. ", 280,450);
     
    text(" Mercury goes around the sun the fastest of all the planets. Mercury has no moons.", 280,500);
     for (let i = 0; i < numStars; i++){
      point(stars[i][0], stars[i][1]);
         fill(85, 55, 20);
  stroke(255,220,165);
  strokeWeight(1);
    ellipse(width/2, height/2, 200,200);
    
    
     }
  }
    
  else if (pageNum == 4){
    background(30);
  text("PAGE 3", 800,60);;
     for (let i = 0; i < numStars; i++){
      point(stars[i][0], stars[i][1]);
        
    fill(211, 113, 0);
  stroke(255, 155, 0);
  strokeWeight(1);
  ellipse(width/2, height/2, 200,200);
       text("This is Venus", 340,100);
       text("Venus is a very rocky planet with an iron core about 1,900 miles (3,000 kilometers) wide but has no magnetic field.", 200,450);
          text("It spins too slowly to generate the kind of magnetic field Earth has. ", 200,470);
          text("It has a solid surface, deep craters and volcanoes or volcanic centers bigger than 12 miles (20 kilometers) in diameter.", 200,490);
     }
  }
  
  else if (pageNum == 5){
    background(30);
  text("PAGE 4", 800,60);
    text("Welcome to Earth", 340,100);
    text("Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.", 120,450);
        text("Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.", 120,470);
        text("While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface.", 120,490);
    
      for (let i = 0; i < numStars; i++){
      point(stars[i][0], stars[i][1]);
        
       fill(127, 208, 255);
  stroke(235, 235, 255,200);
  strokeWeight(1);
  ellipse(width/2, height/2, 200,200);
    
     }
  }
  else if (pageNum == 6){
    background(30);
    text("PAGE 5", 800,60);
    text("This is mars", 340,100);
    text("Mars is a dusty, cold, desert world with a very thin atmosphere. ",200,450);
    text("There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.",200,470);
      for (let i = 0; i < numStars; i++){
      point(stars[i][0], stars[i][1]);
           fill(231, 133, 0);
  stroke(255, 155, 0);
  strokeWeight(1);
  ellipse(width/2, height/2, 200,200);
     }
  }
     else if (pageNum == 7){
    background(30);
  text("PAGE 6", 800,60);
       text("This is Jupiter",340,100);
       text("Jupiter is more than twice as massive than the other planets of our solar system combined. ",200,450);
       text("The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",200,470);
        for (let i = 0; i < numStars; i++){
      point(stars[i][0], stars[i][1]);
            fill(188, 136, 84);
  stroke(74, 44, 12);
  strokeWeight(2);
  ellipse(width/2, height/2, 200,200); 
     }
  }
  else if (pageNum == 8){
    background(30);
    
    text("PAGE 7", 800,60);
    text("Welcome to Saturn",340,100);
    text("Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system.  ",200,450);
    text(" The other giant planets have rings, but none are as spectacular as Saturn's. ",200,470);
        for (let i = 0; i < numStars; i++){
      point(stars[i][0], stars[i][1]);
          
     fill(214, 163, 61);
  stroke(224+20, 173+20, 71+20);
  strokeWeight(1);
  ellipse(width/2, height/2, 200,200);
  
     }
  }
  else if (pageNum == 9){
    background(30);
text("PAGE 8", 800,60);
    text("This is Uranus",340,100);
    text("Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit.",200,450);
    text("This unique tilt makes Uranus appear to spin on its side.",200,470);
        for (let i = 0; i < numStars; i++){
      point(stars[i][0], stars[i][1]);
               fill(127, 208, 255);
  stroke(220,200,200);
  strokeWeight(.5);
  ellipse(width/2, height/2, 200,200); 
    
     }
  }
  else if (pageNum == 10){
    background(30);
 text("PAGE 9", 800,60);
    text("And finally welcome to Neptune",340,100);
    text("Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds.",200,450);
    text("It was the first planet located through mathematical calculations.",200,470);
        for (let i = 0; i < numStars; i++){
      point(stars[i][0], stars[i][1]);
            fill(100, 100, 255);
  strokeWeight(0);
  ellipse(width/2, height/2, 200,200);  

     }
  }
  


}


function mousePressed(){
  
  if (pageNum < numPages){
    pageNum++;
  }
  
  
  else{
    pageNum = 1;
  }
  
  
  console.log(pageNum);
}