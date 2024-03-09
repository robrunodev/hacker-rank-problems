/**
 * Calculates the median of an array of numbers.
 * Assumes the input array has an odd number of elements.
 *
 * @param {number[]} arr - The input array of numbers.
 * @returns {number} - The median value.
 */
function findMedian(arr) {
    // Sort the array in ascending order
    const sortedArr = arr.sort((a, b) => a - b);
  
    // Find the middle index
    const middleIndex = Math.floor(sortedArr.length / 2);
  
    // Return the middle element
    return sortedArr[middleIndex];
  }
  
  // Example usage
  const numbers = [5, 2, 8, 1, 9, 3, 7];
  const medianValue = findMedian(numbers);
  console.log(`The median is: ${medianValue}`);
  