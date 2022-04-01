const reverseVowels = (s) => {
    // 1. init
    const vowelList = []
    const vowelSet = new Set("aeiouAEIOU".split(""))
    const sList = s.split("")

    // 2. make vowelList
    for(let i=0; i<s.length; i++) {
        const val = s[i]
        if(vowelSet.has(val)) vowelList.push(i)
    }

    // 3. loop
    let l = 0
    let r = vowelList.length - 1
    while(l < r) {
        const lIdx = vowelList[l], rIdx = vowelList[r]
        const temp = sList[lIdx]
        sList[lIdx] = sList[rIdx]
        sList[rIdx] = temp
        l++
        r--
    }

    return sList.join("")
};

const s = "hello"
const res = reverseVowels(s)

console.log('res', res)