//1.  Deposit some money
// 2. determine the number of lines to bet on 
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won 
// 6. give the user their winnings 
// 7. play again

const prompt = require("prompt-sync")();

const deposit = ()=>{
    while(true){
        const depositAmount = prompt("Enter a deposit amount: ")
        const numberDepositAmount = parseFloat(depositAmount);
    
        if(isNaN(numberDepositAmount)||numberDepositAmount<=0){
            console.log("INvalid Deposit Amount. Try again.")
    }else{
        return numberDepositAmount;
    }
    }
    
};

const getNumberOfLines=()=>{
    while(true){
        const lines = prompt("Enter number of lines to bet on(1 - 3): ")
        const numberOfLines = parseFloat(lines);
    
        if(isNaN(numberOfLines)||numberOfLines<=0 ||numberOfLines>3){
            console.log("Invalid Number of lines. Try again.")
    }else{
        return numberOfLines;
    }
};

}


const depositAmount = deposit();
console.log(depositAmount);
const numberOfLines = getNumberOfLines();
