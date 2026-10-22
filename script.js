let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener("click", function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log( guess, typeof guess)


    // if guess is empty
    if(!guess) {
        // document.querySelector('.message').textContent = "No number!"
        displaymessage("No number!")




    } else if(guess === secretnumber) {
        document.querySelector(".number").textContent = secretnumber
        // document.querySelector('.message').textContent = "Correct Number!"
        displaymessage("Correct Number!")

        document.querySelector('body').style.backgroundColor = "#60b347"
        document.querySelector(".number").style.width = "300px"

        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore;
        }

    } else if(guess !== secretnumber) {
        if( score > 1){
            displaymessage(guess > secretnumber ? "Too high": "Too low")
            score--
            document.querySelector(".score").textContent = score

        }else{
            displaymessage("oops you have lost the game")
            document.querySelector(".score").textContent = 0;
        }
       
    } 




});

document.querySelector('.Again').addEventListener("click", function(){
    secretnumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('body').style.backgroundColor ="#222"
    document.querySelector('.score').textContent = score
    
    displaymessage("start guessing....")
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = "150px"
    document.querySelector('.guess').value = "";


})

