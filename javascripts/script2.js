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

  /** First Contestant déplacement*/
    firstContestantInterval = setInterval(function(){
    if(firstContestantPosition >= finishLine - 40){
      clearInterval(firstContestantInterval)}
      else {firstContestantPosition += vitesseDeplacement ();
      firstContestantElement.style.left = firstContestantPosition + "px";
    }}, 32);

  /** Second Contestant déplacement*/
    secondContestantInterval = setInterval(function(){
    if(secondContestantPosition >= finishLine-40){
      clearInterval(secondContestantInterval)}
      else {secondContestantPosition += vitesseDeplacement ();
      secondContestantElement.style.left = secondContestantPosition + "px"
    }}, 32);
}
