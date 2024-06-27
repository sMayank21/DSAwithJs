function linearSearch ( array , k ) {
  for( let i = 0 ; i < array.length ; i++ ){
    if(array[i] === k){
      return true;
    }
  }
  return false;
}
console.log( linearSearch ([1,2,34,4,5,32,1], 0));
