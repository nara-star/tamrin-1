//  const numbers=[1,22,33,9,65,21,7,5,86,79,14,26]
// console.log(numbers)
// console.log(numbers.sort)
// const sortedName=numbers.sort(1,22,3,44,55,21,4,5,78,65,27,36,93,9);
// console.log(numbers)

const numbers=[[1,22,33,9,65,21,7,5,86,79,14,26],[53,73,79,76,98,16,83]];
const numbers1=numbers[0];
const numbers2=numbers[1];
const newNumbers=[...numbers1,...numbers2]
console.log(newNumbers)
const sortedNumbers=newNumbers.sort();
console.log(sortedNumbers)
