const sentence = "Hello there ❤️ from AvaCado to Benny";

const delayLog = (char, multiplier) => {
  setTimeout(() => {
    process.stdout.write(char);
  }, 60 * multiplier);
}

const typewriter = (stringSentence) => {  
  const sentenceArray = stringSentence.split('')
  
  sentenceArray.forEach((char, index) => {
    delayLog(char, index + 1);
  });

  setTimeout(() => {
    process.stdout.write('\n');
  }, 60 * (sentenceArray.length));
}

typewriter(sentence);