/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/

function findShort(s) {
  const array = s
    .split(" ")
    .map((entry) => entry.length)
    .sort((a, b) => a - b)
    .slice(0, 1)
    .shift();
  return array;
}

findShort("bitcoin take over the world maybe who knows perhaps"); // 3);
findShort("turns out random test cases are easier than writing out basic ones"); // 3);
findShort("Let's travel abroad shall we"); // 2);
