const divideArray = (nums) => {
    const m = new Map()

    nums.forEach(x => {
        if(m.has(x)) m.set(x, m.get(x) + 1)
        else m.set(x, 1)
    })

    return [...m.values()].filter(x => x % 2 !== 0).length === 0
};


nums = [3,2,3,2,2,2]
nums = [1, 2, 3, 4]
const res = divideArray(nums)

console.log('res', res)