const combinationSum3 = (k: number, n: number): number[][] => {
    // 1. init
    const res:number[][] = []
    const check:boolean[] = Array.from(new Array(10).fill(false))

    // 2. recursive
    const go = (cnt:number, l:number[], sumVal:number): void => {
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