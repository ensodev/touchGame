let expert = document.getElementById('expert');
let difficult = document.getElementById('difficult');
let normal = document.getElementById('normal');
let easy = document.getElementById('easy');

let clearScores1 = document.getElementById('clearScores1');
clearScores1.addEventListener('click', clearScores);

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


    // display scores
    expert.innerHTML = highestExpertName + " -- " +  higestExpertScores;
    difficult.innerHTML = highestDifficultName + " -- " +  highestDifficultScore;
    normal.innerHTML = highestNormalName + " -- " +  highestNormalScore;
    easy.innerHTML = highestEasyName + " -- " +  highestEasyScore; 




  
    // alert(`
    // BEST SCORE RECORD
    // .................
    // 1: Expert -- ${highestExpertName} score: ${higestExpertScores}
    // 2: Difficult -- ${highestDifficultName} score: ${highestDifficultScore}
    // 3: Normal -- ${highestNormalName} score: ${highestNormalScore}
    // 4: Easy -- ${highestEasyName} score: ${highestEasyScore}
    // 5: Beginner -- ${highestBeginnersName} score: ${highestBeginnersScore}
  
    
    // `);
}

function clearScores(){
    localStorage.setItem('expertHighestScore', "0");
    localStorage.setItem('expertHighestName', "");

    localStorage.setItem('difiHighestScore', "0");
    localStorage.setItem('difiHighestName', "");

    localStorage.setItem('normalHighestScore', "0");
    localStorage.setItem('normalHighestName', "");
  
    localStorage.setItem('easyHighestScore', "0");
    localStorage.setItem('easyHighestName', "");
  
    localStorage.setItem('beginnersHighestScore', "0");
    localStorage.setItem('beginnersHighestName', "");

    alert("All scores Cleared");

    getHighestPlayer();

}


getHighestPlayer();


