import React, { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import WordList from './components/WordList';
import { draggableList, nounsList, winListOrder } from './data/mock-data';
import { checkWin, reorderList } from './utils/dragDropUtils';
import './App.css';

function App() {
  const [wordList, setWordList] = useState(draggableList);
  const [nounList, setNounsList] = useState(nounsList);
  const [currDragged, setCurrDragged] = useState();
  const [winOrder, setWinOrder] = useState(winListOrder);
  const [winStyles, setWinStyles] = useState();

  // set currDragged index
  const handleOnDragStart = (locationDetails) => setCurrDragged(locationDetails.source.index);

  const handleOnDragEnd = (locationDetails) => {
    // snap back if destination is out of bands
    if (!locationDetails.destination) return setCurrDragged(null);

    // reorderList takes in 3 props
    // get two lists from reorderList return
    const [destinationList, sourceList] = reorderList(wordList, nounList, locationDetails);

    const setDestination =
      locationDetails.destination.droppableId === 'words'
        ? setWordList
        : setNounsList;

    const setSource =
      locationDetails.source.droppableId === 'words'
        ? setWordList
        : setNounsList;

    setDestination(destinationList);
    setSource(sourceList);
    setCurrDragged(null);
  };

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
