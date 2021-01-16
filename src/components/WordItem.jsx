import React from 'react'
import PropTypes from 'prop-types'

const WordItem = ({ word }) => {
  return (
    <div className='word-item'>
      Word: {word}
    </div>
  )
}

WordItem.propTypes = {
  word: PropTypes.string.isRequired
}

export default WordItem
