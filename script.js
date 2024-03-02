let userScore=0;
let compScore=0;
let msg_conatiner=document.querySelector("#msg-cont");
let userMarks=document.querySelector("#user-score");
let compMarks=document.querySelector("#comp-score");


const choices = document.querySelectorAll(".choice");

const generateChoice =()=>{
    const options =["rock","paper","scissor"];
    const some=Math.floor(Math.random()*3);
    return options[some];
}

function drawGame(){
    msg_conatiner.innerHTML="Game is Draw, Play again";
    msg_conatiner.style.backgroundColor="black";
   // console.log("game is DRAW");
}

function showWinner(userWin,compChoice,userChoice){
    if(userWin){
        userScore++;
        userMarks.innerHTML=userScore;
        msg_conatiner.innerHTML=`You win!! Your ${userChoice} beats ${compChoice}`;
        msg_conatiner.style.backgroundColor="green";
        //console.log("You win");
    }
    else{
        compScore++;
        compMarks.innerHTML=compScore;
        msg_conatiner.style.backgroundColor="red";
        msg_conatiner.innerHTML=`Comp win!! ${compChoice} beats ${userChoice}`;
        //console.log("computer win");
    }
}

// generateChoice();
const playGame = (userChoice) =>{
    //console.log("user choice ",userChoice);
    const compChoice=generateChoice();
   // console.log("comp choice",compChoice)
    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
             userWin = compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            userWin= compChoice==="scissor"? false:true;
        }else if(userChoice==="scissor"){
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,compChoice,userChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})