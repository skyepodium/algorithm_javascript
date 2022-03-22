const targetIndices = function(nums, target) {
    // 1. init
    nums.sort((a, b) => a - b)
    const n = nums.length
    const base = Array.from(Array(n).keys())
    let res = []

    // 2. lowerBound
    const lowerBound = (target) => {
        let l = 0
        let r = n

        while(l<r) {
            const mid = l + Math.floor((r-l) / 2)
            if(nums[mid] < target) l = mid + 1
            else r = mid
        }
        return r
    }

    // 3. upperbound
    const upperBound = (target) => {
        let l = 0
        let r = n

        while(l<r) {
            const mid = l + Math.floor((r-l) / 2)
            if(nums[mid] <= target) l = mid + 1
            else r = mid
        }
        return r
    }

    const l = lowerBound(target)
    const r = upperBound(target) - 1
    if(l <= r) res = base.slice(l, r+1)

    return res
};