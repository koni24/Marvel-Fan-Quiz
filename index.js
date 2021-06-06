const chalk = require('chalk');
var readlineSync=require("readline-sync");
var score=0;
// welcome
function welcome(){
  console.log(chalk.green("Hii! Whats your name? "))
  var userName=chalk.green(readlineSync.question());
  console.log(chalk.green("Welcome "+userName +" ! Are you a true Marvel Fan lets check:"));
}

  // array of objects
  var questions=[{
    question:"IRON MAN: What song plays at the beginning of the movie?  option are (a) Iron Man by Black Sabbath (b) Black In Black by AC/DC  ",
    answer:"b"
  },{
    question:"THE INCREDIBLE HULK: WHat does Tony tell Thaddeus Ross at the end of the flim? option are (a) That they are putting a team together (b) That he knows about S.H.I.E.L.D. ",
    answer:"a"
  },
  {
    question:"IRON MAN 2: What fake name does Natasha use when she first meets Tony? option are (a) Natalie Rushman  (b) Natalia Romanoff ",
    answer:"a"
  },
  {
    question:"IRON MAN 3: What is the name of the little boy Tony befriends withile stranded? option are (a) Harry  (b) Harley ",
    answer:"b"
  },{
    question:"Which of these is NOT an infinity stone? option are (a) Love (b) Reality (c) Space (c) Time ",
    answer:"a"
  },
  {
    question:"What's the name of the helpful AI Tony Stark invented to replace J.A.R.V.I.S.?  option are (a) S.H.I.E.L.D.  (b) F.R.I.D.A.Y. (c) U.L.T.R.O.N. ",
    answer:"b"
  },
  {
    question:"Who lifted Thor's hammer in Avengers: Infinity war option are (a) Tony Stark (b) Captain America ",
    answer:"b"
  }];

   
   function play(question,answer){
     var userAnswer=readlineSync.question(question);

     if(userAnswer.toUpperCase() == answer.toUpperCase()){
       console.log("you are correct");
       score=score+1;
     }
     else{
       console.log("oops! you are wrong");
       console.log("The correct answer is: ",answer);
       score=score-1;
     }
     console.log("current score: ",score);
     console.log("--------------");

   }
   function game(){
     for(var i=0; i<questions.length;i++){
       var currentQuestion=questions[i];
       play(currentQuestion.question,currentQuestion.answer);
     }
   }
   function highest_score() {
     console.log("Shivasha : 6");
     console.log("Satyam   : 5");
   }
   function final_score() {
       console.log("YAY! you scored: "+score);
       console.log("Check out the high scores,if you shoud be there ping me and I'll update it.");
     }
   

welcome();
game();
final_score();
highest_score();

