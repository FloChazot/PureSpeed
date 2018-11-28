// Position de la FinishLine au lancement de la page
let finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
document.getElementById("finishLine").style.marginLeft = finishLineMarginLeft + "px";


// Changement de la postion de la FinishLine au cours de la saisie
function finishLinePlace(){
finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
document.getElementById("finishLine").style.marginLeft = finishLineMarginLeft + "px";
};


// Changement de la hauteur de la finisLine en fonction de la taille des contestants
// Appelé dans constestantSize.js => constestantSizeChange()
// +2 => Pixels écartant les deux contestants : index.html => .Second.top
function constestantSizeChangeFinishLine(){
if(contestantNumber > 0){
document.getElementById("finishLine").style.height = ((Number(constestantSize) + 5) * contestantNumber + 5) + "px";
document.getElementById("finishLine").style.marginLeft = (constestantSize * 4) + "px";
document.getElementById("finishLineSelectBox").value = constestantSize * 4;
}else{
document.getElementById("finishLine").style.height = 0 + "px";
}
};
