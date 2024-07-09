/*
function missRepeat( nums ){
  let n = nums.length;
  let repeat = -1 , miss = -1;
  for(let i = 1 ; i <= n ; i++) {
    let cnt = 0;
    for(let j = 0 ; j < n ; j++) {
      if(nums[j] === i) {
        cnt++;
      }
    }
    if(cnt===2) repeat = i;
    else if(cnt===0) miss = i;
    if(miss !== -1 && repeat !== -1){
      break;
    }
  }
  return [miss,repeat]
}
console.log(missRepeat([1,2,3,3,4,6,7]));
*/
/*
// better Solution

function missRepeat( nums ){
  let n = nums.length;
  let hashArray = [...Array(n+1)].fill(0);
  for(let i = 0 ; i < n ; i++) {
    hashArray[nums[i]]++;
  }
  let miss = -1 , repeat = -1;
  for(let i = 1; i <= n ; i++) {
    if(hashArray[i] === 2) repeat = i;
    else if(hashArray[i] === 0) miss = i;

    if(miss !== -1 && repeat !==-1) break;
  }
  return [miss, repeat];
}
console.log(missRepeat([1,2,3,2]));
*/
function missRepeat( nums ){
  let n = nums.length;
  let sn = (n * (n+1))/2;
  let s2n = (n*(n+1)*(2*n+1))/6;
  let s = 0, s2 = 0;
  for(let i = 0 ; i < n ; i++) {
    s += nums[i];
    s2 += nums[i] * nums[i];
  }
  let val1 = s - sn;
  let val2 = s2-s2n;
  val2 = val2/val1;
  let x = (val1+val2)/2;
  let y = x-val1;
  return [x,y];
}
console.log(missRepeat([1,2,3,2]));
