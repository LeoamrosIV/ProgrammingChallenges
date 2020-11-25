// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

/* function openOrSenior(data){
    function seniorOrNot(list) {
        return (list[0] >= 55 && list[1] > 7) ? "Senior" : "Open";
    }
    return data.map(seniorOrNot);
} */

function openOrSenior(data) {
    return data.map(([age, handicap]) => (age >= 55 && handicap > 7) ? "Senior" : "Open");
}

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));