let contestantNumber = 0;
let contestantNumberListe = "";

/** Ajouter un concurrent */
addContestantButton.onclick = function (){
  contestantNumber += 1;
  let newContestant = document.createElement('div');
    newContestant.id = 'contestant' + contestantNumber;
    newContestant.className = 'contestant';
  document.body.appendChild(newContestant);
  /** Modification de la hauteur de la finishLine*/
  constestantSizeChangeFinishLine()
};

/** Supprimer le dernier concurrent */
removeContestantButton.onclick = function (remove){
  if(contestantNumber>0){
    let remove = 'contestant' + contestantNumber;
    remove = document.getElementById(remove);
        remove.parentNode.removeChild(remove);
        contestantNumber -= 1;
  }
  /** Modification de la hauteur de la finishLine */
  constestantSizeChangeFinishLine()
};
