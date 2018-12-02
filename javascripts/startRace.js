function startRace (){
let continueRace = true;

contestantElements.forEach(function (element){
  let contestantPosition = parseInt(getComputedStyle(element)["left"]);

  /** Récupération de la finishline */
  let finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
  let finishLine = finishLineMarginLeft - 50;

  /** Fonction de course */
  const contestantInterval = setInterval(function(){
    if(continueRace && contestantPosition < finishLine){
      contestantPosition += vitesseDeplacement ();
      if(contestantPosition < finishLine){
        element.style.left = contestantPosition + "px";
      }else{
        continueRace = false;
        element.style.left = finishLine + "px";
        clearInterval(contestantInterval);
        contestantFinishPosition(element.id, element.offsetTop);
      }
    }
  }, 32);
});
}
