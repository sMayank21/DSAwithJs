// moving zero to end of our array 
// ex: [1,2,0,12,0,12,0,45] <-> [1,2,12,12,45,0,0]
/*
// brute solution
function moveZero( array ){
  let temp = [];
  let n = array.length;
  for(let i = 0 ; i < n ; i++){
    if (array[i] != 0) {
      temp.push(array[i]);
    }
  }
  for( let i = 0 ; i < temp.length ; i++ ){
    array[i] = temp[i];
  }
  for( let i = temp.length ; i < n ; i++ ){
    array[i] = 0;
  }
  return array;
}
console.log(moveZero([1,0,21,21,5,0]))
*/

// Optimal solution
function moveZero( array ) {
  let j = -1;
  for( let i = 0 ; i < array.length ; i++) {
    if(array[i] === 0){
      j = i;
      break;
    }
  }
  for(let i = j+1 ; i < array.length ; i++){
    if( array[i] != 0) {
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      j++;
    }
  }
  return array;
}

console.log(moveZero([1,4,0,0,12,2,0,1]));
