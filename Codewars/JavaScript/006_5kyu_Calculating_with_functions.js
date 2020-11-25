// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
function numberFunc(thisNum, operatorFunc) {
    if (typeof operatorFunc == "function") {
        return operatorFunc(thisNum);
    }
    return thisNum;
}
function zero(operatorFunc) {
    return numberFunc(0, operatorFunc);
}
function one(operatorFunc) {
    return numberFunc(1, operatorFunc);
}
function two(operatorFunc) {
    return numberFunc(2, operatorFunc);
}
function three(operatorFunc) {
    return numberFunc(3, operatorFunc);
}
function four(operatorFunc) {
    return numberFunc(4, operatorFunc);
}
function five(operatorFunc) {
    return numberFunc(5, operatorFunc);
}
function six(operatorFunc) {
    return numberFunc(6, operatorFunc);
}
function seven(operatorFunc) {
    return numberFunc(7, operatorFunc);
}
function eight(operatorFunc) {
    return numberFunc(8, operatorFunc);
}
function nine(operatorFunc) {
    return numberFunc(9, operatorFunc);
}

function plus(n) {
    return (operation = (m) => {
        return m + n;
    });
}
function minus(n) {
    return (operation = (m) => {
        return m - n;
    });
}
function times(n) {
    return (operation = (m) => {
        return m * n;
    });
}
function dividedBy(n) {
    return (operation = (m) => {
        return parseInt(m / n);
    });
}

console.log(zero(plus(one())));
console.log(nine(minus(five())));
console.log(four(times(three())));
console.log(eight(dividedBy(two())));
console.log(eight(dividedBy(three())));
