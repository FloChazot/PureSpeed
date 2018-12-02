// Fonction déterminant la vitesse de déplacement du Contestant
// en fonction d'une variable aléatoire Math.random.

function vitesseDeplacement (){
  let random =  Math.random();
  if(random <0.1){
    vitesse = 0;
    // console.log("- V2 - 0     " + random + "  --  " + vitesse);
  }else if(random >0.8){
    vitesse = Math.round(random*8);
    // console.log("- V2 - 20     " + random + "  --  " + vitesse);
  }else if(random >0.6){
    vitesse = Math.round(random*6);
    // console.log("- V2 - 15     " + random + "  --  " + vitesse);
  }else if(random >0.4){
    vitesse = Math.round(random*4);
    // console.log("- V2 - 10     " + random + "  --  " + vitesse);
  }else{
    vitesse = Math.round(random*2);
    // console.log("- V2 - 5     " + random + "  --  " + vitesse);
  }
  return vitesse;
}
