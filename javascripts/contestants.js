function addContestant (){
  resetRace()
  /** Création des paramètres de la div qui contient le concurrent*/
  let newContestant = document.createElement('div');
  newContestant.id = contestantId + contestantElements.length;
  newContestant.className = contestantClass;
    /** (constestantSize + 5) => taille du rond représentant le concurrent + distance entre chaque concurrent*/
    /** +5 : 5 pixels de décallage entre le haut du concurrent et le haut de a ligne d'arrivée */
  newContestant.style.top = contestantElements.length * (constestantSize + 5) + 5 + "px";
  /** Ajout de la div créé dans l'index */
  contestantsContainer.appendChild(newContestant);
  /** Mise à jour du tableau contestantElements après ajout du concurrent dans l'index */
  contestantElements = Array.prototype.slice.call(document.getElementsByClassName(contestantClass));
  changeFinishLineSize();
};

function removeContestant (){
  resetRace()
  /** Suppression du dernier concurrent créé en récupérant le contestantId*/
  if(contestantElements.length > 0){
    let remove = contestantId + (contestantElements.length - 1);
    remove = document.getElementById(remove);
    remove.parentNode.removeChild(remove);
    /** Mise à jour du tableau contestantElements après suppression du concurrent dans l'index */
    contestantElements = Array.prototype.slice.call(document.getElementsByClassName(contestantClass));
    changeFinishLineSize();
  }
};

function resetAllContestantsLeftPosition(){
  contestantElements.forEach(function(element){
    element.style.left = "0px";
  });
};
