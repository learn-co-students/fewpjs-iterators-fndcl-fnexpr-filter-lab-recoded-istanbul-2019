const findMatching = (drivers, name) => {
    name = name.toLowerCase();
    return drivers.filter(driver => driver.toLowerCase() === name)
};



// function fuzzyMatch(drivers, searchStr) {
//      const regexp = new RegExp(searchStr, 'i');
//     return drivers.filter(driver => driver = regexp.test(driver))
// };

function fuzzyMatch(drivers, searchStr) {

    return drivers.filter(driver => driver.startsWith(searchStr))
};

function matchName(drivers, searchStr) {
    return drivers.filter(driver => {
        if (driver.name === searchStr) {
            return driver;
        }
    })
}