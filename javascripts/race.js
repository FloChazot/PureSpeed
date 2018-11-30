function racecontestant (){
  let continueRace = true;
  
  contestantElements.forEach(function (element){
    let contestantPosition = parseInt(getComputedStyle(element)["left"]);

    /** Reset de la position des ronds pour le départ*/
    //let contestantPosition = 0;
    contestantInterval = 0;
    element.style.left = contestantPosition + "px";

    /** Récupération de la finishline */
    let finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
    let finishLine = finishLineMarginLeft - constestantSize;

    /** Fonction de course */
    contestantInterval = setInterval(function(){
      if(continueRace && contestantPosition < finishLine){

        contestantPosition += vitesseDeplacement ();
        if(contestantPosition < finishLine){
          console.log("P1 : " + element.id + " : "  + element.style.left + " + " + vitesse + " => " + contestantPosition);
          element.style.left = contestantPosition + "px";
        }else{
          continueRace = false;
          console.log("P2 : " + element.id + " : "  + element.style.left + " + " + vitesse + " => " + contestantPosition);
          element.style.left = finishLine + "px";
          console.log("P2C : " + element.id + " : "  + element.style.left);
          clearInterval(contestantInterval);
        }
      }
    }, 32);

  });
}
