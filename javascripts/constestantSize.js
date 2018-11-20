
let constestantSize = document.getElementById("contestantSizeSelectBox").value;
let firstContestant = document.getElementById("firstContestant").style;
let secondContestant = document.getElementById("secondContestant").style;

// Taille des contestants au lancement de la page
firstContestant.width = constestantSize + "px";
firstContestant.height = constestantSize + "px";
firstContestant.borderRadius = constestantSize + "px";
secondContestant.width = constestantSize + "px";
secondContestant.height = constestantSize + "px";
secondContestant.borderRadius = constestantSize + "px";


// Changement de la taille des contestants au cours de la saisie
function constestantSizeChange (){

  //Reset la postion des contestants
  firstContestant.left = 0 + "px";
  secondContestant.left = 0 + "px";

  // Changement de la taille des contestants
  constestantSize = document.getElementById("contestantSizeSelectBox").value;
  firstContestant.width = constestantSize + "px";
  firstContestant.height = constestantSize + "px";
  firstContestant.borderRadius = constestantSize + "px";
  secondContestant.width = constestantSize + "px";
  secondContestant.height = constestantSize + "px";
  secondContestant.borderRadius = constestantSize + "px";

  // Changement de la hauteur de la finisLine en fonction de la taille des contestants
  constestantSizeChangeFinishLine();
};
