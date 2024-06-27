// Optimal Solution
function consecutiveSequence( nums ) {
  let set = new Set(nums);
  let streak = 0;
  for( let num of set ){
    if(set.has(num-1)) continue;
    let currstreak =1;
    while (set.has(num+1)){
      currstreak++;
      num++;
    }
    streak = Math.max(streak, currstreak);
  }
  return streak;
}
console.log(consecutiveSequence([102,4,100,1,101,3,2,1,1]));
