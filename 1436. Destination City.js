const destCity = function (paths) {
  const map = new Map()
  paths.forEach(path => {
    const [start, end] = path
    setMap(map, start, end)
    setMap(map, end, null)
  })
  return Array.from(map.keys()).find(key => !map.get(key).length)
}

function setMap (map, key, value) {
  const mapVal = map.get(key)
  const mapNewVal = mapVal ? [...mapVal, value] : [value]
  map.set(key, mapNewVal.filter(Boolean))
}
