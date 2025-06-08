/**
 * @param {string} s
 * @return {number}
 */
const minAddToMakeValid = function(s) {
    let openedBrackets = 0;
    let closedBrackets = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openedBrackets++;
        } else if (s[i] === ')' && openedBrackets > 0){
            openedBrackets--;
        } else {
            closedBrackets++;
        }
    }

    return openedBrackets + closedBrackets;
};

//Constraints:
// 1 <= s.length <= 1000
// s[i] is either '(' or ')'.