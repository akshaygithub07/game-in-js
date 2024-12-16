//1.  Deposit some money
// 2. determine the number of lines to bet on 
// 3. collect a bet amount
// 4. spin the slot machine
// 5. check if the user won 
// 6. give the user their winnings 
// 7. play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT ={
    "A":2,
    "B":4,
    "c":6,
    "D":8
}

const SYMBOL_VALUES = {
    "A":5,
    "B":4,
    "C":3,
    "D":2

}

 



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

const getBet = (balance,lines) =>{
    while(true){
        const bet = prompt("Enter amount of bet per line: ")
        const numberBet = parseFloat(bet);
    
        if(isNaN(numberBet)||numberBet<=0 ||numberBet> balance/lines){
            console.log("Invalid bet. Try again.")
    }else{
        return numberBet;
    }
}

};

const spin = ()=> {
    const symbols = [];
    for(const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0;i<count;i++){
            symbols.push(symbol);
        }
    }
    console.log(symbols);
};

spin();

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance,numberOfLines);
