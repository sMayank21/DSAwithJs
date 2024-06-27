/* 
// Brute solution 
// storing the values of number of rotation in a temp array;
//

function leftRotation( array , d ) {
  // [1,2,3,4,5,6] <-> [4,5,6,1,2,3] ( rotated left by d = 3)
  let temp = [];
  let n = array.length;
  for(let i = 0 ; i < d ;i++){
    temp[i] = array[i];
  }
  for( let i = d ; i <= n-1 ; i++ ){
    array[i-d] = array[i]; 
  }
  for( let i = n-d ; i < n ; i++ ) {
    array[i] = temp[i-(n-d)];
  }
  return array;
}
console.log(leftRotation([1,2,3,4,5,6,7], 3));
*/

// Optimal solution
//
function reverseA( array , start , end ){
  while ( start < end ){
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
  return array
}
function rotateLeft( array  , d ) {
  let n = array.length;
  d = d % n;
  array = reverseA(array,0,n-1);
  array = reverseA(array,0,n-d-1);
  array = reverseA(array,n-d,n-1);
  return array;
}
console.log(rotateLeft([1,2,3,4,5,6], 2));
