// Two sum 
// [2,6,5,8,11] , target = 14 <-> true;
// [2,6,5,8,11] , target = 14 <-> [1,3];
//
/*
// Brute solution
function twoSum( nums , target ) {
  for( let i = 0 ; i < nums.length ; i++ ) {
    for( let j = i+1 ; j < nums.length ; j++) {
      if(nums[i] + nums[j] === target){
        return true;
      }
    }
  }
  return false;
}
console.log(twoSum([2,6,5,8,11], 14));
// brute solution but returning elements
function twoSum( nums , target ) {
  for( let i = 0 ; i < nums.length ; i++ ) {
    for( let j = i+1 ; j < nums.length ; j++) {
      if(nums[i] + nums[j] === target){
        return [i,j];
      }
    }
  }
  return 0;
}

console.log(twoSum([2,6,5,8,11], 14));

*/

/*
// better solution 
//
function twoSum( nums , target ) {
  let map = new Map();
  for( let i = 0 ; i < nums.length ; i++ ) {
    let num1 = nums[i];
    let num2 = target-nums[i];
    if(map.has(num2)){
      return [map.get(num2),i];
      map.set(num1,i);
    }
  }
}

console.log(twoSum([2,6,5,8,11], 14));
*/

/*
// optimal solution for only true and false answers

function nSort( nums ){
  for(let i = 0 ; i < nums.length ; i++) {
    for( let j = 0 ; j < nums.length ; j++ ) {
      if (nums[i] < nums[j]) {
        let swap = nums[i];
        nums[i] = nums[j];
        nums[j] = swap;
      }
    }
  }
  return nums;
}

function twoSum( nums , target ) {
  nums = nSort(nums); 
  let i = 0 ; 
  let j = nums.length-1;
  while ( i <= j ) {
    if ( nums[i] + nums[j] < target ) {
      i++;
    } else if( nums[i] + nums[j] > target ) {
      j--;
    } else {
      return true;
    }
  }
  return false;
}
console.log(twoSum([2,6,5,8,11], 14));
*/
