addContestant();
addContestant();
addContestant();

function resetRace(){
  removeTrophies();
  resetContestantsPositions();

  continueRace = true;
  stoprun = false;
  flip = 0;
  podiumStep = 0;
}



function resetContestantsPositions(){
  if(stoprun == true){
    contestantElements.forEach(function(element){
      element.style.left = "0px";
    });
  };
};
