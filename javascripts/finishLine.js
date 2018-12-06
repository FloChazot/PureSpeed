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

//Deplacement de la finishLine avec la souris
function moveYourButt (){
  dragElement(document.getElementById("finishLine"));

  function dragElement(finishline){
    let position1;
    let position2;
    finishline.onmousedown = dragMouseDown;

    function dragMouseDown(cursor){
      cursor = cursor || window.event;
      cursor.preventDefault();
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(cursor) {
      cursor = cursor || window.event;
      cursor.preventDefault();
      position1 = position2 - cursor.clientX;
      position2 = cursor.clientX;
      finishline.style.left = (finishline.offsetLeft - position1) + "px";
      document.getElementById("finishLineSelectBox").value = finishline.offsetLeft;
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

// Changement de la hauteur de la finisLine en fonction du nombre de contestant
function constestantSizeChangeFinishLine(){
  if(contestantElements.length > 0){
    document.getElementById("finishLine").style.height = ((Number(constestantSize) + 5) * contestantElements.length + 5) + "px";
  }else{
    document.getElementById("finishLine").style.height = 0 + "px";
  }
};
