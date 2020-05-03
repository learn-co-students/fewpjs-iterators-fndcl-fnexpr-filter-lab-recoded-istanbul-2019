// Code your solution here

function findMatching(drivers, string) {console.log(drivers, string)
    return drivers.filter(driver => {
        return driver.toUpperCase() === string.toUpperCase();
    });
};

function fuzzyMatch(drivers, string) {
    return drivers.filter(driver => {
        return driver.substring(0, string.length) === string;
    });
};

function matchName(drivers, string) {
    return drivers.filter(driver => {
        return driver["name"] === string;
    });
};