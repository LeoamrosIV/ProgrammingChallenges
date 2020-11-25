// https://www.codewars.com/kata/554b4ac871d6813a03000035
function highAndLow(numbers){
    const array = numbers.split(" ");
    const max = Math.max.apply(null, array);
    const min = Math.min.apply(null, array);
    const result = max + " " + min;
    return result;
}

console.log(highAndLow("1 2 3 4 5"));