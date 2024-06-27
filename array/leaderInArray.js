// To find leaders in an array ( Everything on right should be smaller..)
// [10,22,12,3,0,6] <-> [22,12,6]


/*
// Brute Solution
function findLeader( nums ) {
  let leader = []
  for(let i = 0 ; i < nums.length ; i++) {
    let count = 0;
    for( let j = i ; j < nums.length ; j++ ) {
      if( nums[i] < nums[j] ) {
        count= 0;
        break;
      } else {
        count++;
      }
    }
    if (count != 0) {
      leader.push(nums[i]);
    }
  }
  return leader;
} 

console.log(findLeader([10,22,12,3,0,6]));
*/

// Optimal Solution


function findLeader( nums ) {
  let n = nums.length;
  let max = -1;
  let leader = [];
  for(let i = n-1; i >= 0 ; i--) {
    if(nums[i] > max){
      max = nums[i]
      leader.push(nums[i]);
    }
  }
  return leader;
}
console.log(findLeader([10,22,12,3,0,6]));
