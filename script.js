let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=(compChoice)=>{
    msg.innerText=`The game is a Draw,Computer also chose ${compChoice}`;
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        console.log("You win");
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Computer chose ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        console.log("You lose");
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You lose! Computer chose ${compChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("User choice:", userChoice);
    const compChoice=genCompChoice();
    console.log("Compouter choice:", compChoice);

    if(userChoice===compChoice){
        drawGame(compChoice);
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});