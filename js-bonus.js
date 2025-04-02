let stringa = "ciao";

let output;

for (i = 0; i <= 4; i++) {
  console.log(stringa[i]);
  if (i % 2 == 0) {
    output = "fi";
  } else if (i % 3 == 0) {
    output = "fa";
  } else if (i % 4 == 0) {
    output = "fo";
  } else {
    output = i;
  }

  console.log(output);
}
