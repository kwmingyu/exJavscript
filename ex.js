function solution(numbers) {
  let answer;
  let sum = 0;
  numbers.forEach((element) => (sum += element));
  console.log(sum);
  console.log(numbers.length);
  return (answer = sum / numbers.length);
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let answer = solution(array);
console.log(answer);
