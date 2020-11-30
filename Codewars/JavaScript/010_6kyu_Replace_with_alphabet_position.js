// https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    const regExAlphabet = /[a-z]/g;
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // Creates an array containing only letters from the string
    const arrayOfCharacters = text.toLowerCase().match(regExAlphabet);

    // If the string doesn't contain letters, return ""
    if (!arrayOfCharacters) return "";

    // Replaces the letters with their alphabetical index and joins them in a string
    return arrayOfCharacters
        .map((el) => {
            return alphabet.search(el) + 1;
        })
        .join(" ");
}

console.log(
    alphabetPosition("prova test 123 ciao AB.,()CDEFGHI--.,?^JKLMNOPQRSTUVWXYZ")
);
