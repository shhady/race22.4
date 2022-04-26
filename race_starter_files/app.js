const player1 = document.querySelectorAll("#player1-race td");
const player2 = document.querySelectorAll("#player2-race td");

//! new h1 to display win and playagain msg
const endMsg = document.createElement("h1");
endMsg.style = "text-align: center; margin-top: 4rem;";
document.body.appendChild(endMsg);

//! pos is for postions of both players, flag for gameover check
const pos = [0, 0];
let flag = false;

window.addEventListener("keyup", (e) => {
  if (!flag) {
    //! if game not over check to see which player is moving
    if (e.key === "ArrowRight") {
      flag = movePlayer(player1, pos[0]);
      pos[0]++;
    } else if (e.key.toLowerCase() === "a") {
      flag = movePlayer(player2, pos[1]);
      pos[1]++;
    }
    //! check if game is over after a player movement
    if (flag) {
      let winner = pos[0] === 11 ? "Player 1" : "Player 2";
      endMsg.style.color = pos[0] === 11 ? "red" : "orange";
      alert(`${winner} has won the race! press Enter Twice to play again...`);
    }
  } else {
    //! if game is over check for Enter key input to start again
    if (e.key === "Enter") {
      movePlayer(player1, pos[0]);
      movePlayer(player2, pos[1]);
      pos[0] = 0;
      pos[1] = 0;
      endMsg.innerText = "";
      flag = false;
    }
  }
});

//! func gets player TDs array and a number of current position and moves player.
function movePlayer(player, playerNum) {
  player[playerNum].classList.toggle("active");
  if (flag) {
    player[0].classList.toggle("active");
  } else {
    player[playerNum + 1].classList.toggle("active");
  }
  if (playerNum + 1 === 11) {
    return true;
  }
  return false;
}
