function countOccurence( s , p ) {
  let hashMap = {} , count = 0;
  for(let c of p) {
    if(hashMap[c] == null){
      count++;
      hashMap[c]=1;
    } else {
      hashMap[c]++;
    }
  }
  let i = 0 , j = 0;
  let ans = [];
  while( j < s.length ){
    if(hashMap[s[j]] != null) {
      hashMap[s[j]]--;
      if(hashMap[s[j]]===0) count--;
    }
    if(j-i+1 > p.length){
      if(hashMap[s[i]]!=null){
      if(hashMap[s[i]]===0)  count++;
      hashMap[s[i]]++;
      }
    i++;
    } 
    if(j-i+1 === p.length &&count === 0) ans.push(i);
    j++;
  }
  return ans;
}

const s = "abab", p = "ab";

//const p = "abc";
//const s = "cbaebabacd";
console.log(countOccurence(s, p));
