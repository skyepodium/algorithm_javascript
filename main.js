const findFinalValue = (nums, original) => {
    const s = new Set(nums)

    while(s.has(original)) original *= 2

    return original
};