/** Fonction déterminant la vitesse de déplacement du concurrent en fonction d'une variable aléatoire Math.random. */
function contestantsSpeed (){
  let random =  Math.random();
  if(random <0.1){
    vitesse = 0;
  }else if(random >0.8){
    vitesse = Math.round(random*8);
  }else if(random >0.6){
    vitesse = Math.round(random*6);
  }else if(random >0.4){
    vitesse = Math.round(random*4);
  }else{
    vitesse = Math.round(random*2);
  }
  return vitesse;
}
