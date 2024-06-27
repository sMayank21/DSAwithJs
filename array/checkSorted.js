// [1,2,43,65,77];
// return true or false;

function checkSorted( array ){
  for (let i = 0 ; i < array.length ; i++){
    if(array[i] > array[i+1]){
      return false;
    } else {
      continue;
    }
  }
  return true;
}

let array = [1,2,43,2,65,77];
let checkArray = checkSorted(array);
console.log(checkArray);
