var tt ;

let playerName;
let playerLevel; //variable not in use
let levelPlaying;
let choosen;

//globals for saving games
let saveGameScore = parseInt(localStorage.getItem('saveGameScore'));
let saveGameLife = parseInt(localStorage.getItem('saveGameLife')); //Point
let saveGameLevel  = parseInt(localStorage.getItem('saveGameLevel'));
let saveGameChoosen = localStorage.getItem('saveGameChoosen');
let saveGameNumberPic = parseInt(localStorage.getItem('saveGameNumberPic'));
let saveGameLevelPlaying = parseInt(localStorage.getItem('saveGameLevelPlaying')); //speed
//..................................

playerName = prompt('What is your name');

 var level =  prompt(`Enter the corect number for prefer Skill Level
  1:  For Expert
  2:  For DIfficult
  3:  For Normal
  4:  For Easy
  5:  For Beginner
  6:  Continue`);

  if(level == 1 ){
    levelPlaying = 800;
    choosen = "Expert";
    // return levelPlaying;
  }else if(level == 2){
    levelPlaying = 950;
    choosen = "DIfficult";
    // return levelPlaying;
  }else if(level == 3){
    levelPlaying = 1050;
    choosen = "Normal";
    // return levelPlaying;
  }else if (level == 4){
    levelPlaying = 1150;
    choosen = "Easy";
    // return levelPlaying;
  }else if (level == 5){
    levelPlaying = 1250;
    choosen = "Beginner";
    // return levelPlaying;
  }else if (level == 6){
      	scoreJs = localStorage.setItem('saveGameScore', saveGameScore);
      	gamePointJs = localStorage.setItem('saveGameLife', saveGameLife);
	gameLevelJs = localStorage.setItem('saveGameLevel', saveGameLevel);
	choosen = localStorage.setItem('saveGameChoosen', saveGameChoosen);
	numPickGlobal = localStorage.setItem('saveGameNumberPic', saveGameNumberPic); 
	levelPlaying = localStorage.setItem('saveGameLevelPlaying', saveGameLevelPlaying);   
  }else{
    levelPlaying = 1500;
    choosen = "Pratice";

    // return levelPlaying;
  }


tt = levelPlaying;

let tempResult;
let scoreJs;
let gamePointJs;
let gameLevelJs;

if(gameLevelJs < 0 ){
	tempResult = 100;
	scoreJs = 0;
	gamePointJs =0;
	gameLevelJs = 1;
}else{
	tempResult = gamePointJs;
	scoreJs = scoreJs;
	gamePointJs =gamePointJs;
	gameLevelJs = gameLevelJs;
	
}

let changeLevel;

let getRandmGlobal = 0; //this will give us global access to randon output
let numPickGlobal = 0; //this will give us global access to selected number
let activeItemGlobal = ''; //item in random action

let gameLevel = document.getElementById('gameLevel');
gameLevel.innerHTML = gameLevelJs;

let point = document.getElementById('point');
point.innerHTML = gamePointJs;

let item1 = document.getElementById('item1');
let item2 = document.getElementById('item2');
let item3 = document.getElementById('item3');
let item4 = document.getElementById('item4');
let item5 = document.getElementById('item5');
let item6 = document.getElementById('item6');
let item7 = document.getElementById('item7');
let item8 = document.getElementById('item8');
let item9 = document.getElementById('item9');
// let menu = document.getElementById('menu');
// let goScoresPage = document.getElementById('goScoresPage');

let life = document.getElementById('life');

let scores = document.getElementById('scores');

scores.style.visibility = "hidden";

let numberPicked = document.getElementById('numberPicked');

let numberPicked2 = document.getElementById('numberPicked2');

let botton = document.getElementById('botton'); // start button
let occur  = document.getElementById('occur');

let pause  = document.getElementById('pause');
let coninue = document.getElementById('coninue');

let stopper = document.getElementById('stopper');
// let backgroundAudio = document.getElementById('backgroundAudio');
let palyerNameDom = document.getElementById('palyerNameDom')
let palyerLevelDom = document.getElementById('palyerLevelDom')

