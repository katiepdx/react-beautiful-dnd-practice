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

export const checkWin = (wordList, winListOrder) => {
  const winCondition = wordList.map((item, index) => {
    return item.id === winListOrder[index].id;
  });

  return winCondition.includes(false) ? false : true;
};
