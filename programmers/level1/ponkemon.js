let nums = [3,1,2,3];
//let nums = [3,3,3,2,2,4];
//let nums = [3,3,3,2,2,2];
//let nums = [1,2,3,4,5,6,7,8];
//let nums = [1,1,1,2,3,5,6,8];
//let nums = [1,1,1,1,2,2,3,3];

solution(nums);

function solution(nums) {
    var answer = 0;

    const total = nums.length;  // 총 폰켓몬 
    const count = total / 2;    // 선택가능 폰켓몬

    // 폰켓몬 종류 번호 배열 중복제거
    const type = nums.filter((value, index) => {
        return nums.indexOf(value) === index;
    });

    // (선택가능 폰켓몬 == 폰켓몬 종류) or (선택가능 폰켓몬 > 폰켓몬 종류) : 폰켓몬 종류
    // 선택가능 폰켓몬 < 폰켓몬 종류 : 선택가능 폰켓몬
    answer = (count < type.length) ? count : type.length;

    return answer;
}