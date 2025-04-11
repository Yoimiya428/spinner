const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// rl.question("What do you think of Node.js? ", (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });
const questions = ["What's your name? Nicknames are also acceptable :) ",
  "What's an activity you like doing? ",
  "What do you listen to while doing that? ",
  "Which meal is your favourite (eg: dinner, brunch, etc.)? ",
  "What's your favourite thing to eat for that meal? ",
  "Which sport is your absolute favourite? ",
  "What is your superpower? In a few words, tell us what you are amazing at! "]

const answerArr = [];



const askQuestion = (i = 0) => {

  rl.question(questions[i], (answer) => {
  answerArr.push(answer);
    
  if (answerArr.length < questions.length) {
    askQuestion(i+1);
  }
  else 
  {console.log("\n✅ Your personalized profile:\n");
  console.log(
      `${answerArr[0]} loves to ${answerArr[1]} while listening to ${answerArr[2]}. Their favorite meal of the day is ${answerArr[3]}, and they enjoy eating ${answerArr[4]} at that time. ${answerArr[0]}'s absolute favorite sport is ${answerArr[5]}, and their superpower is: ${answerArr[6]}.`
    );
  
    rl.close();}
  })
};

askQuestion();