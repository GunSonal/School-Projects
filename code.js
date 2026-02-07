let playerTotal = 0;
let dealerTotal = 0;
let money = 100;
let currentBet = 0;

// This function allows the game to begin, once the button is clicked
function playGame(){
    let bet = document.getElementById("betInput").value;
    playRound(bet);
}

// This function begins the round and starts a bet.
function playRound(bet){
    bet = Number(bet);
    if (bet <= 0 || bet > money) {
        document.getElementById("output").textContent = "Enter a valid bet.";
        return;
    }
    currentBet = bet;
    let playerCard = Math.floor(Math.random()*11)+1;
    let dealerCard = Math.floor(Math.random()*11)+1;
    //playerTotal = playerCard + bet;
    //dealerTotal = dealerCard + 7;
    document.getElementById("output").textContent = "You bet $" + currentBet + " Player total: " + playerTotal + " Dealer shows: " + dealerCard;
}

// This function will allow the player to hit for a new card
function hit(){
    let newCard = Math.floor(Math.random()*11)+1;
    playerTotal = playerTotal + newCard;
    if (playerTotal > 21){
        money = money - currentBet;
        document.getElementById("output").textContent = "You drew " + newCard + " Total: " + playerTotal + " You busted and lost $" + currentBet;
        updateMoney();
    } else {
        document.getElementById("output").textContent = "You drew " + newCard + " Total: " + playerTotal + " Hit or stand? ";
    }
}

// This function will allow the player to stand on their current total.
function stand(){
    while (dealerTotal < 17){
        let newDealerCard = Math.floor(Math.random()*11)+1;
        dealerTotal = dealerTotal + newDealerCard;
    }
    let result = "Player total: " + playerTotal + " Dealer total: " + dealerTotal;
    if (dealerTotal > 21 || playerTotal > dealerTotal){
        money = money + currentBet;
        result += " You win $" + currentBet;
    } else if (playerTotal < dealerTotal) {
        money = money - currentBet;
        result += " You lose $" + currentBet;
    } else {
        result += " It's a tie.";
    }
    document.getElementById("output").textContent = result;
    updateMoney()
}

function updateMoney() {
    document.getElementById("money").textContent = money;
}