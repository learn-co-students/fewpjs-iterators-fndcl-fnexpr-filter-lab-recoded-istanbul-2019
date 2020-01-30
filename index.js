// Code your solution here

function findMatching(arr, name){
   return arr.filter(function(e){
   return e.toLowerCase()==name.toLowerCase()
})}

function fuzzyMatch(arr, letters){
   return arr.filter(function(e){
   return e.toLowerCase().substr(0,letters.length)===letters.toLowerCase()
})}

function matchName(arr, name){
  return arr.filter(function (e){
    return e.name.toLowerCase()==name.toLowerCase()
  })
}