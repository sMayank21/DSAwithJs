// [1,1,2,3,3,5,5] <-> 2
//
/*
// brute solution

function singleNumber( nums ) {
  let n = nums.length;
  for( let i = 0 ; i < n ; i++ ) {
    let count = 0;
    for ( let j = 0 ; j < n ; j++ ){
      if( nums[i] === nums[j]){
        count++;
      }
    }
    if( count === 1 ) {
      return nums[i];
    }
  }
  return 0;
}
console.log(singleNumber([1,1,2,2,3,3,5]));
*/
/*
// better Solution

function singleNumber( nums ) {
  let n = nums.length;
  let hash = [...Array(n)].fill(0);
  for( let i = 0 ; i < nums.length ; i++ ) {
    hash[nums[i]]++;  
  }
  for( let i = 0 ; i < hash.length ; i++ ) {
    if( hash[nums[i]] === 1 ){
      return nums[i];
    }
  }
  return 0;
}

console.log(singleNumber([1,1,2,2,3,3,4,4,5]));
*/


// Optimal Solution

function singleNumber( nums ) {
  let xor = 0;
  for( let i = 0 ; i < nums.length ; i++ ) {
    xor = xor ^ nums[i] ;
  }
  return xor;
}
console.log(singleNumber([1,1,2,2,3,3,4,4,5]));
