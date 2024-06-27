function quickSort(array , low , high) {
  if ( low < high ){
    let pIndex= partition( array, low , high );
    quickSort(array , low , pIndex-1);
    quickSort(array , pIndex+1 , high);
  }
  return array;
}
function partition(array , low , high) {
  let pivot = array[low];
  i = low+1;
  j = high;
  while (i <= j) {
    while(array[i] <= pivot && i <= high){
      i++;
    }
    while(array[j] > pivot && j>= low){
      j--;
    }
    if(i < j){
      let temp = array[j];
      array[j] = array[i];
      array[i] = temp
    }
  }
  let temp = array[low];
  array[low] = array[j]
  array[j] = temp;
  return j;
}
let array = [4,1,2,5,32,12,0];
let sortedArray = quickSort(array,0,array.length-1);
console.log(sortedArray);
