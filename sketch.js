

let font;
let mount,textBox,mountainside,Cave,InsideCave,orange,mountainside2,prints,river;

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

//images preload
function preload (){
  font = loadFont('font/VCR_OSD_MONO_1.001.ttf')
  mount = loadImage('images/mount.png')
  textBox = loadImage('images/text box.png')
  mountainside = loadImage('images/stage1.png')
  Cave = loadImage('images/Cave.png')
  InsideCave = loadImage('images/insideCave.png')
  orange = loadImage('images/orange.png')
  mountainside2 = loadImage('images/outofcave.png')
  prints = loadImage('images/Prints.png')
  river = loadImage('images/river.png')
  
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  imageMode(CENTER)
  textAlign(CENTER)
  textFont(font)
  textSize(35)
  pixelDensity(1);
}

//all functions for choices 
function keyPressed(){
  if (key === 'a'){
    WillHelp()
  }
  if ( key === 'b'){
    GameOver();
  }

  if( key === 'c'){
    WayAround();
  }
  if( key === 'd'){
    InCave();
  }

  if (key === 'e'){
    Rock();
  }
  if (key === 'f'){
    StageCave();
  }
  if (key === 'g'){
    Left();
  }
  if (key === 'h'){
   Right();
  }

  if (key === 'i'){
    followPrints();
  }
  if (key === 'j'){
    OutCave();
  }
  if (key === 'k'){
    Bridge();
  }
  if (key === 'l'){
    Stones();
  }


}
//what happens when the user loses
function GameOver(){
  textAlign(CENTER)
  image(textBox,windowWidth/2,windowHeight/2, 600,600)
  textSize(80)
  text('GAME OVER',windowWidth/2,windowHeight/2 +50)
}
//beginning screen
function OpeningScreen(){
  image(mount,windowWidth/2,windowHeight/2, 600,600)
  text('Welcome to Orange Mountain!',windowWidth/2,windowHeight/2 +200, )
  text('PRESS ENTER TO START',windowWidth/2,windowHeight/2+ 270) 
  
}
//set up story
function Start(){
  textAlign(LEFT)
 
  image(mount,windowWidth/2,windowHeight/2, 600,600)
  text('This mountain may have ',windowWidth/2-300,windowHeight/2 +200, )
  text('astonishing views, but',windowWidth/2-300,windowHeight/2 +200+35)
  text('a tragedy has occurred...',windowWidth/2-300,windowHeight/2 +200+70)
  
  setTimeout(StartTwo,4000)
  setTimeout (StartThree, 7000)
  setTimeout(StartFour, 10000)
  
}
//setup story
function StartTwo(){
  textAlign(LEFT)
  image(mount,windowWidth/2,windowHeight/2, 600,600)
  text('A dear friend was',windowWidth/2-300,windowHeight/2 +200, )
  text('recently travelling',windowWidth/2-300,windowHeight/2 +200+35)
  text('over this mountain...',windowWidth/2-300,windowHeight/2 +200+70)

  
}
//setup story
function StartThree(){
  textAlign(LEFT)
  image(mount,windowWidth/2,windowHeight/2, 600,600)
  text('And they dropped their bag',windowWidth/2-300,windowHeight/2 +200, )
  text('of oranges and now they',windowWidth/2-300,windowHeight/2 +200+35)
  text('are lost!',windowWidth/2-300,windowHeight/2 +200+70)
}
//the user is asked to help
function StartFour(){
  textAlign(LEFT)
  image(mount,windowWidth/2,windowHeight/2, 600,600)
  text('Will you help them',windowWidth/2-300,windowHeight/2 +200, )
  text('find their lost oranges?',windowWidth/2-300,windowHeight/2 +200+35)
  textAlign(CENTER)
  text('(a) YES    (b) NO',windowWidth/2,windowHeight/2 + 275)

  
}
//the user chooses to help
function WillHelp(){
  image(textBox,windowWidth/2,windowHeight/2, 600,600)
  text('Excellent! Lets get started!',windowWidth/2,windowHeight/2 + 50)

  setTimeout(StageA1,3000)
}

