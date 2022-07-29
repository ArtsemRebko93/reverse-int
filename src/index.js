module.exports = function reverse(n) {
    const toStr = String(n);
    let reverseStr = toStr.split("");
    if (reverseStr[0] === "-") {
        let delIndex = reverseStr.shift();
    }
    reverseStr = reverseStr.reverse().join("");
    return Number(reverseStr);
};
