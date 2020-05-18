// Code your solution here

findMatching = (drivers, string) => {
    const regex = new RegExp (string, "i");
    const res = drivers.filter(name => {
       return regex.test(name);
    });
    return res;
}

function fuzzyMatch (drivers, string){
    let regex = new RegExp (`^${string}`, 'i');
    let res = drivers.filter (name => {
        return regex.test(name);
    });
    return res;
}

function matchName (drivers, string){
    let regex = new RegExp (string, 'i');
    let res = drivers.filter (name => {
        return regex.test(name.name);
    });
    return res;
}