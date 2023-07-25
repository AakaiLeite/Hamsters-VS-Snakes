window.onload = function () {
  const startButton = document.getElementById("start-button");
  const instructionButton = document.getElementById("instructions-button");
  const restartButton = document.getElementById("restart-button");

  let game;

  function startGame() {
    console.log("start game");

    game = new Game();

    game.initializeBoard();
  }

  startButton.addEventListener("click", () => {
    startGame();
  });

  instructionButton.addEventListener("click", () => {
    game = new Game();
    game.showInstructions();
  });

  restartButton.addEventListener("click", () => {
    location.reload();
  });

  // Function that handles keydown events
  function handleKeyDown(event) {
    const key = event.key;
    possibleKeyStrokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    // Check if pressed key belongs to the array of possible keys
    if (possibleKeyStrokes.includes(key)) {
      // Prevent the defaault action from happening
      event.preventDefault();
      // Only once thhe game is loaded can we move the player
      if (game) {
        //Update the plaayer position based on the key press
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -1;
            break;
          case "ArrowRight":
            game.player.directionX = 1;
            break;
          case "ArrowUp":
            game.player.directionY = -1;
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
      }
    }
  }

  // Function that handles keyup events
  function handleKeyUp(event) {
    const key = event.key;
    possibleKeyStrokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    // Check if pressed key belongs to the array of possible keys
    if (possibleKeyStrokes.includes(key)) {
      // Prevent the defaault action from happening
      event.preventDefault();
      // Only once thhe game is loaded can we move the player
      if (game) {
        //Update the plaayer position based on the key press
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = 0;
            break;
          case "ArrowRight":
            game.player.directionX = 0;
            break;
          case "ArrowUp":
            game.player.directionY = 0;
            break;
          case "ArrowDown":
            game.player.directionY = 0;
            break;
        }
      }
    }
  }

  //Associate the handleKeyDown and handleKeyUp functions with the Event Listener
  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
};