const sumOfUnique = (nums) => {
    const m = new Map()

    nums.forEach(x => {
        if(m.has(x)) m.set(x, m.get(x) + 1)
        else m.set(x, 1)
    })

    return [...m.entries()].filter(x => x[1] === 1)
                            .map(x => x[0])
                            .reduce((prev, cur) => prev + cur, 0)
};

nums = [1,2,3,2]
const res = sumOfUnique(nums)

console.log('res', res)

const a = []

a.reduce((prev, cur) => prev + cur, 0)