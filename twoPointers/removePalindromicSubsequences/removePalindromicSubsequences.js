/**
 * @param {string} s
 * @return {number}
 */

//FIRST TRY
const isPalindrome = (str) => {
    let l = 0;
    let r = str.length - 1;

    while (l < r) {
        if (str[l] !== str[r]) {
            return false;
        }

        l++;
        r--;
    }

    return true;
};

const removePalindromeSub = function(s) {
    let counter = 0;
    let l = 0;
    let r = s.length - 1;

    while (s.length > 0) {
        if (isPalindrome(s)) {
            console.log('first if', s);
            counter++;
            s = '';
        } else if (isPalindrome(s.slice(l, r))) {
            s = s.slice(l, r);
            counter++;
            l = r;
        } else if (isPalindrome(s.slice(l + 1, r))) {
            s = s.slice(0, l + 1);
            counter++;
            r = l;
        }

        l++;
        r--;
    }

    return counter;
};

//FIRST TRY

//SECOND TRY
const removePalindromeSub = function(s) {
    if (isPalindrome(s)) {
        return 1;
    }

    return 2;
};
//SECOND TRY