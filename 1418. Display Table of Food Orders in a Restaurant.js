/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
// https://leetcode.com/contest/weekly-contest-185/problems/display-table-of-food-orders-in-a-restaurant/

const displayTable = function (orders) {
  const allFoods = new Set()
  const orderByTables = new Map()
  orders.forEach(order => {
    let [name, table, food] = order
    table = Number(table)
    allFoods.add(food)
    let tableOrder = orderByTables.get(table)
    if (!tableOrder) {
      tableOrder = new Map()
      orderByTables.set(Number(table), tableOrder)
    }
    const currentFoodCount = tableOrder.get(food)
    const count = (currentFoodCount || 0) + 1
    tableOrder.set(food, count)
  })
  const sortedFoods = Array.from(allFoods).sort()
  const arrayHeader = ['Table', ...sortedFoods]
  const retVal = [
    arrayHeader
  ]
  const sortedKeys = Array.from(orderByTables.keys()).sort((a, b) => a - b)
  for (const table of sortedKeys) {
    const tableOrder = [`${table}`]
    sortedFoods.forEach(food => {
      const currentFoodCount = orderByTables.get(table).get(food)
      const count = currentFoodCount !== undefined ? `${currentFoodCount}` : '0'
      tableOrder.push(count)
    })
    retVal.push(tableOrder)
  }
  return retVal
}

displayTable([['David', '3', 'Ceviche'], ['Corina', '10', 'Beef Burrito'], ['David', '3', 'Fried Chicken'], ['Carla', '5', 'Water'], ['Carla', '5', 'Ceviche'], ['Rous', '3', 'Ceviche']])
