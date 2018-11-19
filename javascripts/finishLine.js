// Position de la FinishLine au lancement de la page
let finishLine = document.getElementById("finishLineSelectBox").value;
document.getElementById("finishLine").style.marginLeft = finishLine + "px";


// Changement de la postion de la FinishLine au cours de la saisie
function finishLinePlace(){
finishLine = document.getElementById("finishLineSelectBox").value;
document.getElementById("finishLine").style.marginLeft = finishLine + "px";
}
