/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 60 / 60);
  const min = Math.floor(seconds / 60) - hours * 60;
  const sec = seconds % 60;
  return `${hours.toString().padStart(2, "0")}:${min
    .toString()
    .padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
}

humanReadable(5); // '00:00:05',
humanReadable(60); // '00:01:00',
humanReadable(86399); // '23:59:59',
humanReadable(359999); // '99:59:59',
