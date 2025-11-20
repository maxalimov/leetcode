/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function(tokens) {
    if (tokens.length === 1) {
        return +tokens[0];
    }

    const operators = new Set(['+', '-', '*', '/']);
    const stack = []

    for (let i = 0; i < tokens.length; i++) {
        if (!operators.has(tokens[i])) {
            stack.push(tokens[i]);
        } else {
            const right = +stack.pop();
            const left = +stack.pop();
            let answer;
            if (tokens[i] === '+') answer = left + right;
            else if (tokens[i] === '-') answer = left - right;
            else if (tokens[i] === '*') answer = left * right;
            else if (tokens[i] === '/') answer = Math.trunc(left / right);

            stack.push(answer);
        }
    }

    return stack[0];
};

//Constraints:
// 1 <= tokens.length <= 104
// tokens[i] is either an operator: "+", "-", "*", or "/", or an integer in the range [-200, 200].