/*
// brute Solution
function intersectionArray( arr1 , arr2 ) {
  let i = 0 , j = 0;
  let n1 = arr1.length , n2 = arr2.length;
  let intersection = [];
  let vis = [...Array(n2)].fill(0);
  for( i ; i < n1 ; i++ ) {
    for( j ; j < n2 ; j++ ) {
      if ( arr1[i] === arr2[j] && vis[j] === 0 ) {
        intersection.push(arr1[i]);
        vis[j] = 1;
        break;
      }
      if ( arr2[j] > arr1[i] ) { break; }
    }
  }
  return intersection;
} 

console.log(intersectionArray([1,2,3,4,5,5,6],[2,3,5,6,7,8]));
*/

// Optimal Solution

function intersectionArray( arr1 , arr2 ) {
  let i = 0 , j = 0;
  let n1 = arr1.length , n2 = arr2.length;
  let intersection = [];
  while ( i < n1 && j < n2 ) {
    if ( arr1[i] < arr2[j] ) {
      i++;
    } else if ( arr1 [i] > arr2[j] ){
      j++; 
    } else {
      intersection.push(arr1[i]);
      i++;
      j++;
    }
  }
  return intersection;
}
console.log(intersectionArray([1,2,3,4,5,5,6],[2,3,5,6,7,8]));
