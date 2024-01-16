document.addEventListener("DOMContentLoaded", function () {
    let userInput = document.getElementById("userInput");
    let gameResult = document.getElementById("gameResult");
    let aNumber = Math.ceil(Math.random() * 100);
    console.log(aNumber);

    window.checkGuess = function () {
    let guessNumber=parseInt(userInput.value);
    if(guessNumber > aNumber){
gameResult.textContent="Number is too..High..";
gameResult.style.backgroundColor="#1e217c";
    }
    else if(guessNumber < aNumber){
            gameResult.textContent="Number is too..LOW..";
            gameResult.style.backgroundColor="#1e217c";
                }
                else if(guessNumber === aNumber){
                    gameResult.textContent="Congratulations!..You are winner";
                    gameResult.style.backgroundColor="green";
                }
                else{
                    gameResult.textContent="Invalid..Input";
                    gameResult.style.backgroundColor="red"; 
                }
}
});
