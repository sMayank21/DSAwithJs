/*
function bestTime( nums ) {
  let mini = nums[0];
  let maxProfit = 0;
  let n = nums.length;
  for( let i = 0 ; i < n ; i++ ) {
    let cost = nums[i] - mini;
    maxProfit = max(maxProfit, cost);
    mini = min(mini, nums[i]);
  }
  return maxProfit;
}
function max( a , b){
  if ( a >= b){
    return a;
  } else {
    return b;
  }
}
function min( a , b) {
  if ( a <= b ){
    return a;
  } else {
    return b;
  }
}
console.log(bestTime([7,1,5,3,6,4]));

*/
/*
// Not correct yet
function nReverse( nums, start , end ) {
  while ( start <= end ){
    let temp = nums[start];
    nums[start] = nums[end] ;
    nums[end]= temp;
    start++;
    end--;
  }
  return nums;
}
function bestTime( nums ) {
  let ind = -1;
  let n = nums.length;
  for(let i = n-2 ; i >= 0 ; i-- ) {
    if(nums[i]< nums[i+1]){
      ind = 1;
      break;
    }
  }
  if(ind == -1) {
    nums = nReverse(nums,nums[0],nums[n-1]);
  }
  for( let i = n-1 ; i > ind ; i++ ) {
    if(nums[i] > nums[ind]){
      let temp = nums[i];
      nums[i] = nums[ind];
      nums[ind]=temp;
    }
  }
  nums = nReverse(nums, nums[0] + 1 + ind,nums[n-1]);
  return nums;
}
console.log(bestTime([7,1,5,3,6,4]));
*/
