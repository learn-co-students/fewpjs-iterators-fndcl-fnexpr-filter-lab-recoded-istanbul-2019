// Code your solution here
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function findMatching(drivers,str){
  return drivers.filter((element)=>{
        return  element.toLowerCase() === str.toLowerCase()
      }); 
  }

function fuzzyMatch(drivers,str){
  return drivers.filter((element)=>{
    return element.toLowerCase().indexOf(str.toLowerCase()) === 0
  
  });
}
function matchName(drivers,name){
  return drivers.filter((element)=>{
    return  element.name.toLowerCase() === name.toLowerCase()
  }); 

}






