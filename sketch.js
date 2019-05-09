
var season = [];// an array of all the "season" values
var death = [];// an array of all the "typeofdeath" values
var game = "dataofthronesepisodes.json";
// let data = {}; // Global object to hold results from the loadJSON call
// let bubbles = []; // Global array to hold all bubble objects
var balls = []; // array of Jitter objects
var arrow = []; // an array of all the "arrow" values


function preload(){
  // game = loadTable("dataofscene.csv");
  // game = loadJSON("dataofthronesepisodes.json");
  game= loadJSON("dataofthronesepisodes.json");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(i = 0; i < game.thrones.length; i++){
       console.log(game.thrones[i].typeofdeath);
    //  var death= game.thrones.typeofdeath[i];
  //  for (j =0; j< game.thrones[i].typeofdeath.length;j++){
  //   // for(typeofdeath in game.thrones){
  //      console.log(game.thrones[i].typeofdeath[j]);
  //  }
     //SO CLOSE WITH THIS
      //  console.log(game.thrones[i].typeofdeath);
 
     
   
      //  ellipse(10, 10,game.thrones.season[i].Arrow,game.thrones[i].season);
       
      //  x=game.thrones[i].typeofdeath;
      //  var x = map(game.thrones[i].season,-180,180,0,width);
      // var y = map(game.thrones[i].typeofdeath,-90,90,height,0);
      // ellipse(x,y,3,3);
    
      //  let h = map(game.thrones[0].season,60,80,height,10);
      //  let a = map(game.thrones[1].season,60,80,height,10);
      // //  let f = game.thrones;
      //  ellipse(a,h,20);
      //  console.log(a,h);
      //  var death  = game.thrones[i].season;
      // text(death,0, 10);
     
     
   
    
    }
   
  
  text(game.thrones[0].season, 0, 100);
  text(game.thrones[1].season, 0, 200);
  text(game.thrones[2].season, 0, 300);
  text(game.thrones[3].season, 0, 400);
  text(game.thrones[4].season, 0, 500);
  text(game.thrones[5].season, 0, 600);
  text(game.thrones[6].season, 0, 700);
  // text(game.thrones[7].season, 0, 600);
  text('Back Stab',200,70);
  text('Arrow',100,70);
  text('Beaten',300,70);
  text('Boar',400,70);
  text('Burning',500,70);
  // text(game.thrones[0], 0, 100);
//try and wrap this in for loop to get it to 0-7 using length
  noStroke();
//season 1
  fill(0,24,21);
  ellipse(100,100,game.thrones[0].typeofdeath.Arrow*20,game.thrones[0].typeofdeath.Arrow*20);
  fill(196,226,244);
  ellipse(200,100,game.thrones[0].typeofdeath.Backstab*20,game.thrones[0].typeofdeath.Backstab*20);
  ellipse(300,100,game.thrones[0].typeofdeath.Beaten*20,game.thrones[0].typeofdeath.Beaten*20);
  ellipse(400,100,game.thrones[0].typeofdeath.Boar*20,game.thrones[0].typeofdeath.Boar*20);
  ellipse(500,100,game.thrones[0].typeofdeath.Burning*20,game.thrones[0].typeofdeath.Burning*20);


  //season 2  
  ellipse(100,200,game.thrones[1].typeofdeath.Arrow*20,game.thrones[1].typeofdeath.Arrow*20);
  ellipse(200,200,game.thrones[1].typeofdeath.Backstab*20,game.thrones[1].typeofdeath.Backstab*20);
  ellipse(300,200,game.thrones[1].typeofdeath.Beaten*20,game.thrones[1].typeofdeath.Beaten*20);
//season 3
  ellipse(100,300,game.thrones[2].typeofdeath.Arrow*20,game.thrones[2].typeofdeath.Arrow*20);
  ellipse(200,300,game.thrones[2].typeofdeath.Backstab*20,game.thrones[2].typeofdeath.Backstab*20);
  ellipse(300,300,game.thrones[2].typeofdeath.Beaten*20,game.thrones[2].typeofdeath.Beaten*20);
//season 4
  ellipse(100,400,game.thrones[3].typeofdeath.Arrow*20,game.thrones[3].typeofdeath.Arrow*20);
  ellipse(200,400,game.thrones[3].typeofdeath.Backstab*20,game.thrones[3].typeofdeath.Backstab*20);
  ellipse(300,400,game.thrones[3].typeofdeath.Beaten*20,game.thrones[3].typeofdeath.Beaten*20);
//season 5
  ellipse(100,500,game.thrones[4].typeofdeath.Arrow*20,game.thrones[4].typeofdeath.Arrow*20);
  ellipse(200,500,game.thrones[4].typeofdeath.Backstab*20,game.thrones[4].typeofdeath.Backstab*20);
  ellipse(300,500,game.thrones[4].typeofdeath.Beaten*20,game.thrones[4].typeofdeath.Beaten*20);

  //season 6
  ellipse(100,600,game.thrones[5].typeofdeath.Arrow*20,game.thrones[5].typeofdeath.Arrow*20);
  ellipse(200,600,game.thrones[5].typeofdeath.Backstab*20,game.thrones[5].typeofdeath.Backstab*20);
  ellipse(300,600,game.thrones[5].typeofdeath.Beaten*20,game.thrones[5].typeofdeath.Beaten*20);

   //season 7
   ellipse(100,700,game.thrones[6].typeofdeath.Arrow*20,game.thrones[6].typeofdeath.Arrow*20);
   ellipse(200,700,game.thrones[6].typeofdeath.Backstab*20,game.thrones[6].typeofdeath.Backstab*20);
   ellipse(300,700,game.thrones[6].typeofdeath.Beaten*20,game.thrones[6].typeofdeath.Beaten*20);
  //   x = game.thrones[0].season + game.thrones[1].season + game.thrones[2].season;
// 	y = game.thrones[3].season + game.thrones[4].season + game.thrones[5].season;
// 	z = game.thrones[0].typeofdeath.Arrow * 2 + game.thrones[1].season *2 + game.thrones[2].season * 2;
 
// console.log(x,y,z);
}
// function gotData(game){
//   background(0);
// for( var i = 0; i < game.thrones.length; i++){
//   fill(255);
//   ellipse(random(width).season[i],random(height).season[i],16, 16);}

