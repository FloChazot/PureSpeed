function startRace (){
let continueRace = true;
console.log("pfff");
  contestantElements.forEach(function(element){
    let contestantPosition = parseInt(getComputedStyle(element)["left"]);
    /** Récupération de la finishline */
    let finishLineMarginLeft = document.getElementById("finishlineRangeBox").value;
    let finishLine = finishLineMarginLeft - 50;
    /** Fonction de course */
    const contestantInterval = setInterval(function(){
      if(continueRace && contestantPosition < finishLine){
        contestantPosition += contestantsSpeed ();
        if(contestantPosition < finishLine){
          element.style.left = contestantPosition + "px";
        }else{

          // A REVOIR !!!!!!!!!!!!!
          element.style.left = finishLine + "px";
          createTrophy(element.id, element.offsetTop);
          finishRace();
        };
      }else{

        // A REVOIR !!!!!!!!!!!!!
        console.log("continueRace : " + continueRace);
        clearInterval(contestantInterval);
      };
    }, 32);
  });
};


// A REVOIR !!!!!!!!!!!!!
function finishRace(){
  if(flip <= contestantElements.length){
    console.log("number : " + contestantElements.length);
    console.log("flip : " + flip);
    continueRace = true;
    flip++;
  }else{
    console.log(".......;");
  continueRace = false;
  }
  return continueRace;
};
