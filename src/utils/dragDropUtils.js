export const reorderList = (wordList, nounList, locationDetails) => {
  // make a new copy of the source list each time
  const sourceList =
    locationDetails.source.droppableId === 'words'
      ? wordList.slice()
      : nounList.slice();

  // make a copy of the destination list
  const destinationList =
    locationDetails.destination.droppableId === 'words'
      ? wordList.slice()
      : nounList.slice();

  // get draggedItem out of the sourceList
  const [draggedItem] =
    sourceList
      .slice(locationDetails.source.index, locationDetails.source.index + 1);

  // check if dnd is th sameList
  const sameList = locationDetails.source.droppableId === locationDetails.destination.droppableId;

  // if dnd is in the same list
  if (sameList) {
    // make a copy of the sourceList - will mutate copy and return it
    const sourceCopy = sourceList.slice();
    // remove dragged using source index from sourceCopy
    sourceCopy.splice(locationDetails.source.index, 1);
    // insert dragged item into sourceCopy
    sourceCopy.splice(locationDetails.destination.index, 0, draggedItem);

    // return two lists 
    return [destinationList, sourceCopy];
  }

  // if dnd is NOT the same list
  if (!sameList) {
    // add dragged item to destinationList 
    destinationList.splice(locationDetails.destination.index, 0, draggedItem);
    // remove dragged item from sourceList
    sourceList.splice(locationDetails.source.index, 1);
  }

  // return two lists
  return [destinationList, sourceList];
};

export const checkDrinksWin = (wordList, drinksWinOrder) => {
  const winArray = wordList.map((item, index) => {
    return item.id === drinksWinOrder[index]?.id;
  });

  // allow for index 3 word to be any noun
  winArray.splice(3, 1, true);
  // check win condition 1 - all are true in win array
  const conditionOne =
    winArray.includes(false)
      ? false
      : true;

  // check win condition 2 - length and conditionOne both must be true
  const conditionTwo =
    winArray.length === 5 && conditionOne
      ? true
      : false;

  return conditionTwo;
};
