// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
    let word = string;
    for (let i = string.length - 1; i >= 0; i--) {
        if (word[i].match(new RegExp(/[A-Z]/)))
            word = `${word.substring(0, i)} ${word.substring(i, word.length)}`;
    }
    return word;
}

const solution2 = (string) => string.replace(/([A-Z])/g, " $1");

console.log(solution("camelCasingTest"));
console.log(solution2("camelCasingTest"));
