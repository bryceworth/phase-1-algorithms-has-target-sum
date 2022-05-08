//([3, 8, 12, 4, 11, 7], 10));

function hasTargetSum(array, target) {
 
  for (let index = 0; index < array.length; index++) {

  const veriable = target - array[index]
      
  for (let myNumber = index + 1; myNumber < array.length; myNumber++){
      
  if (array[myNumber] === veriable) return true
  }
}
return false
}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  array of numbers
  a target number
  any 2 numbers in array = target number === true
  target and arrays are already written
  write a code that tells java to find the two numbers within the
  array that add up to the target number
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
