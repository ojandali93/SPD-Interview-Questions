// create a new array of length k to store the k largest values
// initialize the new array with the first k elements
// iterate over the remaining elements in the input array
// find the smallest value in the new array
// if the current element is larger than the smallest value in the new array, replace the smallest value with the current element
// return the new array


function findKLargest(a, k) {
  const result = Array(k);

  for (let i = 0; i < k; i++) {
    result[i] = a[i];
  }

  for (let i = k; i < a.length; i++) {
    let minIndex = 0;
    for (let j = 1; j < k; j++) {
      if (result[j] < result[minIndex]) {
        minIndex = j;
      }
    }

    if (a[i] > result[minIndex]) {
      result[minIndex] = a[i];
    }
  }
  return result;
}

const a = [5, 1, 3, 6, 8, 2, 4, 7];
const k = 3;
console.log(findKLargest(a, k)); 



