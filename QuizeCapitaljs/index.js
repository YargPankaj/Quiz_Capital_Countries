var readlineSync = require('readline-sync');
var quizeQuestAns = [
  {
  question: "What is the capital of India? ",
  answer: "Delhi",
}, 
{
  question: "What is the capital of USA? ",
  answer: "Washington DC",
},
  {
    question: "What is the capital of Japan? ",
    answer: "Tokyo",
  },
  {
    question: "What is the capital of China? ",
    answer: "Beijing",
  },
  {
    question: "What is the capital of Australia? ",
    answer: "Canberra",
  }
];
var score = 0;

function userEntry () {
  var userName = readlineSync.question("What is your Name? ");
console.log("Welcome " + userName);
  var entryQuest = readlineSync.question("Do you want to Continew the quize? ");
  console.log("============");
if (entryQuest === "yes"){
    console.log("Your welcome in the Quize. Please answer in Capitalization");
} else {
    console.log("Sorry, We will happy to see you here again.");
};
};

function welcomeQuize (question, answer) {
  for (var i=0; i<quizeQuestAns.length; i++){
  var currentQuest = quizeQuestAns[i];
  var playQuize = readlineSync.question(currentQuest.question);
    if (playQuize === currentQuest.answer){
      score = score + 1;
      console.log("Your score is: " + score);
    } else {
      console.log("Sorry, Your answer is wrong.");
    }
    console.log("==============")
  };
  console.log("Your Total Score is : " + score);
};
userEntry()
welcomeQuize()
