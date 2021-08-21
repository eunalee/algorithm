const record = ['Enter uid1234 Muzi', 'Enter uid4567 Prodo','Leave uid1234','Enter uid1234 Prodo','Change uid4567 Ryan'];
//const record = ['Enter uid1234 Muzi', 'Enter uid4567 muzi','Leave uid1234','Enter uid1234 Prodo','Enter uid5678 muzi','Change uid1234 Ryan'];
//const record = ['Enter uid1234 Muzi', 'Enter uid4567 Prodo','Leave uid1234','Enter uid1234 Prodo','Change uid4567 Ryan'];

solution(record);

function solution(record) {
    var answer = [];
    let chat = new Array();

    const chatInfo = record.map(value => value.split(' '));
    chatInfo.forEach(records => {
        let flag = false;
        if(chat.length > 0) {
            chat.forEach(value => {
                if(records[0] == 'Enter') {
                    if(value.id == records[1]) {          // 유저 아이디가 이미 존재하는 경우
                        value.nickname = records[2];
                    } else {
                        flag = true;
                    }
                } else if(records[0] == 'Leave') {
                    flag = false;
                    if(value.id == records[1]) {
                        chat.push({
                            id: records[1],
                            nickname : value.nickname,
                            message :'님이 나갔습니다.'
                        });
                    }
                } else {
                    flag = false;
                    if(value.id == records[1]) {
                        value.nickname = records[2];
                    }
                }
            });
        } else {
            flag = true;
        }

        // 유저 아이디가 없는 경우
        if(flag) {
            chat.push({
                id: records[1],
                nickname : records[2],
                message :'님이 들어왔습니다.'
            });
        }
    });

    answer = chat.map(value => value.nickname + value.message);

    return answer;
}