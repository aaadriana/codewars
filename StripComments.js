/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(input, markers) {
  return input
    .split("\n")
    .map((el) => {
      let index = el.length + 1;
      markers.forEach((marker) => {
        const internalIndex = el.indexOf(marker);
        if (internalIndex > -1) {
          index = internalIndex;
        }
      });
      return el.slice(0, index - 1);
    })
    .join("\n");
}

solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]); // "apples, plums\npears\noranges"
