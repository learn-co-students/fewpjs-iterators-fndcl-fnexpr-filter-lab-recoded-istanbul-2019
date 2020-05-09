// Code your solution here
drivers =   [
    "Bobby",
    "Sammy",
    "Sally",
    "Annette",
    "Sarah",
    "Bobby"
  ]
function findMatching(drivers, string) {
    return drivers.filter(n => {
        return n.toLowerCase() === string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter(n => {
        return n[0] === string[0]
    } )

}


function matchName(drivers, string) {
    return drivers.filter(n => {
    return n.name === string
    })

}