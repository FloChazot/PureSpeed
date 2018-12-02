/** Créer un nouveau concurrent */
function contestantFinishPosition (id, offsetTop){
  /** Création */
  console.log("id : " + id + " -- offsetTop : " + offsetTop);
  let newfinishPosition = document.createElement('div');

  newfinishPosition.id = contestantId + "finishPosition"+ id;
  newfinishPosition.className = "contestantFinishPosition";
  newfinishPosition.style.clientTop = offsetTop;
  container.appendChild(newfinishPosition);

  console.log(newfinishPosition.style.clientTop);
  ;
};
