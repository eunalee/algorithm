let s = 'one4seveneight';
// s = '23four5six7';
// s = '2three45sixseven';
// s = '123';
// s = 'oneoneoneone';

solution(s);

function solution(s) {
  let answer = s;
  let replaceArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  for (let i = 0; i < replaceArr.length; i++) {
    // 영단어를 구분자로 하여 문자열 자르기
    // 'one4seveneight' -> '', '4seveneight'
    let arr = answer.split(replaceArr[i]);
    // 영단어에 대응하는 숫자를 구분자로 하여 자른 문자열 합치기
    // '14seveneight'
    answer = arr.join(i);
  }

  return Number(answer);
}