// create a mapping of digits to their corresponding letters on the T9 keypad
// initialize a result array to contain an empty string
// for each digit in the input string
// for each letter in the corresponding letters
// append the letter to each string in the result array
// return the result array

function letterCombinations(digits) {
  const mapping = {
  '2': ['a', 'b', 'c'],
  '3': ['d', 'e', 'f'],
  '4': ['g', 'h', 'i'],
  '5': ['j', 'k', 'l'],
  '6': ['m', 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z']
  };
  
  let result = [''];
  
  for (let i = 0; i < digits.length; i++) {
    const digit = digits[i];
    const letters = mapping[digit];
    const newResult = [];
    for (let j = 0; j < letters.length; j++) {
      const letter = letters[j];
      for (let k = 0; k < result.length; k++) {
        newResult.push(result[k] + letter);
      }
    }
    result = newResult;
  }
  
  return result;
}