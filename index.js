// Code your solution here
function findMatching(arr,name){
  return arr.filter((el)=> {return el.toLowerCase().indexOf(name.toLowerCase()) == 0 });
}
function fuzzyMatch(arr,name){
  return arr.filter((el)=> {return el.toLowerCase().indexOf(name.toLowerCase()) == 0 });
}

function matchName(arr,name){
  return arr.filter((el)=> {return el.name.toLowerCase().indexOf(name.toLowerCase()) == 0 });
}
