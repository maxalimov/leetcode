/**
 * @param {string} word
 * @return {number}
 */
const minimumPushes = function(word) {
    const frequency = {};

    for (let i = 0; i < word.length; i++) {
        frequency[word[i]] = (frequency[word[i]] || 0) + 1;
    }

    const freqValues = Object.values(frequency).sort((a, b) => b - a);
    let minNumberOfPushes = 0;

    for (let i = 0; i < freqValues.length; i++) {
        // 0–7: 1 нажатие (клавиши 2–9, первая позиция)
        // 8–15: 2 нажатия (клавиши 2–9, вторая позиция)
        // 16–23: 3 нажатия (клавиши 2–9, третья позиция)
        const pushes = Math.floor(i / 8) + 1;
        minNumberOfPushes += freqValues[i] * pushes;
    }

    return minNumberOfPushes;
};

//Constraints:
// 1 <= word.length <= 105
// word consists of lowercase English letters.