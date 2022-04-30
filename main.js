const permuteUnique = (nums) => {
    // 1. init
    const res = []
    const s = new Set()
    const n = nums.length
    const check = new Array(n).fill(false)

    // 2. dfs
    const dfs = (l, cnt) => {
        if(cnt >= n) {
            const key = l.join("")
            if(!s.has(key)) {
                s.add(key)
                res.push([...l])
            }
            return
        }

        for(let i=0; i<n; i++) {
            if(!check[i]){
                l.push(nums[i])
                check[i] = true
                dfs(l, cnt + 1)
                l.pop()
                check[i] = false
            }
        }
    }

    dfs([], 0)

    return res
};

nums = [1, 1, 2]
// nums = [1,2,3]
res = permuteUnique(nums)

console.log('res', res)