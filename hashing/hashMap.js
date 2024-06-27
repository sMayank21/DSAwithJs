let arr = [1,2,3,4,2,3,5,6];
let hashMap = {};

for( let i = 0 ; i < arr.length ; i++ ){
  if(!hashMap[arr[i]]){
    hashMap[arr[i]] = 1;
  } else {
    hashMap[arr[i]]++;
  }
}
console.log(hashMap[3]);

