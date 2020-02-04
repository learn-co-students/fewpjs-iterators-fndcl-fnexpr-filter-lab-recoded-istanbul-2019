// Code your solution here
// const findMatching = drivers.filter(driver => driver === "Bobby")

function findMatching(drivers, string){
    let find = new RegExp(string, "i");
        return    drivers.filter(function(e){
        return    e.match(find);
    });
}

function fuzzyMatch(drivers, string){
    let find = new RegExp("^"+string, "i");
    return    drivers.filter(function(e){
    return    e.match(find);
    });
}

function matchName(drivers, string){

    return drivers.filter(function(e){return(e.name === string)});
}