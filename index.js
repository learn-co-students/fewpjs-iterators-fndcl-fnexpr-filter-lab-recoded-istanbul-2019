// Code your solution here

const arr = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const str = 'Bobby'

function findMatching(arr,str) {
    return arr.filter(e=>e.toLowerCase().indexOf(str.toLowerCase())!== -1)
}

const str1 = 'Sa'

function fuzzyMatch(arr,str1) {
    return arr.filter(e=>e.indexOf(str1)==0)
}


const arr1 = [
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

function matchName (arr1,str) {
    return arr1.filter(e=>e.name.indexOf(str)== 0)
}