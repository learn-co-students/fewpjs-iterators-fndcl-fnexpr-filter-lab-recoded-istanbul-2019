// Code your solution here
function findMatching(drivers, st){
  return drivers.filter(n => {
    if(st.toUpperCase()=== n.toUpperCase()){
      return n;
    }

  })

}

function matchName(drivers, st){
    return drivers.filter(element => element.name === st)
}
function fuzzyMatch(drivers, st){
    return drivers.filter(element => st === element.slice(0,2));
}
