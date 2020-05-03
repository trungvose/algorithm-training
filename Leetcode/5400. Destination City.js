var destCity = function(paths) {
    let map = new Map();
    paths.forEach(path => {
        let [start, end] = path;
        setMap(map, start, end)
        setMap(map, end, null)
    });
    return Array.from(map.keys()).find(key => !map.get(key).length)
};

function setMap(map, key, value){
    let mapVal = map.get(key);
    let mapNewVal = mapVal ? [...mapVal, value] : [value];
    map.set(key, mapNewVal.filter(Boolean));
}