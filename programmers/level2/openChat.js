const record = ['Enter uid1234 Muzi', 'Enter uid4567 Prodo','Leave uid1234','Enter uid1234 Prodo','Change uid4567 Ryan'];
//const record = ['Enter uid1234 Muzi', 'Enter uid4567 muzi','Leave uid1234','Enter uid1234 Prodo','Enter uid5678 muzi','Change uid1234 Ryan'];
//const record = ['Enter uid1234 Muzi', 'Enter uid4567 Prodo','Leave uid1234','Enter uid1234 Prodo','Change uid4567 Ryan'];

solution(record);

function solution(record) {
    var answer = [];
    const chatLogs = record.map(value => value.split(' '));
    
    // 최종 닉네임 정보 셋팅
    let userInfo = {};
    chatLogs.forEach(value => {
       if(value.length == 3) {
           userInfo[value[1]] = value[2];
       }
    });

    // 채팅방 로그 남기기
    chatLogs.forEach(value => {
        let action = value[0];
        let uid = value[1];

        if(action == 'Enter') {
            answer.push(userInfo[uid] + '님이 들어왔습니다.');
        } else if(action == 'Leave') {
            answer.push(userInfo[uid] + '님이 나갔습니다.');
        }
     });

    return answer;
}