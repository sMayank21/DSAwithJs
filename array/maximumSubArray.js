function maxSub(nums) {
  let max = -Number.MAX_SAFE_INTEGER;
  let sum = 0;
  for( let i = 0 ; i < nums.length ; i++ ) {
    sum+=nums[i];
    if(sum > max){
      max = sum;
    }
    if(sum < 0){
      sum=0;
    }
  }
  return max;
}
console.log(maxSub([-2,-3,4,-1,-2,1,5,-3]))
