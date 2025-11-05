/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
const numRescueBoats = function(people, limit) {
    const sortedPeople = people.toSorted((a, b) => b - a);
    let counter = 0;
    let left = 0;
    let right = sortedPeople.length - 1;

    while (left <= right) {
        if (sortedPeople[left] + sortedPeople[right] <= limit) {
            counter++;
            left++;
            right--;
        } else {
            counter++;
            left++;
        }
    }

    return counter;
};

//Constraints:
// 1 <= people.length <= 5 * 104
// 1 <= people[i] <= limit <= 3 * 104