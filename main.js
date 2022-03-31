const numDifferentIntegers = (word) => {
    return new Set(word.split(/[a-z]+/g)
        .filter(x => x !== '')
        .map(x => BigInt(x))).size
};
