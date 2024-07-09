/*
// Brute solution 
function countInversion( nums ) {
  let cnt = 0;
  for(let i = 0 ; i < nums.length ; i++) {
    for(let j = i+1; j < nums.length ;j ++) {
      if(nums[i] > nums[j]) cnt++;
    }
  }
  return cnt;
}
console.log(countInversion([5,3,2,4,1]));
*/

// Optimal solution 
