  function firstNegativeNumber( nums , k ) {
  let i = 0 , j = 0 ;
  let ans = [] , l = [];
  while(j < nums.length) {
    if(nums[j] < 0) l.push(nums[j]);
    if(j-i+1 < k) j++;
    else if (j-i+1 ===k) {
      if(l.length===0) {
        ans.push(0);
      } else {
        ans.push(l[0]);
        if(nums[i] === l[0]){
          l.shift();
        }
      }
      i++;
      j++;
    }
  }
    return ans;
}
console.log(firstNegativeNumber([12,-1,-7,8,-15,30,16,28],3));
