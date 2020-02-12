
     function matchName(objArr,name){
      return objArr.filter(e => e.name === name) 
     } ;
        function findMatching(objArr,name){
      return objArr.filter(e => e.toLowerCase() === name.toLowerCase()) 
     } ;
     
         function fuzzyMatch(objArr,name){
      return objArr.filter(e => e.startsWith(name)) 
     } ;
    