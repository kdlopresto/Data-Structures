const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length === 1) {
    return array
  }
  // Split Array in into right and left
  let left = array.slice(0,array.length/2);
  let right = array.slice(array.length/2);
  console.log("left : ", left);
  console.log("right : ", right)
  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge(left, right){
  
  let newArr = [];
  
  if (left === undefined || right === undefined ) {
    if (left === undefined) {
      return right
    } else {
      return left
    }
  } else {
    let lIndx = 0;
    let rIndx = 0;

    while (lIndx < left.length && rIndx < right.length) {
      if (left[lIndx] < right[rIndx]) {
        newArr.push(left[lIndx++]);
      } else {
        newArr.push(right[rIndx++]);
      }
    }
    while (lIndx < left.length) {
      newArr.push(left[lIndx++])
    }
    while (rIndx < right.length) {
      newArr.push(right[rIndx++])
    }
  }
  //console.log(left, right);
  return newArr;
}


const answer = mergeSort(numbers);
console.log(answer);