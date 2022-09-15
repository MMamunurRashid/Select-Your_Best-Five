const selectedPlayer = [];

function display(playerSelect) {
  const selectedPlayerList = document.getElementById("selected-player-list");

  const li = document.createElement("li");

  li.innerHTML = `${playerSelect[playerSelect.length - 1]}`;
  selectedPlayerList.appendChild(li);
}

function selectBestFive(player) {
  if (selectedPlayer.length >= 5) {
    alert("You can't select more then Five players!!!");
    return;
  }

  const playerName =
    player.parentNode.parentNode.children[1].children[0].innerText;

  const buttonDisable = player.parentNode.parentNode.children[1].children[2];
  buttonDisable.disabled = true;

  selectedPlayer.push(playerName);

  const totalSelectPlayer = (document.getElementById(
    "total-selected"
  ).innerText = selectedPlayer.length);

  display(selectedPlayer);
}
document
  .getElementById("player-calculate-btn")
  .addEventListener("click", function () {
    const playerCost = getInputFieldValueById("player-field");

    const previousPlayerCost = 0;

    const totalPlayerCost = playerCost + previousPlayerCost;

    const totalPlayerExpences = totalPlayerCost * selectedPlayer.length;
    if (isNaN(totalPlayerExpences) || playerCost < 0) {
      alert("Please input a integer number!!!");
      setTextElementValueById("player-expence", 0);
      selectPlayerCostFromSelectFile(NaN);
      return;
    }
    setTextElementValueById("player-expence", totalPlayerExpences);
    selectPlayerCostFromSelectFile(totalPlayerExpences);
  });
