// [3,1,-2,-5,2,-4] <-> [3,-2,1,-5,2,-4]
/*
function rearrange( nums ) {
  let n = nums.length;
  let ans = [];
  let posIndex = 0 , negIndex = 1;
  for(let i = 0 ; i < nums.length ; i++ ) {
    if(nums[i] < 0){
      ans[negIndex] = nums[i];
      negIndex+= 2;
    } else {
      ans[posIndex] = nums[i]
      posIndex +=2;
    }
  }
  return ans;
}
console.log(rearrange([3,1,-2,-5,2,-4]))
*/
// variety 2 when positives are not equal to of negatives

function rearrange( nums ) {
  let pos = [] , neg = [];
  for( let i = 0 ; i < nums.length ; i++ ) {
    if (nums[i] > 0) {
      pos.push(nums[[i]]);
    } else {
      neg.push(nums[i]);
    }
  }
  if( pos.length > neg.length ){
    for( let i = 0 ; i < neg.length ; i++ ) {
      nums[2*i] = pos[i];
      nums[2*i+1] = neg[i];
    }
    let index = neg.length*2;
    for( let i = neg.length ; i < pos.length ; i++ ){
      nums[index] = pos[i];
      index++;
    }
  } else {
    for( let i = 0 ; i < pos.length ; i++ ) {
      nums[2*i] = pos[i];
      nums[2*i+1] = neg[i];
    }
    let index = pos.length*2;
    for( let i = pos.length ; i < neg.length ; i++ ){
      nums[index] = pos[i];
      index++;
    }
  }
  return nums;
}
console.log(rearrange([3,1,3,4,-2,-5,2,-4]))
