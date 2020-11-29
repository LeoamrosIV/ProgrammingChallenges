// https://www.codewars.com/kata/56a5d994ac971f1ac500003e

function longestConsec(strarr, k) {
    if (strarr.length === 0 || k > strarr.length || k <= 0) return "";
    const newArray = [];

    // Makes strings of strings
    for (let i = 0; i <= strarr.length - k; i++) {
        newArray.push(strarr.slice(i, i + k).join(""));
    }

    // Returns longest string
    return newArray.reduce((acc, string) =>
        acc.length >= string.length ? acc : string
    );
}

console.log(
    longestConsec(["foling", "abcdefgh", "uvwxyz", "asodi", "aoisdjapoa"], 3)
);
