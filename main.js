const isPalindrome = (x) => {
    const s = String(x)

    return s === s.split("").reverse().join("")
};