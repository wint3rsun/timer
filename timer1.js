const arguments = process.argv.slice(2);
const beep = '\x07';

const timings = arguments.filter((arg) => {
  return Number.isInteger(1 * arg) && ((1 * arg) >= 0);
}).map(num => 1000 * num);
const sortedTimings = timings.sort(function(a, b){return a-b});

for (const time of sortedTimings) {
  setTimeout(() => {
    process.stdout.write(beep);
  }, time);
}
