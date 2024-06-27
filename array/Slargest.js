/*
  function sLargest( array ){
  let l = array[0];
  let sl = -1;
  for( let i = 0; i < array.length ; i++){
    if (l < array[i]){
      l = array[i];
    }
  }
  for( let i = 0; i < array.length ; i++){
    if (sl < array[i] && array[i] != l){ sl = array[i];}
  }
  return sl;
}
let array = [4,2,5,9,8];
let sLargestInArray = sLargest(array);
console.log(sLargestInArray);
*/

// optiomal solution

function sLargest(array){
  let largest = array[0];
  let slargest = -1;
  for(let i = 0 ; i < array.length ; i++){
    if (largest < array[i]) {
      slargeest = largest;
      largest = array[i];
    }
    if (array[i] < largest && slargest < array[i]){
      slargest = array[i];
    }
    
  }
  return slargest;
}

let array = [1,2,4,7,7,5];
let secondLargest = sLargest(array);
console.log(secondLargest);
