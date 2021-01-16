import React from 'react'
import PropTypes from 'prop-types'
import WordItem from './WordItem'

const WordsList = ({ wordsList }) => {
  return wordsList.map((word, i) => (
    <div key={i}>
      <WordItem {...word} />
    </div>
  )
  )
}

WordsList.propTypes = {
  wordsList: PropTypes.arrayOf(PropTypes.shape({
    word: PropTypes.string.isRequired
  }))
}

export default WordsList
