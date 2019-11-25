"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../Common/common");
common_1.ReadFile.Read(__dirname, "products.csv", function (data) { return Redmart.Main(data); });
var maxVolume = 45 * 30 * 35;
var Redmart = /** @class */ (function () {
    function Redmart() {
    }
    Redmart.Main = function (input) {
        this.readCsv(input);
        var wt = this.products.map(function (product) { return product.width * product.length * product.height; });
        var val = this.products.map(function (product) { return product.price; });
        var result = this.knapSack(maxVolume, wt, val, this.products.length);
        console.log(result);
    };
    Redmart.knapSack = function (W, wt, val, n) {
        var k = [];
        for (var i = 0; i <= n; i++) {
            console.log(i);
            k[i] = [];
            for (var w = 0; w <= W; w++) {
                if (i == 0 || w == 0) {
                    k[i][w] = 0;
                }
                else if (wt[i - 1] <= w) {
                    k[i][w] = Math.max(val[i - 1] + k[i - 1][w - wt[i - 1]], k[i - 1][w]);
                }
                else {
                    k[i][w] = k[i - 1][w];
                }
            }
        }
        return k[n][W];
    };
    Redmart.readCsv = function (input) {
        var _this = this;
        input.forEach(function (line) {
            var _a = line.split(","), productId = _a[0], price = _a[1], length = _a[2], width = _a[3], height = _a[4], weight = _a[5];
            var product = new Product(parseInt(productId), parseInt(price), parseInt(length), parseInt(width), parseInt(height), parseInt(weight));
            if (product.length <= 45 && product.width <= 30 && product.height <= 35) {
                _this.products.push(product);
            }
        });
    };
    Redmart.products = [];
    Redmart.count = 0;
    return Redmart;
}());
var Product = /** @class */ (function () {
    function Product(productId, price, length, width, height, weight) {
        this.productId = productId;
        this.price = price;
        this.length = length;
        this.width = width;
        this.height = height;
        this.weight = weight;
    }
    return Product;
}());
//# sourceMappingURL=app.js.map