const solution = (n, times) => {
    // 1. init
    const maxVal = Math.max(...times)
    let res = n * maxVal
    let s = 0, e = maxVal * n

    // 2. calTime
    const calTime = a => {
        return times.map(t => Math.trunc(a/t))
            .reduce((prev, cur) => prev + cur)
    }

    // 3. binarySearch
    while(s < e) {
        const mid = s + Math.trunc((e - s) / 2)

        const cnt = calTime(mid)
        if(cnt < n) {
            s = mid + 1
        }else {
            res = Math.min(res, mid)
            e = mid
        }
    }

    return res
}
