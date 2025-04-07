
/* función aleatoria para que elija la computadora entre papel, tijera y piedra */
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;

  switch (randomNumber) {
    case 0:
      computerChoice = "piedra";
      break;
    case 1:
      computerChoice = "papel";
      break;
    default:
      computerChoice = "tijera";
  }
  return computerChoice;
}


/* obtenemos la elección del usuario */
function getHumanChoice() {
  let userChoice = prompt("Ingrese papel, piedra o tijera para jugar");
  return userChoice.toLowerCase();
}

/* creamos las puntuaciones */
let humanScore = 0;
let computerScore = 0;

/* creamos el juego con 5 rondas */
function playGame() {
  for (let i = 0; i < 5; i++) {
    function playRound(humanChoice, computerChoice) {
      if (humanChoice !== computerChoice) {
        /* cuando el usuario elija piedra */
        if (humanChoice == "piedra" && computerChoice == "papel") {
          console.log(`¡Pierdes! ${computerChoice} le gana a ${humanChoice}`);
          computerScore += 1;
        } else if (humanChoice == "piedra" && computerChoice == "tijera") {
          console.log(`¡Ganas! ${humanChoice} le gana a ${computerChoice}`);
          humanScore += 1;
        }

        /* cuando el usuario elija tijera */
        if (humanChoice == "tijera" && computerChoice == "papel") {
          console.log(`¡Ganas! ${humanChoice} le gana a ${computerChoice}`);
          humanScore += 1;
        } else if (humanChoice == "tijera" && computerChoice == "piedra") {
          console.log(`¡Pierdes! ${computerChoice} le gana a ${humanChoice}`);
          computerScore += 1;
        }

        /* cuando el usuario elija papel */
        if (humanChoice == "papel" && computerChoice == "tijera") {
          console.log(`¡Pierdes! ${computerChoice} le gana a ${humanChoice}`);
          computerScore += 1;
        } else if (humanChoice == "papel" && computerChoice == "piedra") {
          console.log(`¡Ganas! ${humanChoice} le gana a ${computerChoice}`);
          humanScore += 1;
        }
      } else {
        console.log(`¡Empataron! ${humanChoice} empata con ${computerChoice}`);
      }

      /* MOSTRAMOS LOS RESULTADOS */
      console.log(`Puntaje de la computadora: ${computerScore}`);
      console.log(`Puntaje del jugador: ${humanScore}`);
    }

    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();

    playRound(humanSelection, computerSelection);
  }

  /* comparamos resultadon para ver quien gano */
  if (i === 4) {
    if (humanScore > computerScore) {
      alert(`    Ganaste 
        Tu puntuación: ${humanScore} 
        La puntuación de la computadora: ${computerScore}`);
    } else {
      alert(`    Perdiste 
        Tu puntuación: ${humanScore} 
        La puntuación de la computadora: ${computerScore}`);
    }
  }
}

/* ejecutamos el juego */
playGame();
