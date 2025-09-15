/**
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function(emails) {
    const set = new Set();

    for (let i = 0; i < emails.length; i++) {
        const [localName, domainName] = emails[i].split("@");
        let clearedLocalName = '';

        for (let j = 0; j < localName.length; j++) {
            if (localName[j] === '+') {
                break;
            } else if (localName[j] !== '.') {
                clearedLocalName += localName[j];
            }
        }

        set.add(clearedLocalName + '@' + domainName);
    }

    return set.size;
};

//Constraints:
// 1 <= emails.length <= 100
// 1 <= emails[i].length <= 100
// emails[i] consist of lowercase English letters, '+', '.' and '@'.
// Each emails[i] contains exactly one '@' character.
// All local and domain names are non-empty.
// Local names do not start with a '+' character.
// Domain names end with the ".com" suffix.
// Domain names must contain at least one character before ".com" suffix.