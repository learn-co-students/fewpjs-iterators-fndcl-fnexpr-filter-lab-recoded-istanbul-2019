// Code your solution here
let drivers = ["Ahmed","JOHN","Rasha"]
function findMatching(arr,str){
  let result = arr.filter( name => name.toLowerCase() === str.toLowerCase());
  return result;
}
function fuzzyMatch(arr,str){
  return arr.filter(name => name.startsWith(str));
}
function matchName(arr,str){
    return  arr.filter(( {name} )=> name.toLowerCase() === str.toLowerCase());

}