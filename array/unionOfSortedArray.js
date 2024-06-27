// union means the common elemens between two or more array
// ex: arr1[1,1,2,3,4]
//     arr2[1,3,5]
//     union[1,2,3,4,5]
/*
// brute solution 
function Union( arr1 , arr2 ) {
  let tempSet = new Set();
  for( let i = 0 ; i < arr1.length ; i++ ) {
    tempSet.add(arr1[i]);
  }
  for( let i = 0 ; i < arr2.length ; i++ ) {
    tempSet.add(arr2[i]);
  }
  let union = Array.from(tempSet);
  return union;
}

console.log(Union([1,1,2,3,3,4], [1,2,3,5,6]));

*/

// Optimal solution 

function Union( arr1 , arr2 ) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let i = 0 , j= 0;
  let unionArray = [];
  
  while( i < n1 && j < n2 ) {
    if( arr1[i] <= arr2[j] ) {
      if( unionArray.length === 0 || 
      unionArray[unionArray.length-1] != arr1[i]) {
        unionArray.push(arr1[i]);
      }
      i++;
    } else {
      if( unionArray.length === 0 ||
      unionArray[unionArray.length-1] != arr2[j]) {
        unionArray.push(arr2[j]);
      }
      j++;
    }
  }
  while ( j < n2 ){
    if( unionArray.length === 0 ||
      unionArray[unionArray.length-1] != arr2[j]) {
        unionArray.push(arr2[j]);
      }
      j++;
  }
  while ( i < n2 ){
    if( arr1[i] <= arr2[j] ) {
      if( unionArray.length === 0 || 
      unionArray[unionArray.length-1] != arr1[i]) {
        unionArray.push(arr1[i]);
      }
      i++;
    }
  }
  return unionArray;
}

console.log(Union([1,1,2,2,3,5], [1,2,3,4,5,6]));