//discribing
function StageA1(){
  textAlign(LEFT)
  image(mountainside,windowWidth/2,windowHeight/2, 600,600)
  text('It is a stunning day, the sun',windowWidth/2-300,windowHeight/2 +100, )
  text('is high and there is not',windowWidth/2-300,windowHeight/2 +100+35)
  text('a cloud to be seen...',windowWidth/2-300,windowHeight/2 +100+70)

  setTimeout(StageA2,5000)
  
}
//the user finds the cave
function StageA2(){
  textAlign(LEFT)
  image(mountainside,windowWidth/2,windowHeight/2, 600,600)
  text('after walking for sometime',windowWidth/2-300,windowHeight/2 +100, )
  text('you arrive at the entrance',windowWidth/2-300,windowHeight/2 +100+35)
  text('to a mysterious cave...',windowWidth/2-300,windowHeight/2 +100+70)

  setTimeout(StageCave,5000)

}

//the user find the cave
function StageCave(){
  textAlign(LEFT)
  image(Cave,windowWidth/2,windowHeight/2, 600,600)
  text('The cave is dark and you',windowWidth/2-300,windowHeight/2 +150, )
  text('cannot see the otherside.',windowWidth/2-300,windowHeight/2 +150+35)
  text('(c) find a way around',windowWidth/2-300,windowHeight/2 +150 +70)
  text('(d) go through the cave',windowWidth/2-300,windowHeight/2 +150 + 105)
}

//the user tries to find a way around the cave
function WayAround(){
  textAlign(LEFT)
  image(mountainside,windowWidth/2,windowHeight/2, 600,600)
  text('once off the main track',windowWidth/2-300,windowHeight/2 +100, )
  text('its hard to find your way',windowWidth/2-300,windowHeight/2 +100+35)
  text('rocks become higher and more',windowWidth/2-300,windowHeight/2 +100+70)
  text('difficult to climb...',windowWidth/2-300,windowHeight/2 +100 +105)

  setTimeout(WayAround2,5000)

}
//the user comes across a big rock
function WayAround2(){
  textAlign(LEFT)
  image(mountainside,windowWidth/2,windowHeight/2, 600,600)
  text('soon you come to a huge rock',windowWidth/2-300,windowHeight/2 +100, )
  text('it looks very slippery and',windowWidth/2-300,windowHeight/2 +100+35)
  text('there are few foot holds. ',windowWidth/2-300,windowHeight/2 +100+70)
  text('(e) try and climb rock',windowWidth/2-300,windowHeight/2 +100 +105)
  text('(f) return to cave entrance',windowWidth/2-300,windowHeight/2 +100 + 140)
}
//user falls of rock
function Rock(){
  textAlign(LEFT)
  image(mountainside,windowWidth/2,windowHeight/2, 600,600)
  text('You try to climb the rock',windowWidth/2-300,windowHeight/2 +100, )
  text('but half way up you slip ',windowWidth/2-300,windowHeight/2 +100+35)
  text('and fall down the bank. ',windowWidth/2-300,windowHeight/2 +100+70)
  setTimeout(GameOver,5000)
}

//the user chooses cave and trips 
function InCave(){
  textAlign(LEFT)
  image(InsideCave,windowWidth/2,windowHeight/2, 600,600)
  fill(255);
  text('It is very dark in the cave',windowWidth/2-300,windowHeight/2 +150, )
  text('after a short time, you',windowWidth/2-300,windowHeight/2 +150+35)
  text('trip over somthing',windowWidth/2-300,windowHeight/2 +150 +70)
  text('strange on the cave floor...',windowWidth/2-300,windowHeight/2 +150 + 105)
   
  setTimeout(InCave2,6000)
}
//the user picks up an orange in the dark
function InCave2(){
  textAlign(LEFT)
  image(InsideCave,windowWidth/2,windowHeight/2, 600,600)
  fill(255);
  text('you thought it was a rock',windowWidth/2-300,windowHeight/2 +150, )
  text('but you pick up the object',windowWidth/2-300,windowHeight/2 +150+35)
  text('at your feet and find you',windowWidth/2-300,windowHeight/2 +150 +70)
  text('are holding an orange??!',windowWidth/2-300,windowHeight/2 +150 + 105)
  setTimeout(FirstOranges,6000)
}
//the user finds oranges for the first time
function FirstOranges(){
  image(textBox,windowWidth/2,windowHeight/2, 600,600)
  image(orange,windowWidth/2 - 200,windowHeight/2 + 200, 200,200 )
image(orange,windowWidth/2,windowHeight/2 + 200, 200,200 )
image(orange,windowWidth/2 + 200,windowHeight/2 + 200, 200,200 )
textAlign(CENTER)
fill(1)
  text('You found three of ',windowWidth/2,windowHeight/2 + 50)
  text('the lost oranges!!',windowWidth/2,windowHeight/2 + 50 + 35)
  setTimeout(InCave3,5000)
}

