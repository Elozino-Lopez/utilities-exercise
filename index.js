const {largeNumber, cut3} = require('./utilities/first-utility');
const {sum, concat} = require('./utilities/second-utility'); 

const array = [2, 3, 4]
const largestNumber = largeNumber(array);
console.log(largestNumber);



const alphabets = ['a', 'b', 'c', 'd', 'e']
const removeThirdAlphabet = cut3(alphabets);
console.log(removeThirdAlphabet);



const addArray = sum([1,2,3,4]);
console.log(sumArray);



const firstArray = [1,2,3,4]
const secondArray = [5,6,7,8]
const joinArray = concat(firstArray, secondArray);
console.log(joinArray);

