/** Lancer une nouvelle course */
function startRace(){
  if(onRace == false){
  onRace = true; /** Démarre un course uniquement si il n'y en a pas en cours */
  contestantElements.forEach(function(element){
    let contestantLeftPosition = parseInt(getComputedStyle(element)["left"]);
    /** Récupération de la distance à parcourir par rapport à la position de la finishline */
    let finishLineLeftPosition = document.getElementById(finishlineRangeBox).value - constestantSize;
    /** Fonction de course */
    const contestantInterval = setInterval(function(){
      if(onRace && contestantLeftPosition < finishLineLeftPosition){
        contestantLeftPosition += contestantsSpeed (); /** fonction qui calcule le déplacement des concurrents */
        if(contestantLeftPosition < finishLineLeftPosition){
          element.style.left = contestantLeftPosition + "px"; /** Fait avancer le concurrent */
        }else{
          element.style.left = finishLineLeftPosition + "px"; /** Permet de racaler le concurrent sur la ligne d'arrivée */
          createTrophy(element.id, element.offsetTop); /** Crée le trophé pour le concurrent qui est arrivé */
        };
      }else{
        clearInterval(contestantInterval);
      };
    }, 32);
  });
}else{
  resetRace(); /**Remet les concurrents au départ et enlève les trophées si une course est en cours */
};
};

 /**Remet les concurrents au départ et enlève les trophées si une course est en cours */
function resetRace(){
  onRace = false; /** onRace = false permet d'arrêter la fonction startRace en cours*/
  removeAllTrophies();
  resetAllContestantsLeftPosition();
};
