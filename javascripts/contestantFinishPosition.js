/** Créer un nouveau concurrent */
let podiumStep = 0;
let color;
function contestantFinishPosition (id, offsetTop){
  let contestantFinishPositionNumber = id.substr(10);
  let constestantSizeNumber = Number(constestantSize);
  let newfinishPositionLeft = Number(document.getElementById("finishLineSelectBox").value) + 20 + "px";
  let newpodium =

  podium (podiumStep);
    function podium(b){
      if(podiumStep>=0){
        podiumStep++;
        return podiumStep;
      }
    };


function podium (color, podiumStep){
      switch (podiumStep) {
        case "0":
          console.log(1er),
          color = "#FFD700",
          podiumStep++;
          break;
        case 1:
        console.log(2eme),
          color = "#C0C0C0",
          podiumStep++;
          break;
        case 2:
        console.log(3eme),
          color = "#C0C0C0",
          podiumStep++;
          break;
        default:
        podiumStep++;
        color = "#000";
      }
    }

console.log("color : " + color);
console.log("podiumStep : " + podiumStep);

    /** Création des données à injecter */
    let newfinishPosition = document.createElement('div');
    newfinishPosition.id = contestantId + "finishPosition"+ id;
    newfinishPosition.className = "contestantFinishPosition";
    newfinishPosition.style.left = newfinishPositionLeft;
    newfinishPosition.style.top = (contestantFinishPositionNumber * (constestantSizeNumber + 5) + 5) + "px";
    // newfinishPosition.innerHTML = ''<img id=trophy src="./images/trophy.svg" height="50px" background-color=' + color + '>'';
    // newfinishPosition.innerHTML = podiumStep;
    // newfinishPosition.innerHTML = newpodium;

    /** Création de la div */
    contestantsPositionsContainer.appendChild(newfinishPosition);
    ;
};
