const specialArray = (nums) => {
    // 1. init
    const maxVal = Math.max(...nums)
    let res = -1

    // 2. calCnt
    const calCnt = mid => {
        let res = 0
        for(const x of nums) {
            if(x >= mid) res += 1
        }
        return res
    }

    // 3. binary search
    let s = 0, e = maxVal
    while(s <= e) {
        const mid = s + Math.trunc((e - s) / 2)
        const cnt = calCnt(mid)
        if(cnt > mid) {
            s = mid + 1
        }
        else if(cnt === mid) {
            return mid
        }
        else {
            e = mid - 1
        }
    }

    return res
};

nums = [3,5]
// nums = [0,0]
// nums = [0,4,3,0,4]

res = specialArray(nums)

console.log('res', res)