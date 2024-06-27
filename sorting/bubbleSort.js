function bubbleSort( array ) {
  for ( let i = 0 ; i < array.length ; i++){
    let didswap = 0;
    for (let j = 0 ; j < array.length ; j++){ 
      let temp = 0;
      if (array[j] > array[j+1]){
        temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        didswap += 1;
      }
    }
    if (didswap === 0){ break; }
  }
  return array;

}

let array = [1,2,99];
let sortedArray = bubbleSort( array );
console.log(sortedArray);

