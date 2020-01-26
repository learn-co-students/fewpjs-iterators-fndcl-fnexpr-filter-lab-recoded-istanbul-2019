// Code your solution here

const divers = ['Abdulrahram', 'Kaan', 'Oktay', 'Farhad', 'Ayse', 'Burak'];

const drivers = [
    {
      name: 'Abdulrahram',
      hometown: 'Ankara' },
    {
      name: 'Kaan',
      hometown: 'Izmir' } ,
    {
      name: 'Oktay',
      hometown: 'Eskisehir' },
    {
      name: 'Farhad',
      hometown: 'Antalya' },
    {
      name: 'Burak',
      hometown: 'Trabzon' }
  ];

function findMatching( arrayIn, searchString ) {
    return arrayIn.filter( element => {
        return element.toUpperCase() === searchString.toUpperCase();
    });
}

function fuzzyMatch( arrayIn, searchString ) {
    return arrayIn.filter( element => {
        return element.toUpperCase().substr(0,searchString.length) === searchString.toUpperCase();
    });
}

function matchName( arrayObjIn, searchString ) {
    return arrayObjIn.filter( element => {
        return element.name.toUpperCase() === searchString.toUpperCase();
    });
}


console.log(findMatching(divers,'burak'))
console.log(fuzzyMatch(divers,'s'))
console.log(matchName(drivers, 'burak'))