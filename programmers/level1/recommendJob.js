let table = ['SI JAVA JAVASCRIPT SQL PYTHON C#', 'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++', 'HARDWARE C C++ PYTHON JAVA JAVASCRIPT', 'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP', 'GAME C++ C# JAVASCRIPT C JAVA'];
//let languages = ['PYTHON', 'C++', 'SQL'];
let languages = ['JAVA', 'JAVASCRIPT'];
//let preference = [7, 5, 5];
let preference = [7, 5];

solution(table, languages, preference);

function solution(table, languages, preference) {
    var answer = '';

    const jobInfos = table.map(value => value.split(' ').reverse());

    let result = [];
    jobInfos.forEach(job => {
        let total = 0;
        languages.forEach((lang, index) => {
            // 직업군 언어 목록에 입력받은 언어가 있는 경우에만 점수 계산
            if(job.includes(lang)) {
                let score = job.indexOf(lang);
                total += (score+1) * preference[index];
            }
        });

        result.push({job: job[5], total : total});
    });

    // 직업군명 사전순으로 정렬
    result.sort(function(a,b) {
        return a.job < b.job ? -1 : a.job > b.job ? 1 : 0;
    });

    // 총합이 제일 높은순으로 정렬
    result.sort(function(a,b) {
        return b.total - a.total;
    });

    answer = result[0].job;

    return answer;
}