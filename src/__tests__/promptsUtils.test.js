import { makeArray } from "../utils/promptsUtils";

describe('promptsUtils tests', () => {
  it('should split the COFFEE sentence into an array', () => {
    const sentence = 'Hello, I really like coffee.';
    const TSSArray = ['Hello, ', 'I ', 'really ', 'like ', 'coffee.'];

    const result = makeArray(sentence);

    expect(result).toEqual(TSSArray);
  });

  it('should split the HOBBIES sentence into an array', () => {
    const sentence = 'I like to run.';
    const TSSArray = ['I ', 'like ', 'to ', 'run.'];

    const result = makeArray(sentence);

    expect(result).toEqual(TSSArray);
  });

});
