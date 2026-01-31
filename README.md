# Rock Paper Scissors 🎮

A simple **Rock–Paper–Scissors** game built with **Vanilla JavaScript**, played in the browser using `prompt()` and the console.

The game continues until either the player or the computer reaches **3 points**.

---

## How It Works

- The player enters `rock`, `paper`, or `scissors`
- The computer randomly selects a choice
- Each round:
  - **Win** → player gets 1 point
  - **Lose** → computer gets 1 point
  - **Tie** → no points
- First to **3 wins** ends the game

---

## Game Logic

- **`getHumanChoice()`**  
  Gets user input via `prompt()`

- **`getComputerChoice()`**  
  Randomly selects a move for the computer

- **`playRound()`**  
  Compares choices and updates scores

- **`playGame()`**  
  Controls the game loop using a `while` loop and declares the final winner

---

## Example Output

```text
You win! rock beats scissors
Score → You: 2 | Computer: 1

🎉 You won the game!
