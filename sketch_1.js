
var season = [];// an array of all the "season" values
var death = [];// an array of all the "typeofdeath" values
var game = "dataofthronesepisodes.json";
// let data = {}; // Global object to hold results from the loadJSON call
// let bubbles = []; // Global array to hold all bubble objects
var balls = []; // array of Jitter objects
var arrow = []; // an array of all the "arrow" values

var namesofdeath = ['Arrow',
    'Backstab',
    'Beaten',
    'Boar',
    'Burning',
    'Cheststab',
    'Choking',
    'Decapitation',
    'Door',
    'Drowning',
    'Eyestab',
    'Facestab',
    'Falling',
    'Frozen',
    'Giant',
    'Gutted',
    'Hanging',
    'Headcrush',
    'Horse',
    'MalformedBirth'];


function preload() {
    // game = loadTable("dataofscene.csv");
    // game = loadJSON("dataofthronesepisodes.json");
    game = loadJSON("dataofthronesepisodes.json");
}


function setup() {
    createCanvas(3000, 900);
    background(241, 92, 92);
    //DEATH TYPES
    for (i = 0; i < namesofdeath.length; i++) {
        fill(255);
        textAlign(CENTER);
        text(namesofdeath[i], 100 + 100 * i, 50);
    }

    //SEASON
    for (i = 0; i < game.thrones.length; i++) {

        fill(255);
        text(game.thrones[i].season, 10, i * 100 + 100);

        //arrow 
        noStroke();
        fill(255, 0, 0);

        // for(j=0; j<namesofdeath.length; j++){
        for (j = 0; j < game.thrones.length; j++) {
            ///////////////TEST FOR DYNAMIC LOOPING OF DEATH TYPES --> DIDNT WORK ///////////////
            // let d = game.thrones[i].typeofdeath.namesofdeath[j]; 
            console.log(game.thrones[j].typeofdeath);
            fill(48, 178, 172);
            let d = game.thrones[i].typeofdeath.Arrow;
            // let d = game.thrones[i].namesofdeath[j]; 
            //   console.log(game.thrones[i].namesofdeath[j]); 
            ellipse(100, 100 + 100 * i, d * 20, d * 20);
        }

        fill(196, 226, 244);
        let g = game.thrones[i].typeofdeath.Backstab;
        ellipse(200, 100 + 100 * i, g * 20, g * 20);

        fill(86, 202, 246);
        let c = game.thrones[i].typeofdeath.Beaten;
        ellipse(300, 100 + 100 * i, c * 20, c * 20);

        fill(113,236,226);
        let b = game.thrones[i].typeofdeath.Boar;
        ellipse(400, 100 + 100 * i, b * 20, b * 20);

        fill(170,118,253);
        let l = game.thrones[i].typeofdeath.Burning;
        ellipse(500, 100 + 100 * i, l * 20, l * 20);

        fill(163,222,222);
        let k = game.thrones[i].typeofdeath.Cheststab;
        ellipse(600, 100 + 100 * i, k * 20, k * 20);

        fill(134,242,117);
        let a = game.thrones[i].typeofdeath.Choking;
        ellipse(700, 100 + 100 * i, a * 20, a * 20);

        fill(238,215,255);
        let s = game.thrones[i].typeofdeath.Decapitation;
        ellipse(800, 100 + 100 * i, s * 20, s * 20);

        fill(249, 217, 176);
        let t = game.thrones[i].typeofdeath.Door;
        ellipse(900, 100 + 100 * i, t * 20, t * 20);

        fill(240,132,13);
        let m = game.thrones[i].typeofdeath.Drowning;
        ellipse(1000, 100 + 100 * i, m * 20, m * 20);

        fill(39, 56, 72);
        let n = game.thrones[i].typeofdeath.Eyestab;
        ellipse(1100, 100 + 100 * i, n * 20, n * 20);

        fill(153,204,255);
        let p = game.thrones[i].typeofdeath.Facestab;
        ellipse(1200, 100 + 100 * i, p * 20, p * 20);
        
        fill(153,255,204);
        let q = game.thrones[i].typeofdeath.Falling;
        ellipse(1300, 100 + 100 * i, q * 20, q * 20);

        fill(204,255,153);
        let w = game.thrones[i].typeofdeath.Frozen;
        ellipse(1400, 100 + 100 * i, w * 20, w * 20);

        fill(204,153,255);
        let v = game.thrones[i].typeofdeath.Giant;
        ellipse(1500, 100 + 100 * i, v * 20, v * 20);

        fill(196, 226, 244);
        let vi = game.thrones[i].typeofdeath.Gutted;
        ellipse(1600, 100 + 100 * i, vi * 20, vi * 20);

        fill(49,255,223);
        let hang = game.thrones[i].typeofdeath.Hanging;
        ellipse(1700, 100 + 100 * i, hang * 20, hang * 20);

        fill(255,230,74);
        let head = game.thrones[i].typeofdeath.Headcrush;
        ellipse(1800, 100 + 100 * i, head * 20, head * 20);

        fill(225,10,112);
        let horse = game.thrones[i].typeofdeath.Horse;
        ellipse(1900, 100 + 100 * i, horse * 20, horse * 20);

        fill(250,255,207);
        let birth = game.thrones[i].typeofdeath.MalformedBirth;
        ellipse(2000, 100 + 100 * i, birth * 20, birth * 20);

    }






}

function draw() {

}


function mouseClicked() {
    textAlign(CENTER);
    let d = 20;
    let distance = dist(mouseX, mouseY, 100, 100);
    if (distance <= d) {
        text(game.thrones[0].typeofdeath.Arrow, 100, 100);

    }
   
    let gdist = dist(mouseX, mouseY, 100, 100);
    if (distance <= gdist) {
        text(game.thrones[2].typeofdeath.Arrow, 100, 300);

    }
   
    let cdist = dist(mouseX, mouseY, 100, 100);
    if (distance <= cdist) {
        text(game.thrones[3].typeofdeath.Arrow, 100, 400);

    }

    let ldist = dist(mouseX, mouseY, 100, 100);
    if (distance <= ldist) {
        text(game.thrones[4].typeofdeath.Arrow, 100, 500);

    }

    let kdist = dist(mouseX, mouseY, 100, 100);
    if (distance <= kdist) {
        text(game.thrones[5].typeofdeath.Arrow, 100, 600);

    }
    fill(241, 92, 92);
    let f = 40;
    let fdist = dist(mouseX, mouseY, 200, 100);
    if (fdist <= f) {
        text(game.thrones[0].typeofdeath.Backstab, 200, 100);

    }
    let adist = dist(mouseX, mouseY, 100, 100);
    if (distance <= adist) {
        text(game.thrones[1].typeofdeath.Backstab, 200, 200);
    }
   
    let xdist = dist(mouseX, mouseY, 100, 100);
    if (distance <= xdist) {
        text(game.thrones[2].typeofdeath.Backstab, 200, 300);

    }
    let bdist = dist(mouseX, mouseY, 100, 100);
    if (distance <= bdist) {
        text(game.thrones[5].typeofdeath.Backstab, 200, 600);

    }
    

    // let ldist = dist(mouseX, mouseY, 100, 100);
    // if (distance <= ldist) {
    //     text(game.thrones[4].typeofdeath.Arrow, 100, 500);

    // }

    // let kdist = dist(mouseX, mouseY, 100, 100);
    // if (distance <= kdist) {
    //     text(game.thrones[5].typeofdeath.Arrow, 100, 600);

   




}