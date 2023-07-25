// Create Snake class and add following functions
// Snake Class: updatePosition(), move()
// Optional: adjustSpeed()

class Snake {
  // Create constructor with base properties and values
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    // Random position for the appearance of the obstacle
    this.top = Math.floor(Math.random() * 380 + 90);
    // Appear from the top (right side)
    this.left = 0;
    // Have the following width and height
    this.width = 50;
    this.height = 150;
    // Create the HTML element and default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/snake.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.element.style.transform = "rotate(90deg)";
    this.gameScreen.appendChild(this.element);

    // Move the snake
  }
  // Updates the position of the snake
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  move() {
    // Drop the obstacle to the bottom
    this.left += 1;
    this.updatePosition();
  }
}
/*

    
    // Optional: animate the snake
    animate()
    
    // Optional: adjust speed of the snake
    adjustSpeed()
*/