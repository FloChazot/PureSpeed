//  let contestantPosition = 0;
let contestantInterval = 0;

let contestantId = "contestant";
let contestantClass = "contestant";
let contestantElements = Array.prototype.slice.call(document.getElementsByClassName(contestantClass));

race.onclick = function(race){
race.preventDefault();
// document.getElementsByClassName(contestantClass).forEach(function(elm) {
//   elm.style["left"] = "0px";
// });
racecontestant ();
};
