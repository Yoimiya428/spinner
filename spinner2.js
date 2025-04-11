const spinnerChars = ['|', '/', '-', '\\', '|'];
let waitTime = 100;

for (const char of spinnerChars) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, waitTime);
  waitTime += 200; 
}

  