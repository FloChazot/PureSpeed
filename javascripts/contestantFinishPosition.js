/** Créer un nouveau concurrent */
let podiumStep = 0;
let flip = 0;
let stoprun = false;

function contestantFinishPosition (id, offsetTop, continueRace){
  let contestantFinishPositionNumber = id.substr(10);
  let constestantSizeNumber = Number(constestantSize);
  let newfinishPositionLeft = Number(document.getElementById("finishLineSelectBox").value) + 20 + "px";

  podiumStep = podium();
    function podium(){
      if(podiumStep == 0){
        trophy = '<i class="fas fa-trophy" color="#FFD700"></i>';
        podiumStep++;
      }else if(podiumStep == 1){
        trophy = '<i class="fas fa-trophy" color=#C0C0C0></i';
        podiumStep++;
      }else if(podiumStep == 2){
        trophy = '<i class="fas fa-trophy" color=#cd7f32></i>';
        podiumStep++;
      }else{
        trophy = '<i class="fas fa-certificate" color="#F5F5F5"></i>';
        podiumStep++;
      }return podiumStep;
    };

  /** Création des données à injecter */
  let newfinishPosition = document.createElement('div');
  newfinishPosition.id = contestantId + "finishPosition"+ id;
  // newfinishPosition.id = contestantId + "finishPosition";
  newfinishPosition.className = "contestantFinishPosition";
  newfinishPosition.style.left = newfinishPositionLeft;
  newfinishPosition.style.top = contestantFinishPositionNumber * 55 + 13 + "px";
  newfinishPosition.style.fontSize = "2em";
  newfinishPosition.innerHTML = trophy;

  /** Création de la div */
  contestantsFinishsPositionscontainer.appendChild(newfinishPosition);

  flip = flips();
    function flips(){
      if(flip < contestantElements.length - 1){
        continueRace = true;
        startRace(continueRace);
        flip++;
      }else{
      stoprun = true;
      }
    return flip;
    return stoprun;
    };
};
