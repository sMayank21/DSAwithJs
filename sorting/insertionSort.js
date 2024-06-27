function insertionSort( array ) {
  for(let i = 0; i < array.length; i++){
    let j = i;
    while( j> 0 && array[j-1] > array[j]){
      let temp = array[j-1];
      array[j-1] = array[j];
      array[j] = temp;
      j--;
    }
  }
  return array;
}

let sortedArray = insertionSort([52,2,5,1]);
console.log(sortedArray);
