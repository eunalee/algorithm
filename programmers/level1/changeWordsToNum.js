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
    replaceArr.forEach((value, index) => {
      if (s.includes(value)) {
        s = s.replace(new RegExp(value, 'g'), index);
      }
    });
  }

  answer = Number(s);
  return answer;
}