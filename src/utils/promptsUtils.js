const makeArray = (sentence) => {
  const splitArr = sentence.split(' ');

  const addSpaces = splitArr.map((word, index) => {
    return index === splitArr.length - 1
      ? word
      : word + ' ';
  });

  return addSpaces;
};

module.exports = {
  makeArray,
};
