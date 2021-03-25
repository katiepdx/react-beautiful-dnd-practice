const makeArray = (sentence) => {
  const splitArr = sentence.split(' ');

  const addSpaces = splitArr.map((word, index) => {
    return index === splitArr.length - 1
      ? word
      : word + ' ';
  });

  return addSpaces;
};

const shufflePrompt = (TSSArray) => {
  const arrCopy = [...TSSArray];
  const newShuffledArr = [];

  arrCopy.map(word => {
    // get index to insert new item at
    const index = Math.floor(Math.random() * arrCopy.length);

    // insert word into new array 
    newShuffledArr.splice(index, 0, word);
  });

  return newShuffledArr;
};

module.exports = {
  makeArray,
  shufflePrompt
};
