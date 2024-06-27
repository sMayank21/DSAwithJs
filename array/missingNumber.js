// [1,2,3,5] <-> 4 ( This will be our missing number )
/*
// brurte solution

function missingNumber( nums ) {
  for( let i = 1 ; i <= nums.length ; i++ ){
    let flag = 0;
    for ( let j = 0 ; j < nums.length-1 ; j++ ){
      if( nums[j] == i ){
        flag = i;
        break;
      }
    }
    if( flag === 0){ return i; }
  }
  return flag;
}

console.log(missingNumber([1,2,3,5]));
*/
/*
// better Solution

function missingNumber( nums ) {
  let count = 1;
  for(let i = 0 ; i < nums.length ; i++ ) { 
    if( nums[i] != count ){
      return count;
    } 
    count++;
  }
  return 0;
}
console.log(missingNumber([3,1]));
*/

// Optimal Solution
//
function missingNumber( nums ) {
  let n = nums.length;
  let sum = n*(n+1)/2;
  let store = 0;
  for( let i = 0 ; i < n ; i++ ) {
    store += nums[i];
  }
  return ( sum - store );
}
console.log(missingNumber([3,0,1]));
