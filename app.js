let userScore=0;
let compScore=0;

const choices= document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
})

const playGame = (userChoice)=>{
    // console.log("user Choice = ",userChoice);
    //Generate computer choice
    const compChoice=genComputerChoice()
    // console.log("computer Choice = ",compChoice);
    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin =true;
        if(userChoice === "rock"){
            //computer must be chose either scissor or paper because choice rock if computer choice rock then game was drawen
            userWin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userWin= compChoice==="scissor"?false:true;
        }else{
            //computer have rock and paper
            userWin = compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const genComputerChoice = ()=>{
    //rock, paper, scissors
    const options =["rock","paper","scissor"]
    const randomIdx=Math.floor(Math.random()*3);//Math.floor delete the decimal value and convert into the previous integer
    return options[randomIdx];
}

const drawGame =()=>{
    // console.log("game was draw.");
    msg.innerText ="Game was draw. Play again."
    msg.style.backgraoundcolor="#081b31";
}

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You win!");
        msg.innerText =`You win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgraoundcolor="green"
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You loss.");
        msg.innerText =`You loss. ${compChoice} beats Your ${userChoice}`
        msg.style.backgraoundcolor="red"
    }
}