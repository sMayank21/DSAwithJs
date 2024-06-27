// [ 1,1,3,3,55,67,76,76 ]
// Remove duplicates from the sorted array

function removeDuplicate( array ) {
  let current = 0;
  let count = 0;
  for( let i = 0 ; i < array.length ; i++ ){
    if ( array[i] != array [i+1] ){
      array[current] = array[i];
      current++;
      count++;
    }
  }
  console.log(count);
  return array;
}

let array = [1,1,3,3,6,9,9,];
let rArray = removeDuplicate( array );
console.log(rArray);

