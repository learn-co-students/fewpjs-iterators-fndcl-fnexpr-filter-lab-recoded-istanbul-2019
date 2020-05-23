// Code your solution here

function findMatching(driver, string) {
    return driver.filter(x => { return x.toLowerCase() === string.toLowerCase() }
    )
}

function fuzzyMatch(driver, string) {
    return driver.filter(x => {return x.charAt(0) === string.charAt(0)}
    )
}

function matchName(driver, string) {
    return driver.filter(x => {return x.name === string}
    )
}