const prefixCount = (words, pref) => {

    return words.map(x => x.indexOf(pref) === 0 ? 1 : 0)
        .reduce((prev, cur) => prev + cur)
};