// ####DATI###

const fizz = "fizz";
const buzz = "buzz";
const fizzBuzz = "FizzBuzz";
let outputText = "";

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    outputText = "fizzBuzz";
  } else if (i % 3 == 0) {
    outputText = fizz;
  } else if (i % 5 == 0) {
    outputText = buzz;
  } else {
    outputText = i;
  }
  console.log(outputText);
}
