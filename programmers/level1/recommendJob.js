let table = ['SI JAVA JAVASCRIPT SQL PYTHON C#', 'CONTENTS JAVASCRIPT JAVA PYTHON SQL C++', 'HARDWARE C C++ PYTHON JAVA JAVASCRIPT', 'PORTAL JAVA JAVASCRIPT PYTHON KOTLIN PHP', 'GAME C++ C# JAVASCRIPT C JAVA'];
let languages = ['PYTHON', 'C++', 'SQL'];
//let languages = ['JAVA', 'JAVASCRIPT'];
let preference = [7, 5, 5];
//let preference = [7, 5];

solution(table, languages, preference);

function solution(table, languages, preference) {
    var answer = '';

    const score = [5,4,3,2,1];
    const jobInfos = table.map(value => value.split(' '));

    //let totalResult = {};
    let result = [];
    jobInfos.forEach(job => {
        let total = 0;
        languages.forEach((lang, i) => {
            // 직업군 언어 목록에 입력받은 언어가 있는 경우에만 점수 계산
            if(job.includes(lang)) {
                let index = job.indexOf(lang);
                total += score[index-1] * preference[i];
            }
        });

        //totalResult[job[0]] = total;
        result.push({job: job[0], total : total});
    });

    // 직업군명 사전순으로 정렬
    const sortByJob = result.sort(function(a,b) {
        return a.job < b.job ? -1 : a.job > b.job ? 1 : 0;
    });

    // 총합이 제일 높은순으로 정렬
    const sortByTotal = sortByJob.sort(function(a,b) {
        return b.total - a.total;
    });

    answer = sortByTotal[0].job;

    return answer;
}