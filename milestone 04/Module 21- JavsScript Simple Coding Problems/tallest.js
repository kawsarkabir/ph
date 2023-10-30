// find the tallents number of an array
function maxTallestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    const index = i;
    const element = numbers[index];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}
const height = [78, 89, 90, 280, 19];
const tallest = maxTallestNumber(height);
console.log(tallest);
