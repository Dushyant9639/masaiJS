function getCharacterFrequency(str) {
  return str
    .trim()                         
    .toLowerCase()                
    .split('')                     
    .reduce((freq, char) => {
      if (char !== ' ') {         
        freq[char] = (freq[char] || 0) + 1;
      }
      return freq;
    }, {});
}
const str = " Hello World! ";
const result = getCharacterFrequency(str);
console.log(result);
