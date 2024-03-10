// Function to roll the dice
function rollDice() {
  // Get the selected number of dice
  const numDice = document.getElementById("numDice").value;
  
  // Roll each dice and update the results
  for (let i = 1; i <= 2; i++) {
    const diceElement = document.getElementById("dice" + i);
    if (i <= numDice) {
      diceElement.style.display = "flex"; // Show the dice
      const diceResult = Math.floor(Math.random() * 6) + 1; // Generate a random number between 1 and 6
      // Update the dice image based on the result
      diceElement.querySelector(".dice-img").src = "Dices/dice" + diceResult + ".svg";
      diceElement.querySelector("._6").innerText = diceResult;
    } else {
      diceElement.style.display = "none"; // Hide the extra dice
    }
  }
}
