let s = 'one4seveneight';
// s = '23four5six7';
// s = '2three45sixseven';
// s = '123';
// s = 'oneoneoneone';

solution(s);

function solution(s) {
  // 정규식으로 문자열 교체
  s = s.replace(/zero/gi, 0)
  .replace(/one/gi, 1)
  .replace(/two/gi, 2)
  .replace(/three/gi, 3)
  .replace(/four/gi, 4)
  .replace(/five/gi, 5)
  .replace(/six/gi, 6)
  .replace(/seven/gi, 7)
  .replace(/eight/gi, 8)
  .replace(/nine/gi, 9);
  
  return Number(s);
}