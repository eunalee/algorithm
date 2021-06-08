var info = [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50"
];

var query = [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150"
];

/*var info = [
    "cpp backend junior chicken 10",
    "java backend senior pizza 2000",
    "python backend senior pizza 80",
];

var query = [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150"
];*/

var query = [
    "- and frontend and junior and - 10",
    "java and - and - and pizza 5000",
    "- and - and - and - 100"
];

solution(info, query);

function solution(info, query) {
    var answer = [];

    var infoData = [];
    info.map(function(value) {
        infoData.push(value.split(" "));
    });

    var queryData = [];
    query.map(function(value) {
        queryData.push(value.split(" "));
    });

    for(var i=0; i<queryData.length; i++) {
        for(var j=0; j<queryData[i].length; j++) {
            if(queryData[i][j] == 'and') {
                queryData[i].splice(j, 1);
            }
        }
    }

    var count = 0;
    var status = false;
    for(var i=0; i<queryData.length; i++) {
        count = 0;
        for(var j=0; j<infoData.length; j++) {
            status = false;
            for(var k=0; k<infoData[j].length; k++) {
                if(k < 4) {
                    if(infoData[j][k] == queryData[i][k] || queryData[i][k] == '-') {
                        status = true;
                    } else {
                        status = false;
                        break;
                    }
                } else {
                    if(Number(infoData[j][k]) >= Number(queryData[i][k])) {
                        status = true;
                    } else {
                        status = false;
                        break;
                    }
                }
            }

            if(status) {
                count++;
            }
        }
        answer.push(count);
    }

    return answer;
}