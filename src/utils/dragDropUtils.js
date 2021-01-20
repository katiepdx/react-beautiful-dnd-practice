export const reorderList = (wordList, locationDetails) => {
  const [draggedItem] = wordList.splice(locationDetails.source.index, 1)

  const newOrder = wordList.splice(locationDetails.destination.index, 0, draggedItem)

  return newOrder
}

export const checkWin = (wordList, winListOrder) => {
  const winCondition = wordList.map((item, index) => {
    return item.id === winListOrder[index].id
  })

  return winCondition.includes(false) ? false : true
}
