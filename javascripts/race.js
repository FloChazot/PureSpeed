// let contestantElements = document.getElementsByClassName("contestant");

function racecontestant (){
    /** Récupération du concurrent*/

      let contestantElements = Array.prototype.slice.call(document.getElementsByClassName("contestant"));

      contestantElements.forEach(function (element){

        // clearInterval(contestantInterval);
          /** Reset de la position des ronds pour le départ*/
            contestantPosition = 0;
            element.style.left = contestantPosition + "px";

          /** Reset de l'interval de la fonction*/
            // clearInterval(contestantInterval);

          /** Récupération de la finishline */
            let finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
            let finishLine = finishLineMarginLeft - constestantSize;

          /** Fonction de course */
            contestantInterval = setInterval(function(){
              clearInterval(contestantInterval);
            if(contestantPosition <= finishLine){

              contestantPosition += vitesseDeplacement ();
              // console.log(contestantPosition);
                if(contestantPosition <= finishLine){
                  element.style.left = contestantPosition + "px"
                  }else{
                  element.style.left = finishLine + "px";
                  }
              }else{
              element.style.left = finishLine + "px";
              clearInterval(contestantInterval);
              }
            }, 32);
          });

      };


//
// // console.log(typeof contestantElements);
// contestantElements(function (e) {
//   console.log(e);
// });
// };

function fff (){
    /** Reset de la position des ronds pour le départ*/
      contestantPosition = 0;
      contestantElement.style.left = contestantPosition + "px";

    /** Reset de l'interval de la fonction*/
      clearInterval(contestantInterval);

    /** Récupération de la finishline */
      let finishLineMarginLeft = document.getElementById("finishLineSelectBox").value;
      let finishLine = finishLineMarginLeft - constestantSize;

    /** Fonction de course */
      contestantInterval = setInterval(function(){
      if(contestantPosition <= finishLine){
        contestantPosition += vitesseDeplacement (contestant);
        console.log(contestantPosition);
          if(contestantPosition <= finishLine){
            contestantElement.style.left = contestantPosition + "px"
            }else{
            contestantElement.style.left = finishLine + "px";
            }
        }else{
        contestantElement.style.left = finishLine + "px";
        clearInterval(contestantInterval)
        }
      }, 32);
    }
