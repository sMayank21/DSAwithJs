// TO ROTATE LEFT OUR GIVEN ARRAY 
// [1,2,3,4] <-> [2,3,4,1];
//

function leftRotate( array ) {
  let len = array.length-1;
  let temp = array[0];
  array[0] = array[len];
  array[len] = temp;
  for(let i = 0; i < len-1 ; i++){
    let temp = array[i];
    array[i] = array[i+1];
    array[i+1] = temp;
  }
  return array;
}

let array = [1,2,3,4];
let rotatedArray = leftRotate(array);
console.log(rotatedArray);
