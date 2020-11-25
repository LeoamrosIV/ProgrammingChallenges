// https://www.codewars.com/kata/53368a47e38700bd8300030d
function list(names) {
    let string;
    if (names.length === 0) {
        string = "";
    } else for (let i=0; i < names.length; i++) {
        if (i === 0) {
            string = String(names[0].name);
        } else if (i < names.length-1) {
            string = `${string}, ${names[i].name}`;
        } else if (i === names.length-1) {
            string = `${string} & ${names[i].name}`;
        }
    }
    return string;
}

console.log(list([]));
console.log(list([{name: 'Bart'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'}]));
console.log(list([{name: 'Bart'},{name: 'Lisa'},{name: 'Maggie'},{name: 'Homer'},{name: 'Marge'}]));