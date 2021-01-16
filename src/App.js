import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './App.css';
// import WordsList from './components/WordList';
import { draggableList } from './data/mock-data';
import React from 'react'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <DragDropContext>
          <Droppable droppableId="words">
            {(provided) => (
              <div className="words" {...provided.droppableProps} ref={provided.innerRef}>
                {draggableList.map((word, i) => {
                  return (
                    <Draggable draggableId={word.id} index={i} key={word.id}>
                      {(provided) => (
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
