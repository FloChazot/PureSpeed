/** Créer un nouveau trophée */
function createTrophy (id, offsetTop){
  /** Récupération de la place du concurrent contenu dans l'ID de sa 'div' */
  let contestantFinishPositionNumber = id.substr(10);
  /** Récupération de la position de la finisline pour placer le trophée */
  let newTrophyLeftPosition = Number(document.getElementById(finishlineRangeBox).value) + 20 + "px";
  /** Choix du trophée à afficher en fonction de la position du concurrent dans la course */
  podiumStep = podium();
      function podium(){
      if(podiumStep == 0){
        /** Position 1 => Trophée Or */
        trophy = 'fas fa-trophy';
        trophyColor = '#FFD700';
        podiumStep++;
      }else if(podiumStep == 1){
        /** Position 2 => Trophée Argent */
        trophy = 'fas fa-trophy';
        trophyColor = '#C0C0C0';
        podiumStep++;
      }else if(podiumStep == 2){
        /** Position 3 => Trophée Bronze */
        trophy = 'fas fa-trophy';
        trophyColor = '#cd7f32';
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
  /** Mise à jour du tableau contestantElements après création */
  contestantTrophyElements = Array.prototype.slice.call(document.getElementsByClassName(contestantTrophyClass));
};


// A REVOIR !!!!!!!!!!!!!
/** Retirer tous les trophées */
function removeTrophies(){
  for(i=0; i < contestantTrophyElements.length; i++){
    let removeTrophy = document.getElementById(contestantsTrophiesContainer);
    console.log(removeTrophy);
    removeTrophy.removeChild(removeTrophy.childNodes[0]);
  };
  contestantTrophyElements = Array.prototype.slice.call(document.getElementsByClassName(contestantTrophyClass));
};
