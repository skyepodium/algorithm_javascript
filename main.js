const digitSum = (s, k) => {
    const sumStr = s => {
        let res = 0

        for(let i=0; i<s.length; i++) {
            const cur = s[i]
            res += cur.charCodeAt(0) - '0'.charCodeAt(0)
        }

        return String(res)
    }

    while(s.length > k) {
        let base = ""

        for(let i=0; i<s.length; i+=k) {
            base += sumStr(s.substring(i, i+k))
        }

        s = base
    }

    return s
};