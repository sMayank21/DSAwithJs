function merge( nums ) {
  nums.sort((a,b) => a[0]-b[0]);
  let n = nums.length;
  let ans = [];
  for(let i = 0 ; i < n ; i++) {
    if(ans.length === 0 || nums[i][0] > ans[ans.length-1][1]){
      ans.push(nums[i]);
    } else {
      ans[ans.length-1][1] = Math.max(ans[ans.length-1][1],nums[i][1]);
    }
  }
  return ans;
}
console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
