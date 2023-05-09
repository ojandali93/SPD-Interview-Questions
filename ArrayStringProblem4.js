// sort array a in ascending order
// initialize variables to keep track of the closest pair
// for each element x in array b, use binary search to find the element y in array a such that x + y is closest to t
// we found a perfect match, so we can stop searching
// return the closest pair

function findClosestPair(a, b, t) {
  a.sort((x, y) => x - y);
  
  let closestPair = [a[0], b[0]];
  let smallestDiff = Math.abs(closestPair[0] + closestPair[1] - t);
  
  for (let i = 0; i < b.length; i++) {
    let left = 0;
    let right = a.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const sum = a[mid] + b[i];
      const diff = Math.abs(sum - t);
      if (diff < smallestDiff) {
        closestPair = [a[mid], b[i]];
        smallestDiff = diff;
      }
      if (sum < t) {
        left = mid + 1;
      } else if (sum > t) {
        right = mid - 1;
      } else {
        return closestPair;
      }
    }
  }
  
  return closestPair;
}
  
  