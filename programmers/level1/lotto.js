let lottos = [44, 1, 0, 0, 31, 25];
// lottos = [0, 0, 0, 0, 0, 0];
// lottos = [0, 0, 15, 0, 0, 0];
// lottos = [10, 0, 0, 0, 0, 0];
// lottos = [45, 4, 35, 20, 3, 9];

let win_nums = [31, 10, 45, 1, 6, 19];
// win_nums = [38, 19, 20, 40, 15, 25];
// win_nums = [20, 9, 3, 45, 4, 35];

solution(lottos, win_nums);

function solution(lottos, win_nums) {
    var answer = [];

    // lottos 에서 당첨된 숫자 갯수
    let winningCnt = lottos.filter(value => win_nums.includes(value)).length;

    // 0 의 갯수
    let zeroCnt = lottos.filter(value => 0 === value).length;

    // 최고 순위 : 0 의 갯수 + 당첨된 숫자 갯수, 최저 순위 : 당첨된 숫자 갯수
    answer.push(getRanking(winningCnt + zeroCnt), getRanking(winningCnt));

    return answer;
}

// 로또 순위
function getRanking(count) {
    let ranking = 0;
    switch (count) {
        case 6:
            ranking = 1;
            break;
        case 5:
            ranking = 2;
            break;
        case 4:
            ranking = 3;
            break;
        case 3:
            ranking = 4;
            break;
        case 2:
            ranking = 5;
            break;
        default:
            ranking = 6;
            break;
    }

    return ranking;
}