// https://www.codewars.com/kata/552c028c030765286c00007d
function iqTest(numbers){
    const array = numbers.split(" ");
    const even = [];
    const odd = []; 
    array.map(number => (number%2 === 0) ? even.push(array.indexOf(number)+1) : odd.push(array.indexOf(number)+1));
    return even.length > odd.length ? Number(odd[0]) : Number(even[0]);
}

console.log(iqTest("2 4 7 8 10"));