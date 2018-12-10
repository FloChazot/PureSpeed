/** Gestion des intutilés de la finishline */
let finishlineRangeBox = "finishlineRangeBox";
let finishline = "finishline";

/** Gestion des éléments & des intutilés pour les trophés */
/** contestantsTrophiesContainer de l'index : Utilisé dans contestantsTrophy.js*/
let contestantTrophyClass = "contestantTrophy";
let contestantTrophyElements = Array.prototype.slice.call(document.getElementsByClassName(contestantTrophyClass));


let contestantTrophyPositionClass = "contestantTrophyPosition";


/** Gestion des éléments & des intutilés pour les concurrents */
/** contestantsContainer de l'index : Utilisé dans contestantsNumber.js*/
let contestantId = "contestant";
let contestantClass = "contestant";
let constestantSize = 50; /** Taille du rond du concurrent, ne gère pas la taille dans le css */
let contestantElements = Array.prototype.slice.call(document.getElementsByClassName(contestantClass));

/** Gestion des éléments pour la course */
let onRace = false; /** Savoir si une course est en cours */
let podiumStep = 0; /** A 0 pour que le premier concurrent obtienne le trophé en Or */
