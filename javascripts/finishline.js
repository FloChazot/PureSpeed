/** Position de la FinishLine au lancement de la page */
let finishlineLeftPosition = Number(document.getElementById(finishlineRangeBox).value);
document.getElementById(finishline).style.left = finishlineLeftPosition + constestantSize + "px";

/** Changer la postion de la Finishline au cours de la saisie dans la finishlineRangeBox */
function movefinishlineWithRangeBox(){
  resetRace();
  if(Number(document.getElementById(finishlineRangeBox).value) >= 0){
    finishlineLeftPosition = Number(document.getElementById(finishlineRangeBox).value);
    document.getElementById(finishline).style.left = finishlineLeftPosition + constestantSize + "px";
  }else{
    document.getElementById(finishline).style.left = constestantSize + "px";
    document.getElementById(finishlineRangeBox).value = 0;
    finishlineLeftPosition = document.getElementById(finishlineRangeBox).value;
  };
};

/** Changer la postion de la Finishline avec la souris */
/** Fonction activée avec onmouseover */
function moveFinishline (){
  /** Récupération de l'élément à déplacer */
  dragElement(document.getElementById(finishline));

  /** Fonction de déplacement */
  function dragElement(finishline){
  /** Set des positions relatives pour calculer le déplacement */
    let position1;
    let position2;
    finishline.onmousedown = dragMouseDown;

    function dragMouseDown(cursor){
      resetRace();
      cursor = cursor || window.event;
      cursor.preventDefault();
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    };

    function elementDrag(cursor) {
      /** Gestion du déplacement de la finishline + modification de la RangeBox en live */
      cursor = cursor || window.event;
      cursor.preventDefault();
      position1 = position2 - cursor.clientX;
      position2 = cursor.clientX;
      if(position2 > constestantSize + 12){
        finishline.style.left = (finishline.offsetLeft - position1) + "px";
        document.getElementById(finishlineRangeBox).value = finishline.offsetLeft - constestantSize;
      }else{
        finishline.style.left = constestantSize + "px";
        document.getElementById(finishlineRangeBox).value = 0;
      };
    };

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    };
  };
};

/** Modification de la hauteur de la finishLine en fonction du nombre de concurrent*/
function changeFinishLineSize(){
  if(contestantElements.length > 0){
    document.getElementById(finishline).style.height = ((constestantSize + 5) * contestantElements.length + 5) + "px";
  }else{
    document.getElementById(finishline).style.height = 0 + "px";
  };
};
