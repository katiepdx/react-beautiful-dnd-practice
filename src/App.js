import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';
// import WordsList from './components/WordList';
import { draggableList, winListOrder } from './data/mock-data';
import React, { useState } from 'react'
import { checkWin, reorderList } from './dragDropUtils';

function App() {
  const [wordList, setWordList] = useState(draggableList)
  const [currDragged, setCurrDragged] = useState()
  const [winOrder, setWinOrder] = useState(winListOrder)
  const [winStyles, setWinStyles] = useState()

  const handleOnDragStart = (locationDetails) => {
    // when user clicks to drag item, update styles

    // set curr dragged to state - compare index in card item
    setCurrDragged(locationDetails.source.index)
  }

  // fires when card is dropped
  const handleOnDragEnd = (locationDetails) => {
    // details: draggableId, source index and droppableId, destination index, and droppableId
    console.log(locationDetails)

    // check if card dragged is outside of droppable area - no destination
    // resets currDrag so styles are not applied
    if (!locationDetails.destination) return setCurrDragged(null)

    reorderList(wordList, locationDetails)

    // update wordList in state
    setWordList(wordList)

    // reset currDragged item to null
    setCurrDragged(null)

    // check win condition - correct order - set win styles
    checkWin(wordList, winOrder) ? setWinStyles('win') : setWinStyles('')
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* Wrap app in DragDropContext & Pass onDragEnd prop - handleOnDragEnd func fires updating word list order in state */}
        <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>

          {/* add droppable area  */}
          <Droppable droppableId="words">
            {/* must pass provided - incl. info and ref info needed for lib (droppableProps and innerRef for positioning) */}
            {(provided) => (
              <div className="words" {...provided.droppableProps} ref={provided.innerRef} id={winStyles === 'win' ? 'win' : 'no-win'}>

                {wordList.map((word, i) => {
                  return (
                    // wrap each item in array in Draggable
                    <Draggable draggableId={word.id} index={i} key={word.id}>
                      {/* must pass provided */}
                      {(provided) => (
                        // 3 provided props needed
                        <div className="word-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} id={i === currDragged ? 'dragging' : 'not-dragging'}>
                          {word.word}
                        </div>
                      )}
                    </Draggable>
                  )
                })}

                {/* add a placeholder for when items are dragged - from provided */}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
