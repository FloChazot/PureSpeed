// Position de la FinishLine au lancement de la page
let finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
document.getElementById("finishLine").style.marginLeft = finishLineMarginLeft + "px";

// Changement de la postion de la FinishLine au cours de la saisie
function finishLinePlace(){
  finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
  document.getElementById("finishLine").style.marginLeft = finishLineMarginLeft + "px";
};

// Changement de la hauteur de la finisLine en fonction du nombre de contestant
function constestantSizeChangeFinishLine(){
  if(contestantElements.length > 0){
    document.getElementById("finishLine").style.height = ((Number(constestantSize) + 5) * contestantElements.length + 5) + "px";
  }else{
    document.getElementById("finishLine").style.height = 0 + "px";
  }
};
