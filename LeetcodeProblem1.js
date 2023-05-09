// 58. Length of Last Word

// Pseudocode

// grab the string that is being passed into the function
// split the string into invidivual words
// go to the string in the last position
// split that work into an array of letters
// grab the length of the array 

// Code
var lengthOfLastWord = function(s) {
    let fullString = s
    let splitString = fullString.split(' ')
    let lastWord
    splitString.length > 1
      ? lastWord = splitString[splitString.length - 1]
      : lastWord = splitString
    return lastWord
};