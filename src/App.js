import React, { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import WordList from './components/WordList';
import { draggableList, nounsList, winListOrder } from './data/mock-data';
import { checkWin, reorderList } from './utils/dragDropUtils';
import './App.css';

function App() {
  const [wordList, setWordList] = useState(draggableList)
  const [nounList, setNounsList] = useState(nounsList)
  const [currDragged, setCurrDragged] = useState()
  const [winOrder, setWinOrder] = useState(winListOrder)
  const [winStyles, setWinStyles] = useState()

  const handleOnDragStart = (locationDetails) => setCurrDragged(locationDetails.source.index)
  const handleOnDragEnd = (locationDetails, ...rest) => {
    console.log(locationDetails, 'LocationDetails')
    console.log(rest, 'rest params')
    if (!locationDetails.destination) return setCurrDragged(null)

    const [destinationList, sourceList] = reorderList(wordList, nounList, locationDetails)
    console.log(destinationList, sourceList, 'hgi')
    setNounsList(sourceList)
    setWordList(destinationList)
    setCurrDragged(null)
    console.log(sourceList)

    checkWin(wordList, winOrder) ? setWinStyles('win') : setWinStyles('')
  }

  return (
    <div className="App">
      <header className="App-header">

        <DragDropContext onDragEnd={handleOnDragEnd} onDragStart={handleOnDragStart}>

          {/* TSS - I really like (something) */}
          <Droppable droppableId="words">
            {(provided) => (
              <div
                className="words" {...provided.droppableProps} ref={provided.innerRef} id={winStyles === 'win' ? 'win' : 'no-win'}>

                <WordList wordList={wordList} currDragged={currDragged} />

                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* VOCAB - coffee, tea, etc. */}
          <Droppable droppableId="nouns">
            {(provided) => (
              <div className="nouns" {...provided.droppableProps} ref={provided.innerRef} >

                <WordList wordList={nounList} currDragged={currDragged} />

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
