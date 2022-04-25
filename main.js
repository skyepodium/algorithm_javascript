const solution = (fees, records) => {
    // 1. init
    const [baseMinute, baseFee, perMinute, perFee] = fees
    const p = new Map()
    const remain = new Map()
    const res = new Map()

    // 2. calDiff
    const calDiff = (before, cur) => {
        const [beforeHour, beforeMinute] = before
        const [curHour, curMinute] = cur
        let hourDiff = curHour - beforeHour
        let minuteDiff = curMinute - beforeMinute

        if(minuteDiff < 0) {
            hourDiff -= 1
            minuteDiff += 60
        }

        return hourDiff * 60 + minuteDiff
    }

    // 3. cal fee
    const calFee = diff => {
        let res = baseFee

        if(diff > baseMinute) {
            const mdiff = diff - baseMinute
            let a = Math.trunc(mdiff / perMinute)
            if(mdiff % perMinute !== 0) a += 1
            res += a * perFee
        }
        return res
    }

    // 4. loop
    for(const r of records) {
        const [t, num, cmd] = r.split(" ")
        const curTime = t.split(":").map(x => Number(x))
        if(cmd === "IN") {
            p.set(num, curTime)
        }
        else {
            const diff = calDiff(p.get(num), curTime)
            if(remain.has(num)) remain.set(num, remain.get(num) + diff)
            else remain.set(num, diff)
            p.delete(num)
        }
    }

    // 5. sumTime
    for(const [num, t] of p.entries()) {
        const diff = calDiff(t, [23, 59])
        if(remain.has(num)) remain.set(num, remain.get(num) + diff)
        else remain.set(num, diff)
    }

    // 6. total fee
    for(const [num, val] of remain.entries()) {
        res.set(num, calFee(val))
    }

    return [...res.entries()].sort((a, b) => (Number(a[0])-Number(b[0])))
        .map(x => x[1])
}

fees = [180, 5000, 10, 600]
records = ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"]
// records = ["05:34 5961 IN", "07:59 5961 OUT", "22:59 5961 IN", "23:00 5961 OUT"]

const res = solution(fees, records)

console.log('res', res)