// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd

function filter_list(l) {
    // Return a new array with the strings filtered out
    const numbers = [];
    l.map((i) => {
        if (typeof i === "number") numbers.push(i);
    });
    return numbers;
}

console.log(filter_list([1, 2, "a", "b"]));
console.log(filter_list([1, "a", "b", 0, 15]));
console.log(filter_list([1, 2, "aasf", "1", "123", 123]));
