const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let length = array.length;
  for (i=0; i < length; i++) {
    if (array[i] < array[0]) {
      // move number to first position
      array.unshift(array.splice(i,1)[0]);
    } else {
      // find where number shoud go
      for (j=1; j < i; j++) {
        if (array[i] > array[j-1] && array[i] < array[j]) {
          array.splice(j,0,array.splice(i,1)[0]);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);