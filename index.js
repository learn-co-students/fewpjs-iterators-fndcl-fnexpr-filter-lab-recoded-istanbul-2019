
function findMatching(drivers, string) {
  let nameMatch = drivers.filter(n => {
  return n.toLowerCase() === string.toLowerCase();
})
return nameMatch;
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(arr){
    return arr.charAt(0) === string.charAt(0);
  });
}

function matchName(drivers, string) {
  let checkName = drivers.filter( s => {
    if(s.name == "Bobby") {
      return string;
    }
  })
  return checkName;
}
