var numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
//var numbers = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
//var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//var numbers = [2,5,8,0];
var hand = 'right';
//var hand = 'left';

solution(numbers, hand);

function solution(numbers, hand) {
    var answer = '';
    var keypad = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        ['*',0,'#'],
    ];
    var leftKeys = [1,4,7,'*'];
    var rightKeys = [3,6,9,'#'];

    // 왼손 위치 (시작 위치 : *)
    var leftX = 3;
    var leftY = 0;

    // 오른손 위치 (시작 위치 : #)
    var rightX = 3;
    var rightY = 2;

    // 현재 누른 숫자의 위치
    var numX = 0;
    var numY = 0;

    numbers.forEach((number) => {
        keypad.forEach((keys, row) => {
            keys.forEach((value, index) => {
                // 현재 누른 숫자의 위치 저장
                if(value == number) {
                    numX = row;
                    numY = index;
                }
            });
        });

        if(leftKeys.includes(number)) {
            answer += 'L';
            leftX = numX;
            leftY = numY;
        } else if(rightKeys.includes(number)) {
            answer += 'R';
            rightX = numX;
            rightY = numY;
        } else {
            // 왼손 거리
            var dis_leftX = leftX - numX;
            var dis_leftY = leftY - numY;
            var dis_left = Math.sqrt(Math.abs(dis_leftX*dis_leftX) + Math.abs(dis_leftY*dis_leftY));
            
            // 오른손 거리
            var dis_rightX = rightX - numX;
            var dis_rightY = rightY - numY;
            var dis_right = Math.sqrt(Math.abs(dis_rightX*dis_rightX) + Math.abs(dis_rightY*dis_rightY));
            
            // 현재 누른 숫자와의 거리 비교
            // 왼손 거리 > 오른손 거리 : 왼손 거리가 더 멀기에 오른손으로 움직임
            // 왼손 거리 < 오른손 거리 : 오른손 거리가 더 멀기에 왼손으로 움직임
            // 왼손 거리 == 오른손 거리 : 왼손/오른손 잡이 여부에 따라 움직임
            if(dis_left > dis_right) {
                answer += 'R';
                rightX = numX;
                rightY = numY;
            } else if(dis_left < dis_right) {
                answer += 'L';
                leftX = numX;
                leftY = numY;
            } else {
                if(hand == 'left') {
                    answer += 'L';
                    leftX = numX;
                    leftY = numY;
                } else {
                    answer += 'R';
                    rightX = numX;
                    rightY = numY;
                }
            }
        }
    });

    return answer;
}