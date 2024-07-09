function fourSome(nums , target) {
  nums.sort((a , b) => a-b);
  let n = nums.length;
  let ans = [[]];

  for(let i = 0 ; i < n ; i++) {
    if(i > 0 &&  nums[i] === nums[i-1]) continue;
    for(let j = i+1 ; j< n ; j++) {
      if(j !== i + 1 && nums[j] === nums[j-1]) continue;
      let k = j+1;
      let l = n-1;

      while(k < l) {
        let sum = nums[i];
        sum += nums[j];
        sum += nums[k];
        sum += nums[l];

        if(sum === target) {
          let temp = [nums[i], nums[j], nums[k], nums[l]];
          ans.push(temp);
          k++;
          l--;

          while(k < l && nums[k] === nums[k-1])k++;
          while(k < l && nums[l] === nums[l+1])l--; 
        } 
        else if(sum < target) k++;
        else l--;
      }
    }
  }
  return ans;
}
console.log(fourSome([1,1,1,2,2,2,2,3,3,3,3,4,4,4,55], 8));
