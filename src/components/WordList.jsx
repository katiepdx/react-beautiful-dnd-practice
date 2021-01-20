import React from 'react'
import PropTypes from 'prop-types'
import WordItem from './WordItem'

const WordList = ({ wordList }) => (
  wordList.map((word, index) => {
    return (
      <WordItem word={word} index={index} key={index} />
    )
  })
)

WordList.propTypes = {
  wordList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired
  }))
}

export default WordList
