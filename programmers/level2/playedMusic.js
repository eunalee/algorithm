//let m = 'ABCDEFG';
//let m = 'CC#BCC#BCC#BCC#B';
let m = 'ABC';
//let musicinfos = ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'];
//let musicinfos = ['12:59,13:00,HELLO,CDEFGAB', '13:00,14:00,WORLD,ABCDEF'];
//let musicinfos = ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B'];
//let musicinfos = ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'];
let musicinfos = ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:14,WORLD,ABCDEF'] ;
//let musicinfos = ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF', '13:00,13:10,NO,ABCDEF', '12:00,12:18,YES,CDEFGAB', '12:00,12:14,HI,CDEFGAB'];

solution(m, musicinfos);

function solution(m, musicinfos) {
    var answer = '';

    let maxTime = 0;
    m = replaceCode(m);     // 기억한 멜로디 코드 치환
    
    const musicInfo = musicinfos.map(value => value.split(','));
    musicInfo.forEach(value => {
        const playTime = getPlayTime(value[0], value[1]);   // 재생시간
        const playCodes = getPlayCode(playTime, value[3]);  // 악보코드

        // 기억한 멜로디 코드가 재생한 곡 악보코드에 포함되어 있는지 확인
        if(playCodes.includes(m)) {
            if(playTime > maxTime) {
                // 1. 재생시간이 제일 긴 음악 제목 반환
                // 2. 재생된 시간도 같을 경우 먼저 입력된 음악 제목 반환
                answer = value[2];
                maxTime = playTime;
            }
        }
    });

    // 조건이 일치하는 음악이 없을 때
    if(answer == '') {
        answer = '(None)';
    }

    return answer;
}

function replaceCode(codesInfo) {
    // 악보코드 치환
    const codes = codesInfo
        .replace(/C#/g, 'c')
        .replace(/D#/g, 'd')
        .replace(/F#/g, 'f')
        .replace(/G#/g, 'g')
        .replace(/A#/g, 'a');

    return codes;
}

function getPlayTime(start, end) {
    // 시작, 끝난 시각
    const startTime = start.split(':');
    const endTime = end.split(':');
    
    // 재생시간(밀리초)
    const hour = endTime[0] - startTime[0];
    const minute = endTime[1] - startTime[1];
    const time = (hour * 60) + minute;

    // 밀리초 -> 분 으로 변환

    return time;
}

function getPlayCode(minute, codesInfo) {
    const codes = replaceCode(codesInfo);    // 악보코드 치환
    const count = codes.length;              // 악보코드 갯수
    
    let code = '';
    if(minute > count) {
        // 재생시간 > 악보코드 갯수 : 악보코드 반복
        code = codes.repeat(minute/count) + codes.substr(0, (minute%count));
    } else {
        // 재생시간 < 악보코드 갯수 : 재생시간까지 악보코드 자르기
        code = codes.substr(0, minute);
    }

    return code;
}