const buildArray = (nums) => {
    return nums.map((val, idx) => nums[nums[idx]])
};

nums = [0,2,1,5,3,4]
nums = [5,0,1,2,3,4]

const res = buildArray(nums)

console.log('res', res)