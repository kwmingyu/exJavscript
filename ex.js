function solution(emergency) {
  var answer = [...emergency].sort((a, b) => b - a);
  console.log(emergency);
  console.log(answer);
  answer.map((v, i) => {
    for (let j = 0; j < emergency.length; j++) {
      if (v === emergency[j]) {
        emergency[j] = i + 1;
      }
    }
  });
  return emergency;
}
let test = [3, 76, 24];
solution(test);
