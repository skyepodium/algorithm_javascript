const containsDuplicate = (nums) => {
    return new Set(nums).size !== nums.length
};

nums = [1,2,3,1]

const res = containsDuplicate(nums)

console.log('res', res)