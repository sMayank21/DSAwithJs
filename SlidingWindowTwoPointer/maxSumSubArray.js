// Optimal Solution 


function maxSum( nums , k ) {
  let sum = 0 ;
  let i = 0 , j = 0;
  let mx = 0;
  while(j < nums.length){
    sum += nums[j];
    if(j-i+1 < k)j++;
    else if(j-i+1 === k) {
      mx = Math.max(mx,sum);
      sum = sum-nums[i];
      i++;
      j++;
    }
  }
  return mx;
}

console.log(maxSum([2,5,1,8,2,9,1],3));
