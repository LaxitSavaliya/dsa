function secondsBetweenTimes(startTime: string, endTime: string): number {
  function toSeconds(time: string): number {
    const hours = Number(time.slice(0, 2));
    const minutes = Number(time.slice(3, 5));
    const seconds = Number(time.slice(6, 8));

    return hours * 3600 + minutes * 60 + seconds;
  }

  return toSeconds(endTime) - toSeconds(startTime);
}

console.log(secondsBetweenTimes("01:00:00", "01:00:25")); //25

console.log(secondsBetweenTimes("12:34:56", "13:00:00")); //1504
