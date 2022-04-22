const dominantIndex = (nums) => {
    // 1. exception
    if(nums.length < 2) return 0

    // 2. sort
    const l = nums.map((val, idx) => [val, idx])
        .sort((a, b) => b[0] - a[0])

    const first = l[0]
    const second = l[1]

    return first[0] >= second[0] * 2 ? first[1] : -1
};