// }
// function draw(){
//   for(i = 0; i < game.thrones.typeofdeath.length; i++){
//     console.log(game.thrones.typeofdeath[i]);
//   }}
//   var forecastArray = game.thrones;
//   for (var i=0; i<forecastArray.length; i++) {
//     season[i] = forecastArray[i].season;
//     // typeofdeath[i] = forecastArray[i].typeofdeath[i];
//     arrow[i] = forecastArray[i].Arrow;
//     //moves balls
//     balls[i].move(arrow[i]);
//     //displays balls
//     balls[i].display(arrow[i], season[i]);
//   }}
  // let ch = height-30;
  // line(50,ch,width,ch);
	// //print a label for the x axis
  // textAlign(CENTER);
  // text('season',100,height-15)
  // let seasonMin = game.thrones[0];
  // let seasonMax = game.thrones[6].season;
  // ellipse(width / 2, height / 2, seasonMin, seasonMax);

  // point(xpos, ypos);   
  



//will need to create a loop
//season by season moving
//for each loop
//must use map to map the coordinates
//json will be "for each" instead of for loop like in the example Katy sent
//use class for each object in order to 
//can add color to the json
//could have another json with the colors and visuals for each deaath
//mouseHover for each of the info
//drawloop for animation




// preload(datafile);

// $(function() {
//   $.getJSON(file, function(data){
//     $.each(data.thrones, function(i, obj){
//       src = obj.season;
//       console.log("obj.season");
//     });
//   });
// });

// function setup(){
// createCanvas(windowWidth,windowHeight);
// game = loadJSON("datascene.json");
// // for(i = 0; i < game.length; i++){
//     console.log(game);
//   }
  //this works for datascene.json
// console.log(game);


// }

  // for(i = 0; i < game.length; i++){
  //   console.log(game);
  // }}


// function draw(){
//   //  console.log(game.Arrow[0].length);

//        text(game,0,100);
//       // circle(game.getColumn,30, 30);
//       // text(game.getColumn,0, 100);
//       textSize(60);
//     }
  
// function draw(){
//   document.getElementById("dummy").innerHTML = ;
// }

// function setup(){
//   createCanvas(windowWidth,windowHeight);
//   game = loadJSON("dataofthronesepisodes.json");
//   let i= 0;
//   // console.log(game.thrones[0]);
//   for(i in game.thrones){
//     console.log(i);
//       // console.log(game.thrones.season[i]);
//     }}

// function Hothot() {
//   this.direction = 1;
//   this.x = random(0, 200);
  
//   this.move = function(seasonVar) {
//     //maps speed range to paris temperature range
//     this.season = (map(seasonVar, 55, 61, 1, 5)*this.direction);
//     this.x += this.speed
//     //allows balls to bounce off canvas boundaries
// 		if(this.x < 0 || this.x > width)
// 			this.direction = -this.direction;
//   };

//   //maps color dates and warm/cool color to ellipses
//   this.display = function(colorVar, date) {
//     this.temp = map(colorVar, min(season), max(season), 10, 100);
    
//     var colorVal = map(colorVar, min(season[1]), max(season), 10, 255);
//     tempColor = color(colorVal, 100, 255-colorVal);
//    	fill(tempColor);
    
    
//     //aligns text with shapes 
//    this.y = map(colorVar, min(season), max(season), 50, height-50);
//     text(date, this.temp/2+this.x, this.y);
//     ellipse(this.x, this.y, map(colorVar, min(season), max(season), 10, 100), map(colorVar, min(season), max(season), 10, 100));
//   };
// }