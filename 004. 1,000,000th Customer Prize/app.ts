import { ReadFile } from "../Common/common";

ReadFile.Read(__dirname, "products.csv", data => Redmart.Main(data))

const maxVolume = 45 * 30 * 35;

class Redmart {
    private static products: Product[] = [];

    public static Main(input: string[]) {
        this.readCsv(input);
        let wt = this.products.map(product => product.width * product.length * product.height);
        let val = this.products.map(product => product.price);
        let result = this.knapstack(maxVolume, wt, val, this.products.length);
    }

    private static knapstack(W: number, wt: number[], val: number[], n: number) {
        if (n === 0)
            return 0;

        // If volume of the nth item is more than Knapsack capacity W, then
        // this item cannot be included in the optimal solution
        if (wt[n - 1] > W) {
            return this.knapstack(W, wt, val, n - 1);
        }
        else {
            // Return the maximum of two cases: 
            // (1) nth item included 
            // (2) not included  
            return Math.max(val[n - 1] + this.knapstack(W - wt[n - 1], wt, val, n - 1), this.knapstack(W, wt, val, n - 1))
        }
    }

    private static readCsv(input: string[]) {
        input.forEach(line => {
            let [productId, price, length, width, height, weight] = line.split(",");
            let product = new Product(
                parseInt(productId),
                parseInt(price),
                parseInt(length),
                parseInt(width),
                parseInt(height),
                parseInt(weight));
            if (product.length <= 45 || product.width <= 30 || product.height <= 35) {
                this.products.push(product);
            }
        })
    }

}

class Product {
    constructor(public productId: number,
        public price: number,
        public length: number,
        public width: number,
        public height: number,
        public weight: number) {
    }
}