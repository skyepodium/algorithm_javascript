const buildArray = (nums: number[]): number[] => {
    return nums.map((val, idx) => nums[nums[idx]])
};
