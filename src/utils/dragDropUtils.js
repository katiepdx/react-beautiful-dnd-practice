export const reorderList = (wordList, nounList, locationDetails) => {
  const sourceList = locationDetails.source.droppableId === 'words' ? wordList.slice() : nounList.slice();
  const destinationList = locationDetails.destination.droppableId === 'words' ? wordList.slice() : nounList.slice();
  const sameList = locationDetails.destination.droppableId === locationDetails.source.draggableId;
  console.log(locationDetails, 'details')
  console.log(locationDetails.source.draggableId, locationDetails.destination.draggableId)
  const [draggedItem] = sourceList.splice(locationDetails.source.index, 1)

  destinationList.splice(locationDetails.destination.index, 0, draggedItem)
  return [destinationList, sourceList]

  // if (sameList) {
  //   const newOrder = destinationList.splice(locationDetails.destination.index, 0, draggedItem)
  //   console.log(locationDetails.destination.index)
  //   return newOrder
  // } else {
  //   const newDestinationOrder = destinationList.splice(locationDetails.destination.index, 0, draggedItem)
  // }


}

export const checkWin = (wordList, winListOrder) => {
  const winCondition = wordList.map((item, index) => {
    return item.id === winListOrder[index].id
  })

  return winCondition.includes(false) ? false : true
}
