/*  
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/
function rgb(r, g, b) {
  return [r, g, b]
    .map((x) => {
      let decimal = x;
      if (decimal < 0) {
        decimal = 0;
      }
      if (decimal > 255) {
        decimal = 255;
      }
      return decimal.toString(16).toUpperCase().padStart(2, "0");
    })
    .join("");
}

rgb(255, 255, 255); // returns FFFFFF
rgb(255, 255, 300); // returns FFFFFF
rgb(0, 0, 0); // returns 000000
rgb(148, 0, 211); // returns 9400D3
rgb(173, 255, 47); // 'ADFF2F'
