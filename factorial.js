let answer = 1;

function findFactorialRecursive(number) {
  if (number != 0) {
    console.log(number);
    answer = number * findFactorialRecursive(number - 1);
  } else {
    return answer;
  }
  return answer;
}

function findFactorialIterative(number) {
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