const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let length = array.length;
  for (i=0; i < length; i++) {
    for (j=i+1; j > 0; --j) {
      if (array[j] < array[j-1]) {
        console.log("swapping", array[j], array[j-1])
        tmp = array[j];
        array[j] = array[j-1];
        array[j-1] = tmp
      } else {
        console.log("break-out early")
        break;
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);