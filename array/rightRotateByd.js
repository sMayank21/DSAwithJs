function reverseA( array , start , end ) {
  while( start < end ) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array;
}
function rotateRightByd( array , k){
  let n = array.length;
  k = k % n;
  array = reverseA(array, 0 , n-1);
  array = reverseA(array, 0 , k-1);
  array = reverseA(array, k , n-1);
  return array;
}
console.log(rotateRightByd([1,2,3,4,5,6], 2));
