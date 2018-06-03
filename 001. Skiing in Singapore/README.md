# Skiing in Singapore - a coding diversion

I read about this problem when an advertisement of Redmart pops out on Stackoverflow job. It looks promising so I decided to do it. You can read a step by step solution on my code. This is also my first time to use node API to read the local file.

### To test it

There are 2 text files, named corresponding as.

1. [test.txt](https://raw.githubusercontent.com/trungk18/algorithm-training/master/001.%20Skiing%20in%20Singapore/test.txt) - the 4x4 matrix as you see below

2. [map.txt](https://raw.githubusercontent.com/trungk18/algorithm-training/master/001.%20Skiing%20in%20Singapore/map.txt) - the 1000x1000 matrix

Just change the name on **app.ts** and you will get the result. I will add the unit test later.

---

[Problem link](http://geeks.redmart.com/2015/01/07/skiing-in-singapore-a-coding-diversion/)

Sometimes it's nice to take a break and code up a solution to a small, fun problem. Here is one some of our engineers enjoyed recently. It's called Skiing In Singapore.

Well you can’t really ski in Singapore. But let’s say you hopped on a flight to the Niseko ski resort in Japan. Being a software engineer you can’t help but value efficiency, so naturally you want to ski as long as possible and as fast as possible without having to ride back up on the ski lift. So you take a look at the map of the mountain and try to find the longest ski run down.

In digital form the map looks like the number grid below.

```
4 4
4 8 7 3
2 5 9 3
6 3 2 5
4 4 1 6
```

The first line (4 4) indicates that this is a 4x4 map. Each number represents the elevation of that area of the mountain. From each area (i.e. box) in the grid you can go north, south, east, west - but only if the elevation of the area you are going into is less than the one you are in. I.e. you can only ski downhill. You can start anywhere on the map and you are looking for a starting point with the longest possible path down as measured by the number of boxes you visit. And if there are several paths down of the same length, you want to take the one with the steepest vertical drop, i.e. the largest difference between your starting elevation and your ending elevation.

On this particular map the longest path down is of length=5 and it’s highlighted in bold below: **9-5-3-2-1**.

There is another path that is also length five: **8-5-3-2-1**. However the tie is broken by the first path being steeper, dropping from 9 to 1, a drop of 8, rather than just 8 to 1, a drop of 7.

Your challenge is to write a program in your favorite programming language to find the longest (and then steepest) path on this map specified in the format above. It’s 1000x1000 in size, and all the numbers on it are between 0 and 1500.