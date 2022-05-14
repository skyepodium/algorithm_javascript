const makeFancyString = (s) => {
    // 1. init
    const st = []

    // 2. loop
    for(const c of s.split("")) {
        const [a, b] = st.length > 0 ? st[st.length - 1] : ['', 0]

        if(a === c && b === 2) continue

        const cnt = a === c ? b + 1 : 1

        st.push([c, cnt])
    }

    return st.map(x => x[0]).join("")
};

s = "leeetcode"
s = "aaabaaaa"
s = "aab"

const res = makeFancyString(s)

console.log('res', res)