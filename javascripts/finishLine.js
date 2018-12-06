function pospos (pos1, pos2){
let pos1 = 0;
let pos2 = 0;
console.log("OUT - pos1 : " + pos1 + " - pos2 : " + pos2);
return pos1;
return pos2;
};

// Position de la FinishLine au lancement de la page
let finishLineLeft = document.getElementById("finishLineSelectBox").value;
document.getElementById("finishLine").style.left = finishLineLeft + "px";
document.getElementById("finishLine").offsetLeft = finishLineLeft;

// Changement de la postion de la FinishLine au cours de la saisie
function finishLinePlace(){
  pospos();
  finishLineLeft = document.getElementById("finishLineSelectBox").value;
  document.getElementById("finishLine").style.left = finishLineLeft + "px";
  document.getElementById("finishLine").offsetLeft = finishLineLeft;
  pos1 = document.getElementById("finishLineSelectBox").value;
  pos2 = document.getElementById("finishLineSelectBox").value;
  console.log("MOVE LINE - pos1 : " + pos1 + " - pos2 : " + pos2);
  pospos(pos1, pos2);
};

// Changement de la hauteur de la finisLine en fonction du nombre de contestant
function constestantSizeChangeFinishLine(){
  if(contestantElements.length > 0){
    document.getElementById("finishLine").style.height = ((Number(constestantSize) + 5) * contestantElements.length + 5) + "px";
  }else{
    document.getElementById("finishLine").style.height = 0 + "px";
  }
};

//Deplacement de la finishLine avec la souris
dragElement(document.getElementById("finishLine"));

function dragElement(finishline) {
pospos();
 finishline.onmousedown = dragMouseDown;

  function dragMouseDown(e){
    e = e || window.event;
    e.preventDefault();
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

console.log("1 - pos1 = pos2 + e.clientX ==> " + pos1 + " = " + pos2 + " - " + e.clientX);
    pos1 = pos2 - e.clientX;
console.log("2 - pos1 = pos2 + e.clientX ==> " + pos1 + " = " + pos2 + " - " + e.clientX);
    pos2 = e.clientX;
    finishline.style.left = (finishline.offsetLeft - pos1) + "px";
    document.getElementById("finishLineSelectBox").value = finishline.offsetLeft;
console.log(".............." + pos2);
    return pos1;
    return pos2;
  }

  function closeDragElement(pos1, pos2) {
    pospos(pos1, pos2);
    document.onmouseup = null;
    document.onmousemove = null;

  }
}
