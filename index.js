// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers , str){
    let regexxx = new RegExp(str , "i")
    let res = drivers.filter(function(el) {
        return regexxx.test(el);
     })
    
    return res

}

function fuzzyMatch(drivers , str){
    let regexxx = new RegExp(`^${str}` , "i")
    let res = drivers.filter(function(el) {
        return regexxx.test(el);
     })
    return res
}

function matchName(drivers , str){
    let regexxx = new RegExp( str , "i")
    let res = drivers.filter(function(el) {
        return regexxx.test(el.name);
     })
    return res
}
