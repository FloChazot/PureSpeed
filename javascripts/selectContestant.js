/** Créer un nouveau concurrent */
addContestantButton.onclick = function (){
  /** Création */
  let newContestant = document.createElement('div');
  newContestant.id = contestantId + contestantElements.length;
  newContestant.className = contestantClass;
  document.body.appendChild(newContestant);

  /** Mise à jour du tableau contestantElements après création */
  contestantElements = Array.prototype.slice.call(document.getElementsByClassName(contestantClass));

  /** Modification de la hauteur de la finishLine*/
  constestantSizeChangeFinishLine()
};


/** Supprimer le dernier concurrent */
removeContestantButton.onclick = function (remove){
  /** Suppression */
  if(contestantElements.length > 0){
    let remove = contestantId + (contestantElements.length - 1);
    remove = document.getElementById(remove);
    remove.parentNode.removeChild(remove);

  /** Mise à jour du tableau contestantElements après création */
  contestantElements = Array.prototype.slice.call(document.getElementsByClassName(contestantClass));

  /** Modification de la hauteur de la finishLine*/
  constestantSizeChangeFinishLine()
  }
};