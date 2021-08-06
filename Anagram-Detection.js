/* An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

var isAnagram = function (test, original) {
  const o = original.toLowerCase().split("").sort().join("");
  const t = test.toLowerCase().split("").sort().join("");

  if (o === t) {
    return true;
  } else {
    return false;
  }
};

isAnagram("foefet", "toffee"); // true, 'The word foefet is an anagram of toffee')
isAnagram("Buckethead", "DeathCubeK"); //  true, 'The word Buckethead is an anagram of DeathCubeK')
isAnagram("Twoo", "WooT"); // true, 'The word Twoo is an anagram of WooT')
isAnagram("dumble", "bumble"); //  false, 'Characters do not match for test case dumble, bumble')
isAnagram("ound", "round"); //  false, 'Missing characters for test case ound, round')
isAnagram("apple", "pale"); // false, 'Same letters, but different count')
