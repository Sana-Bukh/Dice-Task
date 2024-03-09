function rollDice() {
    // Generate a random number between 1 and 6 for the dice roll
    var rollResult = Math.floor(Math.random() * 6) + 1;

    // Get the image element
    var diceImage = document.getElementById('diceImage');

    // Set the source of the image to correspond to the rolled number
    diceImage.src = 'dice' + rollResult + '.png';
}