/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
//https://leetcode.com/contest/weekly-contest-185/problems/display-table-of-food-orders-in-a-restaurant/

var displayTable = function (orders) {
    let allFoods = new Set();
    let orderByTables = new Map();
    orders.forEach(order => {
        let [name, table, food] = order;
        table = Number(table);
        allFoods.add(food);
        let tableOrder = orderByTables.get(table);
        if (!tableOrder) {
            tableOrder = new Map()
            orderByTables.set(Number(table), tableOrder);
        }
        let currentFoodCount = tableOrder.get(food)
        let count = (currentFoodCount || 0) + 1
        tableOrder.set(food, count);
    });
    let sortedFoods = Array.from(allFoods).sort();
    let arrayHeader = ["Table", ...sortedFoods];
    let retVal = [
        arrayHeader,
    ];
    let sortedKeys = Array.from(orderByTables.keys()).sort((a, b) => a - b)
    for (var table of sortedKeys) {
        let tableOrder = [`${table}`];
        sortedFoods.forEach(food => {
            let currentFoodCount = orderByTables.get(table).get(food);
            let count = currentFoodCount !== undefined ? `${currentFoodCount}` : "0";
            tableOrder.push(count);
        })
        retVal.push(tableOrder);
    }
    return retVal
};

displayTable([["David", "3", "Ceviche"], ["Corina", "10", "Beef Burrito"], ["David", "3", "Fried Chicken"], ["Carla", "5", "Water"], ["Carla", "5", "Ceviche"], ["Rous", "3", "Ceviche"]])