palyerNameDom.innerHTML = playerName;
palyerLevelDom.innerHTML = choosen;
        



botton.addEventListener('click', hideMe);

item1.addEventListener('click', getResult);
item2.addEventListener('click', getResult);
item3.addEventListener('click', getResult);
item4.addEventListener('click', getResult);
item5.addEventListener('click', getResult);
item6.addEventListener('click', getResult);
item7.addEventListener('click', getResult);
item8.addEventListener('click', getResult);
item9.addEventListener('click', getResult);

pause.addEventListener('click', pauseGame);
coninue.addEventListener('click', coninueGame);
stopper.addEventListener('click', stopGame);
// menu.addEventListener('click', showMenu);
// goScoresPage.addEventListener('click', showScores);


pause.style.visibility="hidden";
coninue.style.visibility="hidden";
stopper.style.visibility="hidden";





let inter; //settime
let bakAud; //

let image1="red";
let image2="skyBlue";
let image3="green";
let image4="pink";
let image5="yellow";
let image6="gray";
let image7="purple";
let image8="brown";
let image9="darkgoldenrod";



//game start her
function myTimer() { 
    numPickGlobal = parseInt(numberPicked.value);

    //random numbers are gotten from stored in two variable
    // the occurance method where user selection are determing to be right or wrong is called
    var myRand = Math.floor((Math.random() * 9) + 1);
    item1.innerHTML = myRand;
    activeItemGlobal = item1;
    getRandmGlobal = myRand;
    occurance();
    changeImage(activeItemGlobal, getRandmGlobal);
      
    myRand = Math.floor((Math.random() * 9) + 1);
    item2.innerHTML = myRand;
    activeItemGlobal = item2;
    getRandmGlobal = myRand;
    occurance();
    changeImage(activeItemGlobal, getRandmGlobal);
    
    myRand = Math.floor((Math.random() * 9) + 1);
    item3.innerHTML = myRand;
    activeItemGlobal = item3;
    getRandmGlobal = myRand;
    occurance();
    changeImage(activeItemGlobal, getRandmGlobal);
    
    
    myRand = Math.floor((Math.random() * 9) + 1);
    item4.innerHTML = myRand;
    activeItemGlobal = item4;
    getRandmGlobal = myRand;
    occurance();
    changeImage(activeItemGlobal, getRandmGlobal);
    
    myRand = Math.floor((Math.random() * 9) + 1);
    item5.innerHTML = myRand;
    activeItemGlobal = item5;
    getRandmGlobal = myRand;
    occurance();
    changeImage(activeItemGlobal, getRandmGlobal);
    
    myRand = Math.floor((Math.random() * 9) + 1);
    item6.innerHTML = myRand;
    activeItemGlobal = item6;
    getRandmGlobal = myRand;
    occurance();
    changeImage(activeItemGlobal, getRandmGlobal);

    myRand = Math.floor((Math.random() * 9) + 1);
    item7.innerHTML = myRand;
    activeItemGlobal = item7;
    getRandmGlobal = myRand;
    occurance();
    changeImage(activeItemGlobal, getRandmGlobal);

    myRand = Math.floor((Math.random() * 9) + 1);
    item8.innerHTML = myRand;
    activeItemGlobal = item8;
    getRandmGlobal = myRand;
    occurance();
    changeImage(activeItemGlobal, getRandmGlobal);

    myRand = Math.floor((Math.random() * 9) + 1);
    item9.innerHTML = myRand;
    activeItemGlobal = item9;
    getRandmGlobal = myRand;
    
    occurance();
    changeImage(activeItemGlobal, getRandmGlobal);

    scores.innerHTML = scoreJs;
    

    if(tempResult <= 0){
        clearInterval(inter);
        clearInterval(bakAud);
        item1.style.visibility='hidden';
        item2.style.visibility='hidden';
        item3.style.visibility='hidden';
        item4.style.visibility='hidden';
        item5.style.visibility='hidden';
        item6.style.visibility='hidden';
        item7.style.visibility='hidden';
        item8.style.visibility='hidden';
        item9.style.visibility='hidden';

	//clear score from memory
        clearSaveGame();
        showMe();
    }
    	//save present scores to the memory
    	saveGame();
}   


