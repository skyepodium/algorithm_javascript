const minimumSum = (num) => {
    const s = String(num).split("")
        .map(x => Number(x))
        .sort((a, b) => a - b)


    return (s[0] + s[1]) * 10 + s[2] + s[3]
};