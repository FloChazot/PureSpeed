let constestantSize = 50;
let contestantId = "contestant";
let contestantClass = "contestant";
let contestantElements = Array.prototype.slice.call(document.getElementsByClassName(contestantClass));

addContestantButton();
addContestantButton();
addContestantButton();

function resetRace(){
  if(stoprun == true){
    contestantElements.forEach(function(element){
      element.style.left = "0px";
    });

    for(i=0; i < contestantElements.length; i++){
      let divToRemove = document.getElementById("contestantsFinishsPositionscontainer");
      divToRemove.removeChild(divToRemove.childNodes[0]);
    };

    continueRace = true;
    stoprun = false;
    flip = 0;
    podiumStep = 0;
  };
// startRace();
};
