for(let i = 0; i <= 1; i++){
  let newContestant = document.createElement('div');
  newContestant.id = contestantId + contestantElements.length;
  newContestant.className = contestantClass;
  newContestant.style.top = contestantElements.length * (constestantSize + 5) + 5 + "px";
  contestantsContainer.appendChild(newContestant);
  contestantElements = Array.prototype.slice.call(document.getElementsByClassName(contestantClass));
};
changeFinishLineSize();
