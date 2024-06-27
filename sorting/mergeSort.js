function mergeSort( arr, low , high) {
  if (low < high) {  
  // let mid = (low + high)/ 2;
    let mid = Math.floor((low + high) / 2);
    mergeSort(arr, low , mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low , high , mid);
  }
  return arr;
}
function merge( arr, low , high ,mid ){
  let temp = [];
  let left = low;
  let right = mid+1;
  while (left <= mid && right <= high){
    if(arr[left] <= arr[right]){
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  while ( left <= mid ){
    temp.push(arr[left]);
    left++;
  }
  while ( right <= high ) {
    temp.push(arr[right]);
    right++;
  }
  for ( let i = low ; i <= high ; i++) {
    arr[i] = temp[i - low];
  }
}

arr = [6,2,1,5,67,0];
let sortedArray = mergeSort(arr , 0 , arr.length-1)
console.log(sortedArray);

