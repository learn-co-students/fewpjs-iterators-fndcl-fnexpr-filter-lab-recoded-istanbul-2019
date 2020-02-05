// Code your solution here
function findMatching(array, string) {
   let result = array.filter(driver => {
        return driver.toLowerCase() === string.toLowerCase();
    })

    return result;
}

function fuzzyMatch(array, string){

    let result = array.filter(driver => {
        return driver.startsWith(string);
    })

    return result;
}

function matchName(drivers, string){
    let result = drivers.filter( d => {
       return d.name === string
    })

    return result;
}