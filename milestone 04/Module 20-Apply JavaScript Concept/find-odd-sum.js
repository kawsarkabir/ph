//  find odd sum of an array
function findOddSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    sum = sum + element;
  }
  return sum;
}
function getOddNumberOfAnArray(numbers){
    const oddNumber = []
    for(let i = 0; i< numbers.length; i++){
        if(numbers[i] % 2 !== 0){
            return numbers[i]
            oddNumber.push(numbers[i])
        }
        
        
    }
    return oddNumber;
    
}
console.log(getOddNumberOfAnArray([2, 4, 6, 9, 3, 1]));
console.log(findOddSum([1, 2, 3, 4, 5]));
