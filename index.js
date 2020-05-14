// Code your solution here
function findMatching(drivers,street){
    return  drivers.filter(function(array){
      return array.toLowerCase()===street.toLowerCase();
    });
  }
  
  function fuzzyMatch(driversA, streetA){
    
    return driversA.filter(function(array){
      return array.charAt(0) === streetA.charAt(0);
      
    })
  }
  
  function matchName(driversB, streetB){
    return driversB.filter(function(a){
      return a.name === streetB;
    })
  }