import { ReadFile, splitString } from "../Common/common";

ReadFile.Read(__dirname, "map.txt", data => KFactorization.Main(data))

class KFactorization {
    private static n: number;
    private static k: number;
    private static a: number[];

    public static Main(data) {
        let [firstLine, rest] = data;
        let nk = splitString(firstLine);
        this.n = nk[0];
        this.k = nk[1];
        this.a = splitString(rest).sort((a, b) => a - b);
        var result = this.kFactorization(this.n, this.a);
        console.log(result.join(" ") + "\n");
    }

    public static kFactorization(n: number, A: number[]) {
        for (var i = A.length - 1; i >= 0; i--) {

        }
        return [];
    }
}