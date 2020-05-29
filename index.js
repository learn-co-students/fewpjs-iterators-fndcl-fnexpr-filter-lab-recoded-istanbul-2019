// Code your solution here
function findMatching(drivers, string){
    return drivers.filter(function(array){
    return array.toLowerCase() === string.toLowerCase();
    })
}
//This function takes an array of drivers and a string as arguments, 
// and returns the matching list of drivers. 
// The function should be case insensitive.
// ----------------------------------------------

function fuzzyMatch(drivers, string){
    return drivers.filter(function(array){
        return array.charAt(0) === string.charAt(0);
        })
}
// This function takes an array of drivers and a string as arguments for querying the array, 
// and returns all drivers whose names begin with the provided letters.
// ------------------------------------------------

function matchName(drivers, string){
    return drivers.filter(function(array){
        return array.name === string;
        })
}
// This function takes an array of drivers and a string as arguments. In this function,
//  each element of the drivers array is a JavaScript object that has a property of name. 
// The function should return each element whose name property matches the provided string argument.