function trafficSignal(timer: number): string {
  if (timer === 0) return "Green";

  if (timer === 30) return "Orange";

  if (90 >= timer && timer > 30) return "Red";

  return "Invalid";
}

console.log(trafficSignal(60)); //Red

console.log(trafficSignal(5)); //Invalid