function getResult(e){
  
   let  clickedItem =parseInt(e.target.innerHTML);
   numPick = parseInt(numberPicked.value);
   
  

   if(inter){
    if(clickedItem != numPick){
      e.target.style.borderRadius = "15px";
      e.target.style.borderColor = "black";
      wrongtAudio(); //play audio
      tempResult = tempResult - 1;
      life.innerHTML = tempResult;
      
    }else if(clickedItem == numPick){
      e.target.style.borderRadius = "1px";
      e.target.style.borderColor = "white";
      correctAudio(); //play audio
      tempResult = tempResult + 1;
      life.innerHTML = tempResult;
      scoreJs++;
      gamePointJs++;
      

    }
  }else{
    alert("Kindly select a number to play, click ok and click start button to play"); 
  }

  checkScores();/////////////////////////////////////////

}

function hideMe(){
  //getHighestPlayer();
  //this is where new game start
  if(parseInt(numberPicked.value) > 0){
    if(parseInt(numberPicked.value) < 10){
      inter = setInterval(myTimer, tt);
      bakAud = setInterval(backAudioPlay, 15000);

      numberPicked2.style.visibility='visible';
      numberPicked2.innerHTML = numberPicked.value;
      numPickGlobal = numberPicked.value;
      botton.style.visibility='hidden';
      numberPicked.style.visibility='hidden';

      item1.style.visibility='visible';
      item2.style.visibility='visible';
      item3.style.visibility='visible';
      item4.style.visibility='visible';
      item5.style.visibility='visible';
      item6.style.visibility='visible';
      item7.style.visibility='visible';
      item8.style.visibility='visible';
      item9.style.visibility='visible';

      tempResult = 100;
      
      
      occur.innerHTML = 0;
      scoreJs = 0;
      gamePointJs =0
      gameLevelJs =1;
      scores.innerHTML = scoreJs;
      point.innerHTML = gamePointJs
      gameLevel.innerHTML = gameLevelJs
    
      pause.style.visibility ="visible";
      stopper.style.visibility = "visible";

      // localStorage.setItem('presentPlayerName', playerName);
      
      // localStorage.setItem('presentPlayingchoice', choosen);

      // levelPlaying.setItem('presentPlayerScore', 0);
      
    }
  }else{
    alert("Please pick a number between 1-9");
  }
  
}

function showMe(){
  setNewHighestPlayer();
  numberPicked.value = 0;
  numPickGlobal = 0;

  botton.style.visibility='visible';
  numberPicked.style.visibility='visible';
  // numberPicked2.style.visibility='hidden';

  pause.style.visibility="hidden";
  coninue.style.visibility="hidden";
  stopper.style.visibility= "visible";
  stopPauseAudio();
  stopper.style.visibility = "hidden";
}

//users selection campared and increament or decrement in point are assigne to the
//appropraite variables
function occurance(){
  if(getRandmGlobal == numPickGlobal){
    tempResult = tempResult - 1;
    life.innerHTML = tempResult; //life
    occur.innerHTML = parseInt(occur.innerHTML) + 1;
    point.innerHTML = gamePointJs; 
  }

  checkScores();

}

//re-assigning images and value to new button response
function changeImage(item, randm){
  if(randm == 1 ){
    item.style.backgroundColor = "red";
  }else if(randm == 2){
    item.style.backgroundColor = "skyBlue";
  }else if(randm == 3){
    item.style.backgroundColor = "green";
  }else if(randm == 4){
    item.style.backgroundColor = "pink";
  }else if(randm == 5){
    item.style.backgroundColor = "yellow";
  }else if(randm == 6){
    item.style.backgroundColor = "gray";
  }else if(randm == 7){
    item.style.backgroundColor = "purple";
  }else if(randm == 8){
    item.style.backgroundColor = "brown";
  }else if(randm == 9){
    item.style.backgroundColor = "darkgoldenrod";
  }  
} 

