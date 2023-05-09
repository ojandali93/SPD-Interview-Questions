// 66. Plus One

// Pseudocode
// Traverse the array from right to left
// Add 1 to the current digit
// If the current digit is less than 10, we're done
// Otherwise, set the current digit to 0 and continue to the next digit
// If we reach the leftmost digit and it's now 10
  // set it to 0 and add a new digit 1 at the beginning
// Reverse the array and return it

// Code
function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i]++;
    if (digits[i] < 10) {
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}