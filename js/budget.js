//  get Total Player expances from selectedFive file.
let getTotalPlayerExpences;
function selectPlayerCostFromSelectFile(totalPlayerExpences) {
  getTotalPlayerExpences = totalPlayerExpences;
}

document
  .getElementById("total-calculate")
  .addEventListener("click", function () {
    const managerCost = getInputFieldValueById("manager-field");

    const coachCost = getInputFieldValueById("coach-field");
    if (isNaN(getTotalPlayerExpences)) {
      alert("Please calculate total player expances");
    }
    if (
      isNaN(managerCost) ||
      isNaN(coachCost) ||
      coachCost < 0 ||
      managerCost < 0
    ) {
      alert(" Please insert a number for manager and coach !!!");
      return;
    }
    const totalCost = getTotalPlayerExpences + managerCost + coachCost;

    const totalExpences = parseInt(totalCost);

    setTextElementValueById("total-expences", totalExpences);
  });
