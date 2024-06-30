//        1
//       1 1
//      1 2 1
//     1 3 3 1
//    1 4 6 4 1
// There can be three types of question for pascal triangle 
// type 1  : given row and col tell me the element at the place
// type 2  : print any nth row of pascal triangle....
// type 3  : given N , Print entire triangle...

/*
// solving type 1 

function ncr( n , r ) {
  let res = 1;
  for( let i = 0 ; i < r ; i++ ) {
    res = res * (n-i);
    res = res/(i+1);
  }
  return res;
}
// pass r as r-1 and c as c-1
console.log(ncr(7,2));
*/

/*
// solving type 2
// one way can be
function ncr( n , r ) {
  let res = 1;
  for( let i = 0 ; i < r ; i++ ) {
    res = res * (n-i);
    res = res/(i+1);
  }
  return res;
}
// for nth row there will be n elements in pascal triangle
row = 6;
for(let col = 1 ; col <= row ; col++ ) {
  console.log(ncr(row-1,col-1));
}
*/
/*
// type 2
// another optimal way
let row = 6;
let ans = 1;
console.log(ans);
for(let i = 1 ; i < row ; i++) {
  ans = ans*(row-i);
  ans = ans/i;
  console.log(ans);
}
*/
// type 1

function generateRow(row) {
  let ans = 1;
  let ansRow =[];
  ansRow.push(ans);
  for( let i = 1 ; i < row ; i++ ) {
    ans = ans*(row-i);
    ans = ans/i;
    ansRow.push(ans);
  }
  return ansRow;
}
function pascalTriangle( N ) {
  let ans = []
  for( let i = 1 ; i <= N ; i++ ) {
    ans.push(generateRow(i));
  }
  return ans;
}
let store = pascalTriangle(5);
for(let element of store){
  console.log(element);
}
