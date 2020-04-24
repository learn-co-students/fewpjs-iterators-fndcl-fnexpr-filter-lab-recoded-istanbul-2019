// Code your solution here
findMatching = (arr, search) => {
    let finder = new RegExp (search, 'i');
    let result = arr.filter (match => {
        return finder.test(match);
    });
    return result;
}

function fuzzyMatch (arr, search){
    let finder = new RegExp (`^${search}`, 'i');
    let result = arr.filter (match => {
        return finder.test(match);
    });
    return result;
}

function matchName (arr, search){
    let finder = new RegExp (search, 'i');
    let result = arr.filter (match => {
        return finder.test(match.name);
    });
    return result;
}
