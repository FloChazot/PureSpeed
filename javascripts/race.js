function startRace(){
  if(onRace == false){
  onRace = true; /** Démarre un course uniquement si il n'y en a pas en cours */
  contestantElements.forEach(function(element){
    let contestantLeftPosition = parseInt(getComputedStyle(element)["left"]);
    /** Récupération de la distance à parcourir par rapport à la position de la finishline */
    finishLineLeftPosition = document.getElementById(finishlineRangeBox).value;
    /** Fonction de course */
    const contestantInterval = setInterval(function(){
      if(onRace && contestantLeftPosition < finishLineLeftPosition){
        contestantLeftPosition += contestantsSpeed (); /** fonction qui calcule le déplacement des concurrents */
        if(contestantLeftPosition < finishLineLeftPosition){
          element.style.left = contestantLeftPosition + "px"; /** Fait avancer le concurrent */
        }else{
          element.style.left = finishLineLeftPosition + "px"; /** Permet de racaler le concurrent sur la ligne d'arrivée */
          createTrophy(element.id, element.offsetTop);
        };
      }else{
        clearInterval(contestantInterval);
      };
    }, 32);
  });
  }else{
  resetRace();
  };
};

function resetRace(){
  if(onRace){
  onRace = false; /** onRace = false permet d'arrêter la fonction startRace en cours*/
  removeAllTrophyPosition();
  removeAllTrophies();
  resetAllContestantsLeftPosition();
  };
};