//the user exits the cave
function InCave3(){
  textAlign(LEFT)
  image(InsideCave,windowWidth/2,windowHeight/2, 600,600)
  fill(255);
  text('The cave begins to lighten',windowWidth/2-300,windowHeight/2 +150)
  text('and you find your way out ',windowWidth/2-300,windowHeight/2 +150 +35)
  setTimeout(OutCave,5000)

}
//the user exits the cave (find fork in track)
function OutCave(){
  textAlign(LEFT)
  image(mountainside2,windowWidth/2,windowHeight/2, 600,600)
  fill(1)
  text('not long out of the cave',windowWidth/2-300,windowHeight/2 +150, )
  text('you come across a fork',windowWidth/2-300,windowHeight/2 +150+35)
  text('in the track... ',windowWidth/2-300,windowHeight/2 +150 +70)
  text('(g) LEFT (h) RIGHT',windowWidth/2-300,windowHeight/2 +150 + 105)
}

//the user chooses to turn left
function Left(){
  textAlign(LEFT)
  image(mountainside2,windowWidth/2,windowHeight/2, 600,600)
  text('The left track is muddy',windowWidth/2-300,windowHeight/2 +150, )
  text('but you can make out some',windowWidth/2-300,windowHeight/2 +150+35)
  text('animals foot prints... ',windowWidth/2-300,windowHeight/2 +150 +70)
  text('(i) follow prints',windowWidth/2-300,windowHeight/2 +150 +105)
  text('(j) return to fork',windowWidth/2-300,windowHeight/2 +150 + 140)
}
//the users chooses to follow the prints (finds bear)
function followPrints(){
  textAlign(LEFT)
  image(prints,windowWidth/2,windowHeight/2, 600,600)
  text('the animal prints belong',windowWidth/2-300,windowHeight/2 +150, )
  text('to a bear, hes very friendly',windowWidth/2-300,windowHeight/2 +150+35)
  text('and hands you two oranges! ',windowWidth/2-300,windowHeight/2 +150 +70)
  setTimeout(SecOranges,6000)
}
//the users finds more oranges
function SecOranges(){
  image(textBox,windowWidth/2,windowHeight/2, 600,600)
  image(orange,windowWidth/2 - 100,windowHeight/2 + 200, 200,200 )
image(orange,windowWidth/2 + 100,windowHeight/2 + 200, 200,200 )
textAlign(CENTER)
fill(1)
  text('You found two of ',windowWidth/2,windowHeight/2 + 50)
  text('the lost oranges!!',windowWidth/2,windowHeight/2 + 50 + 35)
  setTimeout(ForkAfterLeft,6000)
}
//after turning left the user turns right
function ForkAfterLeft(){
  textAlign(LEFT)
  image(mountainside2,windowWidth/2,windowHeight/2, 600,600)
  fill(1)
  text('you return to the fork ',windowWidth/2-300,windowHeight/2 +150, )
  text('and go right',windowWidth/2-300,windowHeight/2 +150+35)
  setTimeout(Right,4000)

}
//the user chooses 'right'
function Right(){
  textAlign(LEFT)
  image(mountainside2,windowWidth/2,windowHeight/2, 600,600)
  text('you begin to hear rushing',windowWidth/2-300,windowHeight/2 +150, )
  text('water and soon you come',windowWidth/2-300,windowHeight/2 +150+35)
  text('across a deep river... ',windowWidth/2-300,windowHeight/2 +150 +70)
  setTimeout(River,5000)
}
//the arrives at the river
function River(){
  textAlign(LEFT)
  image(river,windowWidth/2,windowHeight/2, 600,600)
  text('you can see a birdge',windowWidth/2-300,windowHeight/2 +150, )
  text('further down the bank',windowWidth/2-300,windowHeight/2 +150+35)
  text('there are also some stepping',windowWidth/2-300,windowHeight/2 +150 +70)
  text('stones across the water',windowWidth/2-300,windowHeight/2 +150 + 105)
  setTimeout(River2,5000)
}
//choices for river
function River2(){
  textAlign(LEFT)
  image(river,windowWidth/2,windowHeight/2, 600,600)
  text('(k) Use the bridge',windowWidth/2-300,windowHeight/2 +150, )
  text('(l) Use the stepping stones',windowWidth/2-300,windowHeight/2 +150+35)
  
}
//the user chooses to use the bridge
function Bridge(){
  textAlign(LEFT)
  image(river,windowWidth/2,windowHeight/2, 600,600)
  text('The bridge is very old,',windowWidth/2-300,windowHeight/2 +150, )
  text('a board breaks and',windowWidth/2-300,windowHeight/2 +150+35)
  text('you fall into the river. ',windowWidth/2-300,windowHeight/2 +150 +70)
  setTimeout(GameOver,5000)
}
//the user chooses to take the stones
function Stones(){
  textAlign(LEFT)
  image(river,windowWidth/2,windowHeight/2, 600,600)
  text('you carefully make your',windowWidth/2-300,windowHeight/2 +150, )
  text('way across the river and ',windowWidth/2-300,windowHeight/2 +150+35)
  text('land safely on the otherside. ',windowWidth/2-300,windowHeight/2 +150 +70)
  setTimeout(Otherside,5000)
}
//otherside fo the river
function Otherside(){
  textAlign(LEFT)
  image(river,windowWidth/2,windowHeight/2, 600,600)
  text('there is some orange',windowWidth/2-300,windowHeight/2 +150, )
  text('poking out of the bushes',windowWidth/2-300,windowHeight/2 +150+35)
  text('and you invesigate...',windowWidth/2-300,windowHeight/2 +150 +70)
  setTimeout(ThirdOranges,5000)
}
//screen for found oranges
function ThirdOranges(){
  image(textBox,windowWidth/2,windowHeight/2, 600,600)
  image(orange,windowWidth/2 - 100,windowHeight/2 + 200, 200,200 )
image(orange,windowWidth/2 + 100,windowHeight/2 + 200, 200,200 )
textAlign(CENTER)
fill(1)
  text('You found two more of ',windowWidth/2,windowHeight/2 + 50)
  text('the lost oranges!!',windowWidth/2,windowHeight/2 + 50 + 35)
  setTimeout(YouWin,4000)
}
//End of game
function LeaveMountain(){
  textAlign(LEFT)
  image(mount,windowWidth/2,windowHeight/2, 600,600)
  text('There is some orange',windowWidth/2-300,windowHeight/2 +150, )
  text('poking out of the bushes',windowWidth/2-300,windowHeight/2 +150+35)
  text('and you invesigate...',windowWidth/2-300,windowHeight/2 +150 +70)
  setTimeout(ThirdOranges,5000)
}
//The player wins
function YouWin(){
  image(textBox,windowWidth/2,windowHeight/2, 600,600)
  text('You found the lost oranges!!',windowWidth/2,windowHeight/2 - 80 )
  text('Well Done!!',windowWidth/2,windowHeight/2 - 45)
  text('Did you find all seven of the',windowWidth/2,windowHeight/2 +35 ) 
  text('oranges? If you only found',windowWidth/2,windowHeight/2 + 70)
  text('five maybe try again...',windowWidth/2,windowHeight/2 +105)    
}

function draw() {
  background(100);
  OpeningScreen()

  keyPressed();
  if(keyCode === ENTER){
    Start();
    hide(OpeningScreen());
   }


}





