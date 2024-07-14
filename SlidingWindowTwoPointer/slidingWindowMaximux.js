function maximumWindow( nums, k ) {
  let i = 0 , j = 0;
  let deque = [] , ans = [];
  
  while(j < nums.length) {
    /*
      [1,3,-1,-3]
        [1]
      */
    while(deque.length > 0 && nums[deque[deque.length-1]] <= nums[j]) {
      deque.pop();
    }
    deque.push(j);
    if(deque[0] < i) {
      deque.shift();
    }
    if(j-i+1 >=k) {
      ans.push(nums[deque[0]]);
      i++;
    }
    j++;
  }
  return ans;
}
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log(maximumWindow(nums, k));
