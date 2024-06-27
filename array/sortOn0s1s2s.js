// [0,1,1,0,1,2,1,2,0,0] <-> [0,0,0,0,1,1,1,2,2]
function numSort( nums ){
  let n = nums.length;
  let low = 0 , mid = 0 , high = n-1;
  while ( mid <= high ){
    if(nums[mid] === 0) {
      let temp = nums[low];
      nums[low] = nums[mid];
      nums[mid] = temp;
      low++;
      mid++;
    } else if(nums[mid]=== 1) {
      mid++; 
    } else {
      let temp = nums[high];
      nums[high] = nums[mid];
      nums[mid] = temp;
      high--
    }
  }
  return nums;
}
console.log(numSort([0,1,1,0,1,2,1,2,0,0]));
