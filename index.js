// Code your solution here

function findMatching(Array,String){
  let str = String.toLowerCase()
  return Array.filter(el => el.toLowerCase()===str)
}

function fuzzyMatch (Array,String){
  return Array.filter(el => (el.charAt(0)+el.charAt(1))===String)
}

function matchName(Array,String){
  return Array.filter(el => el.name===String)
}