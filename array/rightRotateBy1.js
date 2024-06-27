function rightRotate(array){
  let val = array.length - 1;
  for ( let i = 0; i < array.length ; i++ ){
    let temp = array[i];
    array[i] = array[val];
    array[val] = temp;
  }
  return array;
}
let array = [1,2,3,2,3];
let rotatedArray = rightRotate(array);
console.log(rotatedArray);
