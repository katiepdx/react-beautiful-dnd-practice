import React, { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import WordList from './components/WordList';
import { draggableList, winListOrder } from './data/mock-data';
import { checkWin, reorderList } from './utils/dragDropUtils';
import './App.css';

function App() {
  const [wordList, setWordList] = useState(draggableList)
  const [currDragged, setCurrDragged] = useState()
  const [winOrder, setWinOrder] = useState(winListOrder)
  const [winStyles, setWinStyles] = useState()

  const handleOnDragStart = (locationDetails) => {
    setCurrDragged(locationDetails.source.index)
  }

  const handleOnDragEnd = (locationDetails) => {
    if (!locationDetails.destination) return setCurrDragged(null)

    reorderList(wordList, locationDetails)

    setWordList(wordList)
    setCurrDragged(null)

    checkWin(wordList, winOrder) ? setWinStyles('win') : setWinStyles('')
  }

  return (
    <div className="App">
      <header className="App-header">

        <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>

          <Droppable droppableId="words">

            {(provided) => (
              <div className="words" {...provided.droppableProps} ref={provided.innerRef} id={winStyles === 'win' ? 'win' : 'no-win'}>

                <WordList wordList={wordList} currDragged={currDragged} />

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
