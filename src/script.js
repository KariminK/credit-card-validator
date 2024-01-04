import luhnaObj from "./luhna.js";

const checkBtn = document.querySelector("#checkBtn");
const creditInput = document.querySelector("#creditInput");
const mainContainer = document.querySelector("main");
const createErrorMessage = (text) => {
  document.querySelectorAll(".error").forEach((error) => {
    if (error.textContent === text) error.remove();
  });
  const p = document.createElement("p");
  p.classList.add("error");
  p.textContent = text;
  mainContainer.insertAdjacentElement("afterend", p);
};
const createCorrectMessage = (text) => {
  document.querySelectorAll(".correct").forEach((correct) => correct.remove());
  const p = document.createElement("p");
  p.classList.add("correct");
  p.textContent = text;
  mainContainer.insertAdjacentElement("afterend", p);
};

checkBtn.addEventListener("click", async (e) => {
  document.querySelectorAll(".error").forEach((error) => error.remove());
  if (document.querySelector(".correct"))
    document.querySelector(".correct").remove();
  const number = creditInput.value;
  const checkCard = luhnaObj.checkCard(number);
  if (checkCard !== true) {
    createErrorMessage(checkCard);
    return;
  }
  const firstNum = number.split("")[0];
  switch (+firstNum) {
    case 2:
    case 5:
      createCorrectMessage("Mastercard");
      break;
    case 4:
      createCorrectMessage("Visa");
      break;
    case 3:
      createCorrectMessage("American Express");
      break;
    default:
      createErrorMessage("nieznany producent karty");
  }
});
