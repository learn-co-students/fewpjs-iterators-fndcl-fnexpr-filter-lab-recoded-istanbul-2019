// Code your solution here

function findMatching(drivers,str){
  return  drivers.filter(function(arr){
    return arr.toLowerCase()===str.toLowerCase();
  });
}

function fuzzyMatch(driversA, strA){
  
  return driversA.filter(function(arr){
    return arr.charAt(0) === strA.charAt(0);
    
  })
}

function matchName(driversB, strB){
  return driversB.filter(function(a){
    return a.name === strB;
  })
}