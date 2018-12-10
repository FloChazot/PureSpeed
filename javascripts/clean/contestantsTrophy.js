/** Créer un nouveau trophé */
function createTrophy (id, offsetTop){
  /** Récupération de la place du concurrent contenu dans l'ID de sa 'div' */
  let contestantFinishPositionNumber = id.substr(10);
  /** Récupération de la position de la finisline pour placer le trophée */
  let newTrophyLeftPosition = Number(document.getElementById(finishlineRangeBox).value) + 20 + "px";
  /** Choix du trophée à afficher en fonction de la position du concurrent dans la course */
  podiumStep = podium();
      function podium(){
      if(podiumStep == 0){
        trophy = 'fas fa-trophy';
        trophyColor = '#FFD700'; /** Position 1 => Trophée Or */
        podiumStep++;
      }else if(podiumStep == 1){
        trophy = 'fas fa-trophy';
        trophyColor = '#C0C0C0'; /** Position 2 => Trophée Argent */
        podiumStep++;
      }else if(podiumStep == 2){
        trophy = 'fas fa-trophy';
        trophyColor = '#cd7f32'; /** Position 3 => Trophée Bronze */
        podiumStep++;
      }else{
        /** Position 4+ => Fanion avec position dedans */
        trophy = 'fas fa-certificate';
        trophyColor = '#F5F5F5';
        podiumStep++;
      }
      return podiumStep;
    };
  /** Création des données pour le nouveau trophée */
  let newTrophy = document.createElement('div');
  newTrophy.id = id + "Trophy";
  newTrophy.className = contestantTrophyClass;
  newTrophy.style.left = newTrophyLeftPosition;
  newTrophy.style.top = contestantFinishPositionNumber * (constestantSize + 5) + 13 + "px";
  newTrophy.style.fontSize = "2em";
  newTrophy.innerHTML = '<i class = "' + trophy + '" color = "' + trophyColor + '"></i>';
  /** Création de la div */
  contestantsTrophiesContainer.appendChild(newTrophy);
  /** Mise à jour du tableau contestantTrophyElements après création */
  contestantTrophyElements = Array.prototype.slice.call(document.getElementsByClassName(contestantTrophyClass));
};

/** Supprimer tous les trophés */
function removeAllTrophies(){
  for(i=0; i < contestantTrophyElements.length; i++){
  contestantsTrophiesContainer.removeChild(contestantsTrophiesContainer.childNodes[0]);
  };
  /** Mise à jour du tableau contestantTrophyElements après suppression des trophés dans l'index */
  contestantTrophyElements = Array.prototype.slice.call(document.getElementsByClassName(contestantTrophyClass));
  /** Plus de trophés donc le podiumStep repart à 0 pour redonner le trophé en Or */
  podiumStep = 0;
};
