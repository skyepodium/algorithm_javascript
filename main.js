const isStrictlyPalindromic = n => {
    // 1. base convertor
    const baseConvertor = (n, base) => {
        let res = ""
        while (n > 0) {
            res = (n % base) + res
            n = Math.floor(n / base)
        }
        return res
    }

    // 2. loop
    for(let i=2; i<=n-2; i++) {
        const baseStr = baseConvertor(n, i)

        // two pointer
        let l = 0
        let r = baseStr.length - 1
        while(l < r) {
            if (baseStr[l] !== baseStr[r]) {
                return false
            }
            l++
            r--
        }
    }

    return true
};