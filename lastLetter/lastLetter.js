function capitalize (string){
    const lastLetter = string.charAt(string.length-1)
    return lastLetter;
}
const lastLetter = prompt("Enter a word where you want the final letter.");
const result = capitalize(lastLetter)
console.log(result)