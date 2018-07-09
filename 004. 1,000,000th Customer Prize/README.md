# 1,000,000th Customer Prize - another programming challenge

I read about this problem when an advertisement of Redmart pops out on Stackoverflow job. It looks promising so I decided to do it. You can read a step by step solution on my code. This is also my first time to use node API to read the local file.

### Solution

Based on 0-1 Knapstack problem

- https://www.geeksforgeeks.org/knapsack-problem/
- https://www.geeksforgeeks.org/printing-items-01-knapsack/

### To test it

[products.csv](https://raw.githubusercontent.com/trungk18/algorithm-training/master/004.%201%2C000%2C000th%20Customer%20Prize/products.csv) 

Just change the name on **app.ts** and you will get the result. I will add the unit test later.

---

[Problem link](http://geeks.redmart.com/2015/10/26/1000000th-customer-prize-another-programming-challenge/)

Imagine a little while from now RedMart is closing in fast on delivering its 1 millionth order. The marketing team decides to give the customer who makes that order a prize as a gesture of appreciation. The prize is a fun one: the lucky customer gets a RedMart delivery tote and 1 hour in the warehouse. Use the hour to fill up the tote with any products you desire and take them home for free.

The only restrictions are:

You can only take 1 of any product. 
Everything you take, together, must completely fit into a tote. 
The tote’s usable space is **45** centimeters long, **30** wide and **35** high. *(You can assume that if the products fit into the tote both individually and together by total volume, that you'll be able to find a way to pack them in.)*

Here is what a tote looks like: 
![tote](http://static1.squarespace.com/static/51c9228ae4b05db4f944c2aa/51ca6cb4e4b0bf9a1f498f15/54be2e50e4b0a3e130f21ed3/1421750637865/selected.jpg?format=120w)

In a stunning turn of events you are the person who places the 1 millionth RedMart order and are the winning customer. Congratulations, what luck! Your run of luck continues when you come into possession of a file describing RedMart’s products. For each product it lists the price, length, width, height and weight. Being a software engineer you are quite analytical and clever. So naturally you decide to optimize this opportunity by figuring out ahead of time what products you will take, and then spend your hour leisurely collecting them around the warehouse.

In addition to the rules of the contest your personal preferences are:

Maximize the dollar value of the products in the tote. 
A lighter tote is better, as long as you don’t sacrifice any dollar value. 
Your challenge is to write a program in your favorite programming language to enact your plan. Use this file as input. It contains 20,000 products, one per line. Each line has the following fields separated by a comma:

`product ID, price, length, width, height, weight`

Price is in cents, dimensions are in centimeters, weight is in grams.