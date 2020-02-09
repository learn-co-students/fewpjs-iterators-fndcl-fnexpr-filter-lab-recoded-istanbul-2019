// Code your solution here


//filter() : method creates a new array with all elements that pass the test implemented by the provided function.
//filter() to filter array content based on search criteria



function findMatching(list, name){           
return list.filter(function(driverName){         
return driverName.toLowerCase() === name.toLowerCase(); 
        })
        }


 /*Write `fuzzyMatch` - This function takes an array of `drivers` and a `string`
as arguments for querying the array, and returns all drivers whose names begin
with the provided letters.*/


function fuzzyMatch(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().substring(0,2).indexOf(query.toLowerCase()) !== -1
    })
  }

  /*Write `matchName` - This function takes an array of `drivers` and a `string` as
arguments. In this function, each element of the `drivers` array is a
JavaScript object that has a property of `name`. The function should return
each element whose `name` property matches the provided `string` argument.
 */
const drivers1 = [
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

  function matchName(arr,query)
  {
      return drivers1.filter(obj=> 
        { return obj.name == query
  })
  }