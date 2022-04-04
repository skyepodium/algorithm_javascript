const freqAlphabets = (s) => {
    const getAlphatbet = (n) => {
        return String.fromCharCode("a".charCodeAt(0) + n - 1)
    }

    for(let i=26; i>=0; i--) {
        const pattern = i >= 10 ? `${i}#` : `${i}`
        const regex = new RegExp(pattern, 'g')
        s = s.replace(regex, getAlphatbet(i))
    }

    return s
};

s = "10#11#12"
s = "1326#"
const res = freqAlphabets(s)

console.log('res', res)