//life and levels are handled in this method base on set conditions
function checkScores(){
  if(scoreJs == 50 ){

    scoreJs = 0;
    scores.innerHTML=scoreJs;

    life.innerHTML= tempResult + 3; //incrase lfe here
    gameLevelJs = gameLevelJs + 1;

    gameLevel.innerHTML= gameLevelJs;
    

    point.innerHTML = gamePointJs;

    tempResult = parseInt(life.innerHTML);

    levelAudio();
  } 
  //No matter what happen makesure you do this 

  
}

function pauseGame(){
  clearInterval(inter);
  clearInterval(bakAud);
  pause.style.visibility="hidden";
  coninue.style.visibility="visible";
  stopper.style.visibility= "visible";
  stopPauseAudio();
  item1.style.visibility='hidden';
  item2.style.visibility='hidden';
  item3.style.visibility='hidden';
  item4.style.visibility='hidden';
  item5.style.visibility='hidden';
  item6.style.visibility='hidden';
  item7.style.visibility='hidden';
  item8.style.visibility='hidden';
  item9.style.visibility='hidden';
}

function coninueGame(){
  
  inter = setInterval(myTimer, tt);
  bakAud = setInterval(backAudioPlay, 15000);
  pause.style.visibility="visible";
  coninue.style.visibility="hidden";
  stopper.style.visibility= "visible";
  // backAudioPlay();
  item1.style.visibility='visible';
  item2.style.visibility='visible';
  item3.style.visibility='visible';
  item4.style.visibility='visible';
  item5.style.visibility='visible';
  item6.style.visibility='visible';
  item7.style.visibility='visible';
  item8.style.visibility='visible';
  item9.style.visibility='visible';
}

function stopGame(){
  clearInterval(inter);
  clearInterval(bakAud);
  showMe();

  stopPauseAudio();

  item1.style.visibility='hidden';
  item2.style.visibility='hidden';
  item3.style.visibility='hidden';
  item4.style.visibility='hidden';
  item5.style.visibility='hidden';
  item6.style.visibility='hidden';
  item7.style.visibility='hidden';
  item8.style.visibility='hidden';
  item9.style.visibility='hidden';

  pause.style.visibility="hidden";
  coninue.style.visibility="hidden";
  stopper.style.visibility= "hidden";
  botton.style.visibility= "visible";

  tempResult = 100;
  scoreJs = 0;
  gamePointJs =0;
  gameLevelJs = 1;

  getRandmGlobal = 0; 
  numPickGlobal = 0;

  gameLevel.innerHTML = gameLevelJs;
  point.innerHTML = gamePointJs;
  numberPicked2.innerHTML = 0;

}

function levelAudio() {
  let levels = new Audio('7.wav');
  levels.play();
}


function correctAudio() {
  let getIt = new Audio('3.wav');
  getIt.play();
}

function wrongtAudio () {
	let wrongIt = new Audio('2.wav');
	wrongIt.play();
}

function backAudioStop(){
  let backStopAudio  = new Audio('6.wav');
  backStopAudio.pause();
}

function backAudioPlay(){
  let backStopAudio  = new Audio('6.wav');
  backStopAudio.play();
}

function stopPauseAudio() {
  let stopGame = new Audio('8.wav');
  stopGame.play();
}

localStorage.getItem('dIfficultHighestScore');
  let highestDifficultName = localStorage.getItem('dIfficultHighestName');


