export const reorderList = (wordList, nounList, locationDetails) => {
  const sourceList = locationDetails.source.droppableId === 'words' ? wordList.slice() : nounList.slice();
  const destinationList = locationDetails.destination.droppableId === 'words' ? wordList.slice() : nounList.slice();
  const sameList = locationDetails.destination.droppableId === locationDetails.source.droppableId;

  const [draggedItem] = sourceList.slice(locationDetails.source.index, locationDetails.source.index + 1);

  // if dnd is in the same list
  if (sameList) {
    const sourceCopy = sourceList.slice();
    // remove dragged using source index from sourceCopy
    sourceCopy.splice(locationDetails.source.index, 1)
    // insert dragged item into sourceCopy
    sourceCopy.splice(locationDetails.destination.index, 0, draggedItem);

    console.log(destinationList, sourceCopy);

    // return two lists 
    return [destinationList, sourceCopy];
  }

  // if dnd is NOT the same list
  destinationList.splice(locationDetails.destination.index, 0, draggedItem);

  // return two lists
  return [destinationList, sourceList];
};

export const checkWin = (wordList, winListOrder) => {
  const winCondition = wordList.map((item, index) => {
    return item.id === winListOrder[index].id;
  });

  return winCondition.includes(false) ? false : true;
};
