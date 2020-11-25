// https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
    return Number(
        n
            .toString()
            .split("")
            .sort((a, b) => {
                return b - a;
            })
            .join("")
    );
}

console.log(descendingOrder(4894172612));
console.log(descendingOrder(123456789));
