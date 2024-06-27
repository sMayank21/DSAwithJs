// [2,2,3,3,1,2,2] <-> 2
// element that appears more than n/2 times
//Brute solution
/*
function majority(nums) {
  let n = nums.length-1;
  for( let i = 0 ; i <= n ; i++ ){
    let count = 0;
    for( let j = 0 ; j <= n ; j++ ) {
      if (nums[i]== nums[j]) {
        count++;
      }
    }
    if( count > n/2){ return nums[i];}
  }
  return 0;
}

console.log(majority([2,2,3,3,1,2,2]))
*/
/*
function majority( nums ) {
  let n = nums.length;
  let map = new Map();
  for( let i = 0 ; i < n; i++ ){
    if(map.has(nums[i])){
      map.set(nums[i],map.get(nums[i])+1);
    } else{
      map.set(nums[i],1);
    }
  }
console.log(map);
}
//console.log(majority([2,2,3,3,1,2,2]))

majority([2,2,3,3,1,2,2]);
*/
function majority( nums ) {
  let cnt = 0;
  let el;
  for( let i = 0 ; i < nums.length ; i++ ) {
    if(cnt===0) {
      cnt = 1;
      el = nums[i];
    } else if(nums[i] == el){
      cnt++;
    } else {
      cnt--;
    }
  }
  let cnt1 = 0;
  for( let i = 0 ; i < nums.length ; i++ ) {
    if(el === nums[i]) { cnt1++; }
  }
  if( cnt1 > nums.length/2 ){ return el; }
  return -1;
}
console.log(majority([2,2,3,3,1,2,2]));
