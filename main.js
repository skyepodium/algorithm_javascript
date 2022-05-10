const combinationSum3 = (k, n) => {
    // 1. init
    const res = []
    const check = Array.from(new Array(10).fill(false))

    // 2. recursive
    const go = (cnt, l, sumVal) => {
        if(sumVal > n) return

        if(cnt >= k) {
            if(sumVal === n) {
                res.push([...l])
            }
            return
        }

        for(let i=1; i<10; i++) {
            if(!check[i]) {
                if(l.length > 0 && l[l.length - 1] > i) continue

                check[i] = true
                l.push(i)
                go(cnt + 1, l, sumVal + i)
                check[i] = false
                l.pop()
            }
        }
    }

    go(0, [], 0)

    return res
};

k = 3
n = 7

const res = combinationSum3(k, n)

console.log('res', res)