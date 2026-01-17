class Solution {
    constructor(w) {
        this.weights = [...w];
        this.prefixSum = [];
        let currentSum = 0;

        for (let i = 0; i < this.weights.length; i++) {
            currentSum += this.weights[i];
            this.prefixSum.push(currentSum);
        }
    }

    pickIndex() {
        const random = Math.random() * this.prefixSum[this.prefixSum.length - 1];
        let left = 0;
        let right = this.prefixSum.length - 1;

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (random >= this.prefixSum[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        return left;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

//Constraints:
// 1 <= w.length <= 104
// 1 <= w[i] <= 105
// pickIndex will be called at most 104 times.