function maxOnes( nums ) {
  let n = nums.length , count = 0 , max = 0;
  for( let i = 0 ; i < n ; i++ ) {
    if( nums[i]!=1 ){
      count = 0;
    } else {
      count++;
    }
    if( count > max ) {
      max = count;
    }
  }
  return max;
}
console.log(maxOnes([1,1,0,1,1,1,0,1,0,1,1,1,1,1]));
