var participant = ["mislav", "stanko", "mislav", "ana"];
var completion = ["stanko", "ana", "mislav"];

solution(participant, completion);

function solution(participant, completion) {
    var answer = '';
    participant.sort();
    completion.sort();
    for(var i=0; i<participant.length; i++) {
        if(participant[i] != completion[i]) {
            answer = participant[i];
            break;
        }
    }
    //console.log(answer);
    return answer;

    // 차집합 - 중복제거
    //console.log(participant.filter(value => !completion.includes(value)));
}