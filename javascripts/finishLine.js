// Position de la FinishLine au lancement de la page
let finishLineLeft = document.getElementById("finishLineSelectBox").value;
document.getElementById("finishLine").style.left = finishLineLeft + "px";
document.getElementById("finishLine").offsetLeft = finishLineLeft;

// Changement de la postion de la FinishLine au cours de la saisie
function finishLinePlace(){
  finishLineLeft = document.getElementById("finishLineSelectBox").value;
  document.getElementById("finishLine").style.left = finishLineLeft + "px";
  document.getElementById("finishLine").offsetLeft = finishLineLeft;
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
 let pos1;
 let pos2;
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
console.log("e.clientX : " + e.clientX);
    pos1 = pos2 - e.clientX;
console.log("pos1 : " + pos1);
    pos2 = e.clientX;
console.log("pos2 : " + pos2);
    finishline.style.left = (finishline.offsetLeft - pos1) + "px";
    document.getElementById("finishLineSelectBox").value = finishline.offsetLeft;
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
