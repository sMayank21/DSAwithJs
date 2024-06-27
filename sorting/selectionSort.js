function selectionSort( arr ) { 
  for(let i = 0 ; i < arr.length-1 ; i++){
      let sortest = arr[i]; 
      for(let j = i ; j < arr.length; j++){
         let temp = 0;
         if( arr[i] > arr[j]) { 
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
      }
    }
  } 
  return arr
}

let sorted_array = selectionSort([1,351,4]);
console.log(sorted_array);

