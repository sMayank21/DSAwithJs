function setZero( matrix ){
  let firstRowZero , firstColZero;
  for( let row = 0 ; row < matrix.length ; row++ ) {
    for( let col = 0 ; col < matrix[0].length ; col++ ) {
      if( matrix[row][col] === 0 ){
        if(row===0) firstRowZero = true;
        if(col===0) firstColZero = true;
        matrix[row][0] = 0;
        matrix[0][col] = 0;
      }
    }
  }
  for( let row = 1 ; row < matrix.length ; row++ ) {
    for( let col = 1 ; col < matrix[0].length ; col++ ) {
      if(matrix[row][0]===0 || matrix[0][col]===0){
        matrix[row][col] = 0;
      }
    }
  }
  if(firstRowZero){
    matrix[0].fill[0];
  }
  if(firstColZero){
    for(let i = 0 ; i < matrix.length ; i++) {
      matrix[i][0] =0; 
    }
  }
  return matrix;
}



console.log(setZero([[1,1,1],[1,0,1],[1,1,1]]))
