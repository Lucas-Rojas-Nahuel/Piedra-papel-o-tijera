// buttons
const buttons = document.querySelectorAll("button");

const user = document.querySelector("#user");
const computer = document.querySelector("#computer");

const scoreHuman = document.querySelector("#score-human");
const scoreComputer = document.querySelector("#score-computer");
const round = document.querySelector("#round");

const play = document.querySelector("#play");
const reload = document.querySelector("#reload");

const main = document.querySelector("#main");

const alertas = document.querySelector("#alert");
const btnAlert = document.querySelector("#btn-alert");
const titleAlert = document.querySelector("#title-alert");
const textAlert = document.querySelector("#text-alert");



const result = document.createElement("span");
result.id = "result";
main.appendChild(result);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      button.id === "play" ||
      button.id === "reload" ||
      button.id === "btn-alert"
    )
      return;
    user.textContent = `${button.textContent}`;
  });
});

btnAlert.addEventListener("click", () => {
  alertas.style.display = "none";
});

reload.addEventListener("click", () => {
  location.reload();
});

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (randomNumber) {
    case 0:
      computerChoice = "✊";
      break;
    case 1:
      computerChoice = "✋";
      break;
    default:
      computerChoice = "✌️";
  }
  return computerChoice;
}

play.addEventListener("click", () => {
  const humanChoice = user.textContent;

  if (humanChoice === "❓") {
    alertas.style.display = "flex";
    titleAlert.textContent = `Error`;
    textAlert.textContent="Selecciones unos de los iconos";
  }
  const computerSelection = getComputerChoice();

  if (scoreComputer.textContent < 5 && scoreHuman.textContent < 5) {
    computer.textContent = computerSelection;

    playRound(humanChoice, computerSelection);
  } else if (scoreHuman.textContent > scoreComputer.textContent) {
    alertas.style.display = "flex";
    titleAlert.textContent = `Ganaste `;
    textAlert.innerHTML = `Tu puntuación: ${scoreHuman.textContent} <br>
      La puntuación de la computadora: ${scoreComputer.textContent}`;
  } else {
    alertas.style.display = "flex";
    titleAlert.textContent = "Perdiste";
    textAlert.innerHTML = `Tu puntuación: ${scoreHuman.textContent} <br>
      La puntuación de la computadora: ${scoreComputer.textContent}`;
  }
});

function playRound(humanChoice, computerChoice) {
  if (humanChoice !== computerChoice) {
    // cuando el usuario elija piedra
    if (humanChoice == "✊" && computerChoice == "✋") {
      result.textContent = `¡Pierdes! 😭`;
      scoreComputer.textContent++;
    } else if (humanChoice == "✊" && computerChoice == "✌️") {
      result.textContent = `¡Ganas! 😎`;
      scoreHuman.textContent++;
    }

    // cuando el usuario elija tijera
    if (humanChoice == "✌️" && computerChoice == "✋") {
      result.textContent = `¡Ganas! 😎`;
      scoreHuman.textContent++;
    } else if (humanChoice == "✌️" && computerChoice == "✊") {
      result.textContent = `¡Pierdes! 😭`;
      scoreComputer.textContent++;
    }

    // cuando el usuario elija papel
    if (humanChoice == "✋" && computerChoice == "✌️") {
      result.textContent = `¡Pierdes! 😭`;
      scoreComputer.textContent++;
    } else if (humanChoice == "✋" && computerChoice == "✊") {
      result.textContent = `¡Ganas! 😎`;
      scoreHuman.textContent++;
    }
  } else {
    result.textContent = `¡Empataron! ⚔️`;
  }
}
