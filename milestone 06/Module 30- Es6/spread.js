// spread oparator 
const max = Math.max(9, 7, 9, 10)
const numbers = [12, 29, 0, 18, 89];
const arrayMax = Math.max(...numbers)
console.log(...numbers);
console.log(arrayMax);


// use spreas operator to copy
const nums = [2, 3, 4, 5,10]
const nums2 = nums;
nums2.push(90)
console.log(nums);
console.log(nums2);