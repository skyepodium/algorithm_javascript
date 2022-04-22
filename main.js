const solution = (n, t, m, p) => {

    const intToBaseStr = (num, base) => {
        let res = ""

        while(num > 0) {
            const remain = num % base
            if(remain >= 10) res += String.fromCharCode("A".charCodeAt(0) + (remain % 10))
            else res += String(remain)
            num = ~~(num / base)
        }

        if(res === "") res = "0"

        return res.split("").reverse().join("")
    }

    let r = ""
    for(let i=0; i<t*m; i++) {
        r += intToBaseStr(i, n)
    }

    let res = ""
    for(let i=p; i<=t*m; i += m) {
        res += r[i-1]
    }

    return res
}

n = 2
t = 4
m = 2
p = 1

const res = solution(n, t, m, p)

console.log('res', res)
