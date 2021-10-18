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
    let ranking = [6, 6, 5, 4, 3, 2, 1];
    
    // lottos 에서 당첨된 숫자 갯수
    let minCount = lottos.filter(value => win_nums.includes(value)).length;
    
    // 0 의 갯수 + 당첨된 숫자 갯수
    let maxCount = lottos.filter(value => 0 === value).length + minCount;
    
    // 최고 순위, 최저 순위
    answer.push(ranking[maxCount], ranking[minCount]);

    return answer;
}