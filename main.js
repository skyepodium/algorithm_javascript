const solution = (n, k) => {
    // 1. init
    let res = 0

    // 2. intToBase
    const intToBase = (n, k) => {
        let r = ""
        while(n > 0) {
            r += String(n % k)
            n = ~~(n/k)
        }
        return r.split("").reverse().join("")
    }

    // 3. isPrime
    const isPrime = val => {
        if (val < 2) return false

        for(let i=2; i*i<=val; i++) if(val % i === 0) return false

        return true
    }

    const num = intToBase(n, k)

    // 4. check
    // 1) not zero
    if(num.replace(/0/g, '') === num && isPrime(Number(num))) res++

    // 2) regex_list
    const regex_list = [/^([1-9]+)0/g, /0([1-9]+)$/g, /(?=0([1-9]+)0)/g]

    for(const re of regex_list) {
        const b = [...num.matchAll(new RegExp(re, 'g'))]

        b.forEach(x => {
            if(isPrime(Number(x[1]))) res++
        })
    }

    return res
}

n = 437674
k = 3

n = 110011
k = 10

res = solution(n, k)

console.log('res', res)