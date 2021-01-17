export const reorderList = (wordList, locationDetails) => {
  // remove one at index (source index)
  // destructure array to get the dragged item obj w/ id and word
  const [draggedItem] = wordList.splice(locationDetails.source.index, 1)

  // inserts dragged item at the destination index
  const newOrder = wordList.splice(locationDetails.destination.index, 0, draggedItem)

  return newOrder
}

export const checkWin = (wordList, winListOrder) => {
  const winCondition = wordList.map((item, index) => {
    return item.id === winListOrder[index].id
  })

  // check win condition array for a false
  return winCondition.includes(false) ? false : true
}
