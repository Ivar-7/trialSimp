function duplicateEncode(word) {
  // Count the number of occurrences of each character in the word
  const charCount = {};
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Encode the string based on the character count
  const result = [];
  for (let i = 0; i < word.length; i++) {
    const char = word[i].toLowerCase();
    result.push(charCount[char] > 1 ? ")" : "(");
  }

  return result.join("");
}

console.log(duplicateEncode("pomupomz"));
console.log(duplicateEncode("Success"));
// console.log("Success)");
