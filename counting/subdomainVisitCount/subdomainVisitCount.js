/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
const subdomainVisits = function(cpdomains) {
    const frequency = {};

    for (let i = 0; i < cpdomains.length; i++) {
        const [countStr, domain] = cpdomains[i].split(' ');
        const count = Number(countStr);
        const parts = domain.split('.');

        for (let j = 0; j < parts.length; j++) {
            const subdomain = parts.slice(j).join('.');
            frequency[subdomain] = (frequency[subdomain] || 0) + count;
        }
    }

    const result = [];

    for (const key in frequency) {
        result.push(frequency[key] + ' ' + key);
    }

    return result;
};

//Constraints:
// 1 <= cpdomain.length <= 100
// 1 <= cpdomain[i].length <= 100
// cpdomain[i] follows either the "repi d1i.d2i.d3i" format or the "repi d1i.d2i" format.
// repi is an integer in the range [1, 104].
// d1i, d2i, and d3i consist of lowercase English letters.