// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
function duplicateEncode(word){
    let encrypted = "";
    const lowerWord = word.toLowerCase();
    for (let i=0; i<word.length; i++) {
        (lowerWord.split(lowerWord[i]).length <= 2) ? encrypted+="(" : encrypted+=")";
    }
    return encrypted;
}

console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));