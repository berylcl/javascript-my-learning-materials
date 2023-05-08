function isBalanced(str) {
    const stack = [];
    const openingBrackets = ['[', '{', '('];
    const closingBrackets = [']', '}', ')'];

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const index = closingBrackets.indexOf(char);
            if (stack.length === 0 || stack[stack.length - 1] !== openingBrackets[index]) {
                return false;
            } else {
                stack.pop();
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("{}")); // true
console.log(isBalanced("(hello)[world]")); // true
console.log(isBalanced("[({}{}{})([])]")); // true
console.log(isBalanced("(hello")); // false
console.log(isBalanced("([)]")); // false
console.log(isBalanced(")(")); // false
