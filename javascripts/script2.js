let firstContestantElement = document.getElementById("firstContestant");
let secondContestantElement = document.getElementById("secondContestant");

let firstContestantPosition = 0;
let secondContestantPosition = 0;

let firstContestantInterval = 0;
let secondContestantInterval = 0;

let elementStyleLeft = 0;
let elementStyleTop = 0;

/**  Start new race button */
btn.onclick = function(newRace){
  newRace.preventDefault();

  /** Reset de la position des ronds pour le départ*/
  firstContestantPosition = 0;
  firstContestantElement.style.left = firstContestantPosition + "px";
  secondContestantPosition = 0;
  secondContestantElement.style.left = secondContestantPosition + "px";

  clearInterval(firstContestantInterval);
  clearInterval(secondContestantInterval);

let finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
let finishLine = finishLineMarginLeft - constestantSize;
console.log("finishLineMarginLeft :" + finishLineMarginLeft);
console.log("constestantSize :" + constestantSize);
console.log("Balle Finish :" + finishLine);

  /** First Contestant déplacement*/
    firstContestantInterval = setInterval(function(){
    let finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
    if(firstContestantPosition >= finishLine){
      firstContestantElement.style.left = finishLine + "px";
      clearInterval(firstContestantInterval)
      console.log("firstContestantPosition : " + firstContestantPosition);
    }
      else {firstContestantPosition += vitesseDeplacement ();
      firstContestantElement.style.left = firstContestantPosition + "px";
      // console.log(firstContestantPosition)
    }}, 32);

  /** Second Contestant déplacement*/
    secondContestantInterval = setInterval(function(){
    let finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
    if(secondContestantPosition >= finishLine){

      clearInterval(secondContestantInterval)
      console.log("secondContestantPosition : " + secondContestantPosition);
    }
      else {secondContestantPosition += vitesseDeplacement ();
      if(secondContestantPosition >= finishLine){
        firstContestantElement.style.left = finishLine + "px";
      }else{
        secondContestantElement.style.left = secondContestantPosition + "px"
    }}}, 32);

}
