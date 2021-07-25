let m = 'ABCDEFG';
//let m = 'CC#BCC#BCC#BCC#B';
//let m = 'ABC';
let musicinfos = ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'];
//let musicinfos = ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B'];
//let musicinfos = ['12:00,12:14,HELLO,C#DEFGAB', '13:00,13:05,WORLD,ABCDEF'];

solution(m, musicinfos);

function solution(m, musicinfos) {
    var answer = '';

    const musicInfo = musicinfos.map(value => value.split(','));

    const playTime = new Array();   // 재생시간 정보
    const songsInfo = new Array();   // 곡 정보
    const playCodes = new Array();  // 재생시간 동안의 악보코드 정보
    musicInfo.forEach(value => {
        let minute = getPlayTime(value[0], value[1]);
        playTime.push(minute);
        playCodes.push(getPlayCode(minute, value[3]));
        songsInfo.push(value[2]);
    });
   
    m = replaceCode(m);     // 기억한 멜로디 코드 치환

    const songs = new Array();      // 조건과 일치하는 곡
    playCodes.forEach((value, index) => {
        // 기억한 멜로디 코드가 재생한 곡 악보코드에 포함되어 있는지 확인
        const regex = new RegExp(m);
        if(regex.test(value)) {
            songs.push(songsInfo[index]);
        }
    });

    if(songs.length > 1) {
        // 조건이 일치하는 음악이 여러 개일 때
        // 1. 재생시간이 제일 긴 음악 제목 반환
        // 2. 재생된 시간도 같을 경우 먼저 입력된 음악 제목 반환
        const maxTime = Math.max.apply(null, playTime);
        answer = songs[playTime.indexOf(maxTime)];
    } else if(songs.length == 1) {
        answer = songs[0];
    } else {
        // 조건이 일치하는 음악이 없을 때
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
    const duration = new Date(0, 0, endTime[0], endTime[1]).getTime() - new Date(0, 0, startTime[0], startTime[1]).getTime();

    // 밀리초 -> 분 으로 변환
    const time = duration / (1000*60*60);

    return time;
}

function getPlayCode(minute, codesInfo) {
    const codes = replaceCode(codesInfo);    // 악보코드 치환
    const count = codes.length;              // 악보코드 갯수

    let code = '';
    if(minute > count) {
        // 재생시간 > 악보코드 갯수 : 악보코드 반복
        code = codes.repeat(minute/count);
    } else {
        // 재생시간 < 악보코드 갯수 : 재생시간까지 악보코드 자르기
        code = codes.substr(0, minute);
    }

    return code;
}