let s = 'one4seveneight';
// s = '23four5six7';
// s = '2three45sixseven';
// s = '123';
// s = 'oneoneoneone';

solution(s);

function solution(s) {
  var answer = 0;
  let replaceArr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  if (isNaN(s)) {
    // 영단어 배열의 index 로 변환
    replaceArr.forEach((value, index) => {
      if (s.includes(value)) {
        // 동일하게 반복되는 문자열 모두 숫자로 변환
        s = s.replace(new RegExp(value, 'g'), index);
      }
    });
  }

  answer = Number(s);
  return answer;
}