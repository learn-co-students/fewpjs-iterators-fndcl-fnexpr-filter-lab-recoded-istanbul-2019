// Code your solution here

const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];
function findMatching(array, str) {

    let result = array.filter(name => { return name.toLowerCase() === str.toLowerCase() })
    // console.log(result)
    return result
}

findMatching(drivers, "Bobby")


function fuzzyMatch(array, str) {

    return array.filter(name =>

        name.toLowerCase().indexOf(str.toLowerCase()) === 0
    )


}
fuzzyMatch(drivers, "Bobby")
function matchName (array, str) {
    return array.filter(name => name.name === str)
}