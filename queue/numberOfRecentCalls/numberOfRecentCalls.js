class RecentCounter {
    constructor() {
        this.requests = [];
    }

    ping(t) {
        this.requests.push(t);

        while (this.requests[0] < t - 3000) {
            this.requests.shift();
        }

        return this.requests.length;
    }
}

//Constraints:
// 1 <= t <= 109
// Each test case will call ping with strictly increasing values of t.
// At most 104 calls will be made to ping.

