/** Player One */
let leftPositionPlayerOne = 0;
let leftPositionPlayerTwo = 0;
let onRacePlayerOne = true;
let onRacePlayerTwo = true;

window.onkeydown = function(event) {
  if(event.keyCode == 65 && onRacePlayerOne == true) {
    leftPositionPlayerOne += contestantsSpeed();
    document.getElementById("contestant0").style.left = leftPositionPlayerOne + "px";
    onRacePlayerOne = false;
  }else{
    if(event.keyCode == 80 && onRacePlayerTwo == true) {
    leftPositionPlayerTwo += contestantsSpeed();
    document.getElementById("contestant1").style.left = leftPositionPlayerTwo + "px";
    onRacePlayerTwo = false;
    };
  };
};

window.onkeyup = function(event) {
  if(event.keyCode == 65 && onRacePlayerOne == false) {
    onRacePlayerOne = true;
  }else{
    if(event.keyCode == 80 && onRacePlayerTwo == false) {
    onRacePlayerTwo = true;
  };
  };
};
