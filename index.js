// Code your solution here

function findMatching(drivers,str){
    return  drivers.filter(function(arr){
    return arr.toLowerCase()===str.toLowerCase();
    });
  }
  
  function fuzzyMatch(drivers1, str1){
    return drivers1.filter(function(arr){
    return arr.charAt(0) === str1.charAt(0);
      
    })
  }
  
  function matchName(drivers2, str2){
    return drivers2.filter(function(a){
    return a.name === str2;
    })
  }

