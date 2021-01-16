import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';
// import WordsList from './components/WordList';
import { draggableList } from './data/mock-data';
import React, { useState } from 'react'
import { reorderList } from './dragDropUtils';

function App() {
  const [wordList, setWordList] = useState(draggableList)

  // fires when card is dropped
  const handleOnDragEnd = (locationDetails) => {
    // details: draggableId, source index and droppableId, destination index, and droppableId
    console.log(locationDetails)

    reorderList(wordList, locationDetails)

    // update wordList in state
    setWordList(wordList)
  }

  return (
    <div className="App">
      <header className="App-header">

        {/* Wrap app in DragDropContext & Pass onDragEnd prop - handleOnDragEnd func fires updating word list order in state */}
        <DragDropContext onDragEnd={handleOnDragEnd}>

          {/* add droppable area  */}
          <Droppable droppableId="words">
            {/* must pass provided - incl. info and ref info needed for lib (droppableProps and innerRef for positioning) */}
            {(provided) => (
              <div className="words" {...provided.droppableProps} ref={provided.innerRef}>

                {wordList.map((word, i) => {
                  return (
                    // wrap each item in array in Draggable
                    <Draggable draggableId={word.id} index={i} key={word.id}>
                      {/* must pass provided */}
                      {(provided) => (
                        // 3 provided props needed
                        <div className="word-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          Word: {word.word}
                        </div>
                      )}
                    </Draggable>
                  )
                })}

              </div>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
