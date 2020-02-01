// Code your solution here
 const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
function findMatching( drivers,str)
{
  return drivers.filter(drive =>{
    
    return drive.toUpperCase() === str.toUpperCase()});
}

function fuzzyMatch(drivers,str)
{
  
  return drivers.filter(drive => {
    return drive.charAt(0).toUpperCase() === str.charAt(0).toUpperCase();
    });
}

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
function matchName(drivers1,str)
{
  return drivers1.filter(driver1 => {
    return driver1.name == str;
  });
}

findMatching(drivers,"Bobby");
findMatching(drivers, 'Susan');
fuzzyMatch(drivers, 'sa');
matchName(drivers1,"Bobby")