function setNewHighestPlayer(){
  if(choosen == "Expert"){

    //if local storage exist 
    if(localStorage.getItem('expertHighestScore')){
      //run
      let getScore = localStorage.getItem('expertHighestScore');

      if(getScore < gamePointJs){
        localStorage.setItem('expertHighestScore', gamePointJs);
        localStorage.setItem('expertHighestName', playerName);
      }
    }else{
      localStorage.setItem('expertHighestScore', gamePointJs);
      localStorage.setItem('expertHighestName', playerName);
    }
  }

  
  if(choosen == "DIfficult"){

    //if local storage exist 
    if(localStorage.getItem('difiHighestScore')){
      //run
      let getScore = localStorage.getItem('difiHighestScore');

      if(getScore < gamePointJs){
        localStorage.setItem('difiHighestScore', gamePointJs);
        localStorage.setItem('difiHighestName', playerName);
      }
    }else{
      localStorage.setItem('difiHighestScore', gamePointJs);
      localStorage.setItem('difiHighestName', playerName);
    }
  }






  if(choosen == "Normal"){
    if(localStorage.getItem('normalHighestScore') != ""){
      let getScore = localStorage.getItem('normalHighestScore');

      if(getScore < gamePointJs){
        localStorage.setItem('normalHighestScore', gamePointJs);
        localStorage.setItem('normalHighestName', playerName);
      }
    }else{
      localStorage.setItem('normalHighestScore', gamePointJs);
      localStorage.setItem('normalHighestName', playerName);
    }
  }

  if(choosen == "Easy"){
    if(localStorage.getItem('easyHighestScore') != ""){
      let getScore = localStorage.getItem('easyHighestScore');

      if(getScore < gamePointJs){
        localStorage.setItem('easyHighestScore', gamePointJs);
        localStorage.setItem('easyHighestName', playerName);
      }
    }else{
      localStorage.setItem('easyHighestScore', gamePointJs);
      localStorage.setItem('easyHighestName', playerName);
    }
  }

  if(choosen == "Beginner"){
    if(localStorage.getItem('beginnersHighestScore') != ""){
    let getScore = localStorage.getItem('beginnersHighestScore');

    if(getScore < gamePointJs){
      localStorage.setItem('beginnersHighestScore', gamePointJs);
      localStorage.setItem('beginnersHighestName', playerName);
    }
    }else{
      localStorage.setItem('beginnersHighestScore', gamePointJs);
      localStorage.setItem('beginnersHighestName', playerName);
    }
  }
}


function getHighestPlayer(){

  let higestExpertScores = localStorage.getItem('expertHighestScore');
  let highestExpertName = localStorage.getItem('expertHighestName');

  let highestDifficultScore = localStorage.getItem('difiHighestScore');
  let highestDifficultName = localStorage.getItem('difiHighestName');

  let highestNormalScore = localStorage.getItem('normalHighestScore');
  let highestNormalName = localStorage.getItem('normalHighestName');

  let highestEasyScore = localStorage.getItem('easyHighestScore');
  let highestEasyName =localStorage.getItem('easyHighestName');

  let highestBeginnersScore = localStorage.getItem('beginnersHighestScore');
  let highestBeginnersName = localStorage.getItem('beginnersHighestName');

  alert(`
  BEST SCORE RECORD
  .................
  1: Expert -- ${highestExpertName} score: ${higestExpertScores}
  2: Difficult -- ${highestDifficultName} score: ${highestDifficultScore}
  3: Normal -- ${highestNormalName} score: ${highestNormalScore}
  4: Easy -- ${highestEasyName} score: ${highestEasyScore}
  5: Beginner -- ${highestBeginnersName} score: ${highestBeginnersScore}

  
  `);

}

function clearSaveGame(){
  // variable.....................
  //saveGameScore:
  //saveGameLife:
  //saveGameChoosen:
  //saveGameNumberPic:
	
  	localStorage.setItem('saveGameScore', '0'); //scoreJs
  	localStorage.setItem('saveGameLife', '0'); //gamePointJs
	localStorage.setItem('saveGameLevel', '0');  //gameLevelJs
	localStorage.setItem('saveGameChoosen', '0'); //choosen
	localStorage.setItem('saveGameNumberPic', '0'); //numPickGlobal
	localStorage.setItem('saveGameLevelPlaying', '0'); //levelPlaying

	
	
}

function saveGame(){
	//saveGameScore:
  	//saveGameLife:
  	//saveGameChoosen:
  	//saveGameNumberPic:
	localStorage.setItem('saveGameScore', scoreJs); //scoreJs
  	localStorage.setItem('saveGameLife', gamePointJs); //gamePointJs
	localStorage.setItem('saveGameLevel', gameLevelJs);  //gameLevelJs
	localStorage.setItem('saveGameChoosen', choosen); //choosen
	localStorage.setItem('saveGameNumberPic', numPickGlobal); //numPickGlobal
	localStorage.setItem('saveGameLevelPlaying', levelPlaying); //levelPlaying
	


}









