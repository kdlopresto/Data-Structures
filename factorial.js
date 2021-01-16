
function findFactorialRecursive(number) {
  if (number === 0) {
    return 1;
  }
  console.log(number);
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  while (number > 0) {
    console.log(number);
    answer = answer * number;
    number--;
  }
  return answer;
}

answer = 1;
console.log(findFactorialRecursive(6));

answer = 1;
console.log(findFactorialIterative(7));