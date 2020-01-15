const sentence = "hello there from lighthouse labs";
const delayedTyping = function(sentence) {
  let delay = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    },delay);
    delay += 50;
  }
  setTimeout(() => {
    newline();
  },delay);
};
function newline() {
  console.log("");
};
delayedTyping(sentence);