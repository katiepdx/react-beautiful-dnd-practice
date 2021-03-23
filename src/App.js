import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import WordList from './components/WordList';
import { tssList, nounsList, drinksWinOrder } from './data/mock-data';
import { checkDrinksWin, reorderList } from './utils/dragDropUtils';
import './App.css';

function App() {
  const [wordList, setWordList] = useState(tssList.words);
  const [nounList, setNounsList] = useState(nounsList.words);
  const [currDragged, setCurrDragged] = useState();
  const [winStyles, setWinStyles] = useState();

  // set currDragged index
  const handleOnDragStart = (locationDetails) => setCurrDragged(locationDetails.source.index);

  // check win condition whenever wordList updates
  useEffect(() => {
    // check win condition 
    checkDrinksWin(wordList, drinksWinOrder)
      ? setWinStyles('win')
      : setWinStyles('no-win');
  }, [wordList]);

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
          <Droppable droppableId="words" direction="horizontal">
            {(provided) => (
              <div
                className="words" {...provided.droppableProps} ref={provided.innerRef} id={winStyles === 'win' ? 'win' : 'no-win'}>

                <h1>{tssList.title}</h1>

                <WordList wordList={wordList} currDragged={currDragged} />

                {provided.placeholder}
              </div>
            )}
          </Droppable>

          {/* VOCAB - coffee, tea, etc. */}
          <Droppable droppableId="nouns" direction="horizontal">
            {(provided) => (
              <div className="nouns" {...provided.droppableProps} ref={provided.innerRef} >

                <h1>{nounsList.title}</h1>

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
