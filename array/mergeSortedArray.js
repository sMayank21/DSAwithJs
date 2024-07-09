// Brute Solution 
/*

function mergeArray(num1,num2) {
  let n = num1.length ;
  let m = num2.length;
  let ans = [];
  let left = 0, right = 0, index = 0;
  while(left < n || right < m) {
    if(num1[left] <= num2[right]) {
      ans.push(num1[left]);
      left++;
    } else {
      ans.push(num2[right]);
      right++;
    }
  }
  while(left < n) {
    ans.push(num1[left]);
    left++;
  }
  while(right < m) {
    ans.push(num2[left]);
    right++;
  }
  return ans;
}
console.log(mergeArray([1,3,5,7],[0,2,6,8,9]));

*/
/*
// Optimal Solution
function mergeArray(num1,num2) {
  let n = num1.length;
  let m = num2.length;
  let left = n-1;
  let right = 0;
  while (left >= 0 && right < m) {
    if(num1[left] > num2[right]) {
      let temp = num1[left];
      num1[left] = num2[right];
      num2[right] = temp;
      left--;
      right++;
    } else {
      break;
    }
  }
  num1.sort((a,b) => a-b);
  num2.sort((a,b) => a-b);
  return num1;
}
console.log(mergeArray([1,2,3,0,0,0],[4,5,6]));

*/

/*
let left = m-1 , right = n-1;
  let k = m+n-1;
  while(right>=0){
    if(left>=0 && nums1[left] > nums2[right]){
    nums1[k--] = nums1[left--];
    } else{
        nums1[k--] = nums2[right--];
    }
}
*/
