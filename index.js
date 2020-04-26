// Code your solution here

// let even = arr.filter(n => {
//     return n % 2 === 0;
//   })



function findMatching(driver, name) {
   return driver.filter(x => new RegExp(name, 'i').test(x));
}

function fuzzyMatch(driver, name) {
    return driver.filter(x => new RegExp(`^${name}`, 'i').test(x));
}

function matchName(driver, name) {
    return driver.filter(x => new RegExp(name, 'i').test(x.name));
}