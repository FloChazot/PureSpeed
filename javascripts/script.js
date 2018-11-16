let firstCubeElement = document.getElementById("firstContestant");
let secondCubeElement = document.getElementById("secondContestant");
console.log(document.body.style);


let firstCubePosition = 0;
let secondCubePosition = 0;

let elementStyleLeft = 0;
let elementStyleTop = 0;

let firstCubeInterval=null;
let secondCubeInterval=null;

let newfinish = document.getElementById("finish").value;
document.getElementById("finishLine").style.marginLeft = newfinish + "px";

/**  Start new race button */
btn.onclick = function(newRace){
  newRace.preventDefault();


  /* Récupération de la distance à parcourir*/
  let newfinish = document.getElementById("finish").value;
  document.getElementById("finishLine").style.marginLeft = newfinish + "px";

  /** Reset de la position des ronds pour le départ*/
  firstCubePosition = 0;
  firstCubeElement.style.left = firstCubePosition + "px";
  secondCubePosition = 0;
  secondCubeElement.style.left = secondCubePosition + "px";

  /** Reset de la vitesse de déplacement*/
  clearInterval(firstCubeInterval);
  clearInterval(secondCubeInterval);

  /** Premier Cube déplacement*/
  firstCubeInterval = setInterval(function(){
  if(firstCubePosition >= newfinish-40){
    clearInterval(firstCubeInterval)}
    else {firstCubePosition += Math.round(Math.random()*5) ;
    firstCubeElement.style.left = firstCubePosition + "px"
    ;
  }}, 32);

  /** Second Cube déplacement*/
  secondCubeInterval = setInterval(function(){
  if(secondCubePosition >= newfinish-40){
    clearInterval(secondCubeInterval)}
    else {secondCubePosition += Math.round(Math.random()*5) ;
    secondCubeElement.style.left = secondCubePosition + "px"
  }}, 32);
}
