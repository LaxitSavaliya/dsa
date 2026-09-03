function finalPositionOfSnake(n: number, commands: string[]): number {
  let position: number = 0;

  for (const command of commands) {
    if (command === "LEFT") position--;
    if (command === "RIGHT") position++;
    if (command === "UP") position -= n;
    if (command === "DOWN") position += n;
  }

  return position;
}

console.log(finalPositionOfSnake(2, ["RIGHT", "DOWN"])); //3

console.log(finalPositionOfSnake(3, ["DOWN", "RIGHT", "UP"])); //1
