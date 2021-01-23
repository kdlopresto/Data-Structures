const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;
  for (i=0; i < length; i++) {
    let sml = i
    let tmp = array[i]
    for (j = i + 1; j < length; j++) {
      if (array[j] < array[sml]) {
        sml= j;
      }
    }
    numbers[i] = numbers[sml];
    numbers[sml] = tmp;
  }
}

selectionSort(numbers);
console.log(numbers);