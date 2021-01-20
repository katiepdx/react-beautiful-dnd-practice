import React from 'react'
import PropTypes from 'prop-types'
import { Draggable } from 'react-beautiful-dnd'

const WordItem = ({ word, index, currDragged }) => {
  return (
    <Draggable draggableId={word.id} index={index} key={word.id}>

      {(provided) => (
        <div className="word-item" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} id={index === currDragged ? 'dragging' : 'not-dragging'}>
          {word.word}
        </div>
      )}
    </Draggable>
  )
}

WordItem.propTypes = {
  word: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired
  })),
  index: PropTypes.number.isRequired,
}

export default WordItem
