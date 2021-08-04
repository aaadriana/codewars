/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

function rot13(message) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetLength = alphabet.length;

  return message
    .split("")
    .map((element) => {
      const uppercase = element === element.toUpperCase();
      const character = element.toLowerCase();
      if (!alphabet.includes(character)) return character;

      const elementIndex = alphabet.indexOf(character);
      const rot13Index = elementIndex + 13; //rot13 requires us to replace a letter with the letter 13 letters after it in the alphabet
      const index =
        rot13Index >= alphabetLength ? rot13Index - alphabetLength : rot13Index;

      return uppercase ? alphabet[index].toUpperCase() : alphabet[index];
    })
    .join("");
}
