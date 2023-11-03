const userChoice = prompt("Would you like to choose rock, paper or scissor").toLowerCase();



function getComputerChoice(){
    const choice=["rock","paper","scissor"]
   const randomSelection = Math.floor(Math.random()*3);
   let computerChoice = choice[randomSelection];
   return computerChoice;     
}

    const getComputerSelection = getComputerChoice()
    const getPlayerSelection = userChoice

function playRound(getComputerSelection, getPlayerSelection){
    console.log(`the computer choose ${getComputerSelection}`)
    if(getComputerSelection=='rock' && getPlayerSelection =='rock'){
        console.log('You tied with the Computer, both of you selected Rock')
    }else if(getComputerSelection=='rock' && getPlayerSelection =='paper'){
        console.log('You Won, Paper Beats Rock')
    }else if(getComputerSelection=='rock' && getPlayerSelection =='scissor'){
        console.log('You Lose, Rock Beats Scissor');
    }else if(getComputerSelection=='paper' && getPlayerSelection =='rock'){
        console.log('You Lose,Paper Beats Rock')
    }else if(getComputerSelection=='paper' && getPlayerSelection =='paper'){
        console.log('You tied with the Computer, both of you selected Paper')
    }else if(getComputerSelection=='paper' && getPlayerSelection =='scissor'){
        console.log('You Lose,Scissor Beats Paper');
    }else if(getComputerSelection=='scissor' && getPlayerSelection =='rock'){
        console.log('You Lose, Rock Beats Scissor')
    }else if(getComputerSelection=='scissor' && getPlayerSelection =='paper'){
        console.log('You Lose, Scissor Beats Paper')
    }else if(getComputerSelection=='scissor' && getPlayerSelection =='scissor'){
        console.log('You tied with the Computer, both of you selected Scissor');
    }else{
        console.log('Your choice seems to be invalid');
    }
}

playRound(getComputerSelection,getPlayerSelection)