let new_id = '...!@BaT#*..y.abcdefghijklm';
//let new_id = '"z-+.^.';
//let new_id = '=.=';
//let new_id = '123_.def';
//let new_id = 'abcdefghijklmn.p';

solution(new_id);

function solution(new_id) {
    // 1단계 : 대문자 -> 소문자 치환
    // 2단계 : 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    // 3단계 : 마침표(.)가 2번 이상 연속된 부분 -> 하나의 마침표(.)로 치환
    // 4단계 : 마침표(.)가 처음이나 끝에 위치한다면 제거
    var answer = new_id
        .toLowerCase()
        .replace(/[^a-z0-9-_.]/g, '')
        .replace(/[\.]{2,}/g, '.')
        .replace(/^\./, '')
        .replace(/\.$/, '');

    // 5단계 : 빈 문자열이라면, a 대입
    if(answer == '') {
        answer = answer.replace('', 'a');
    }

    // 6단계 : 길이가 16자 이상이면, 첫 15개의 문자를 제외한 나머지 문자들 모두 제거
    // 제거 후 마침표(.)가 끝에 위치한다면 마침표(.) 문자 제거
    answer = answer
        .substr(0, 15)
        .replace(/\.$/, '');

    // 7단계 : 길이가 2자 이하라면, 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙이기
    if(answer.length <= 2) {
        answer += answer.charAt(answer.length-1).repeat(3 - answer.length);
    }

    return answer;
}