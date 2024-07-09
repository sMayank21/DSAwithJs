// Brute Solution
/*
function majorityElement( nums ) { 
  let ans = [];
  for( let i = 0 ; i < nums.length ; i++ ) {
    if(ans.length === 0 || ans[0] != nums[i]){
      let cnt = 0;
      for( let j= 0 ; j < nums.length ; j++ ) {
        if(nums[j]===nums[i]) cnt++;
      }
      if( cnt > nums.length/3 ) { ans.push(nums[i]);}
    }
    if( ans.length ===2 ) break;
  }
  return ans;
}
console.log(majorityElement([1,1,1,2,2,3,2,2]));
*/
/*
// better Solution
function majorityElement( nums ) { 
  let map = new Map();
  let ans = [];
  let min = Math.floor(nums.length/3);

  for(let i = 0 ; i < nums.length; i++ ) {
    if(map.has(nums[i])){
      map.set(nums[i],map.get(nums[i])+1);
    } else { map.set(nums[i],1); }

    if(map.get(nums[i]) > min && !ans.includes(nums[i])){
      ans.push(nums[i]);
    }
  }
  return ans;
}
console.log(majorityElement([1,1,1,2,2,3,2,2]));
*/

// Optimal solution
function majorityElement(nums) {
  let cnt1 = 0 , cnt2 = 0;
  let el1 , el2;

  for(let i = 0 ; i < nums.length ;i++) {
    if(cnt1 === 0 && nums[i] !== el2) {
      cnt1++;
      el1 = nums[i]

    } else if(cnt2 === 0 && nums[i] !== el1) {
      cnt2++;
      el2 = nums[i];

    }
    else if(el1 === nums[i]) cnt1++;
    else if(el2 === nums[i]) cnt2++;

    else {
      cnt1--;
      cnt2--;

    }
  }
  cnt1 = 0 , cnt2 = 0;
  for(let i = 0 ; i < nums.length ; i++) {
    if(el1 === nums[i]) cnt1++;
    if(el2 === nums[i]) cnt2++;
  }
  let ans = [];
  let min = Math.floor(nums.length/3);
  if(cnt1 > min) ans.push(el1);
  if(cnt2 > min) ans.push(el2);
  return ans;
}
console.log(majorityElement([1,2]));

