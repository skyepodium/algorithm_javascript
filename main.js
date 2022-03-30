const missingNumber = (nums) => {
    const s = new Set(nums)

    for(let i=0; i<=nums.length; i++) {
        if(!s.has(i)) return i
    }
};

nums = [3, 0, 1]

const res = missingNumber(nums)

console.log('res', res)