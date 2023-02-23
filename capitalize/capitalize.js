function firstLetter (string){
    const word = string.charAt(0).toUpperCase() + string.slice(1);
    return word;
}
const word = prompt("Enter a word!");
const result = firstLetter(word);
console.log(result);