// https://www.codewars.com/kata/52c31f8e6605bcc646000082

function twoSum(numbers, target) {
    for (let n = numbers.length - 1; n >= 0; n--) {
        for (let m = n - 1; m >= 0; m--) {
            if (numbers[n] + numbers[m] == target) {
                return [n, m];
            }
        }
    }
}

console.log(twoSum([1, 4, 5, 6, 7, 9, 10], 12));
console.log(twoSum([811, 824, 813, 721, 440, 378, 792, 356, 889, 300], 1702));
