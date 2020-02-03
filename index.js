// Code your solution here
function findMatching(arr,str){
    return arr.filter(e=>e.match(new RegExp(str,"i")))
}

function fuzzyMatch (array,str){
    return array.filter(e=> str.match(e[0]))
}

function matchName(obj,str){
    return obj.filter(e=>e.name === str)
}