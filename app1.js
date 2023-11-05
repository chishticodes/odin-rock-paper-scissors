function getComputerChoice(){
    const choice=["rock","paper","scissor"]
   const randomSelection = Math.floor(Math.random()*3);
   let computerChoice = choice[randomSelection];
   return computerChoice;     
}

const getComputerSelection = getComputerChoice();
// const getUserSelection = userChoice; 
let userPoints = 0
let computerPoints = 0

function playRound(getComputerSelection, getUserSelection){
    if((getUserSelection =="rock" && getComputerSelection == "scissor" )||
    (getUserSelection =="paper" && getComputerSelection == "rock" )||
    (getUserSelection =="scissor" && getComputerSelection == "paper" )){
        console.log(`Computer's Selection is ${getComputerSelection}`);
        console.log("You Got a Point");
        userPoints++;

    }else if((getUserSelection =="rock" && getComputerSelection == "paper" )||
    (getUserSelection =="paper" && getComputerSelection == "rock" )||
    (getUserSelection =="scissor" && getComputerSelection == "paper" )){
        console.log(`Computer's selection is ${getComputerSelection}`);
        console.log("Computer Got a Point");
        computerPoints++;
        
    }else  if((getUserSelection =="rock" && getComputerSelection == "rock" )||
    (getUserSelection =="paper" && getComputerSelection == "paper" )||
    (getUserSelection =="scissor" && getComputerSelection == "scissor" )){
        console.log(`No one Got a Point, Computer also selected ${getComputerSelection}`);}
    
        console.log(`Your Points: ${userPoints}`);
        console.log(`Computer Points: ${computerPoints}`);
    }
    


    
    function game(){
     for(let i=0;i<=4;i++){
        const userChoice = prompt("Would you like to choose rock, paper or scissor").toLowerCase();
        const getUserSelection = userChoice
        playRound(getComputerSelection, getUserSelection);
        // playRound(getComputerSelection, getUserSelection);
      }
    if(userPoints > computerPoints){
        console.log(`You Win`);
    }else if(computerPoints > userPoints){
        console.log(`You Lose`);
    }else{
        console.log(`Its a tie`);
    }    
}    

game();