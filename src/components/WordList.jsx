import React from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

const WordList = ({ wordList, currDragged }) => {
  return (
    wordList.map((word, index) => {
      return (
        <Draggable draggableId={word.id} index={index} key={word.id}>
          {(provided) => (
            <div className="word-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} id={index === currDragged ? 'dragging' : 'not-dragging'}>
              {word.word}
            </div>
          )}

        </Draggable>
      )
    })
  )
}

WordList.propTypes = {
  wordList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired
  })),
  currDragged: PropTypes.isRequired
}

export default WordList
