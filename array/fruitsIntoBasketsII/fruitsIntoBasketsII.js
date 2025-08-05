/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
const numOfUnplacedFruits = function(fruits, baskets) {
    let unplacedCounter = 0;

    for (let i = 0; i < fruits.length; i++) {
        for (let j = 0; j < baskets.length; j++) {
            if (baskets[j] >= fruits[i]) {
                baskets[j] = -1;
                unplacedCounter++;
                break;
            }
        }
    }

    return fruits.length - unplacedCounter;
};

//Constraints:
// n == fruits.length == baskets.length
// 1 <= n <= 100
// 1 <= fruits[i], baskets[i] <= 1000