module.exports = function check(str, bracketsConfig) {
    const strLength = str.length;

    if (strLength % 2 !== 0) {
        return false;
    }

    const charStack = [];
    const configLength = bracketsConfig.length;
    let checkEven = 1;
    let cheven;
    let chClose;

    for (let i = 0; i < strLength; i++) {
        let ch = str.charAt(i);
        let close = false;
        let open = false;
        let even = false;

        for (let j = 0; j < configLength; j++) {
            if (
                bracketsConfig[j][0] === bracketsConfig[j][1] &&
                ch === bracketsConfig[j][0]
            ) {
                even = true;
                checkEven = -1 * checkEven;
                cheven = ch;
                break;
            }
            if (ch === bracketsConfig[j][0]) {
                open = true;
                break;
            }
            if (ch === bracketsConfig[j][1]) {
                close = true;
                chClose = bracketsConfig[j][0];
                break;
            }
        }
        if (even === true) {
            if (checkEven === -1) {
                charStack.push(ch);
            }
            if (checkEven === 1 && cheven === charStack[charStack.length - 1]) {
                charStack.pop();
            }
        } else {
            if (open === true) {
                charStack.push(ch);
            }
            if (close === true && chClose === charStack[charStack.length - 1]) {
                charStack.pop();
            }
        }
    }

    return charStack.length === 0;
};
