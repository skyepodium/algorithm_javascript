const search = (nums, target) => {

    const binarySearch = (s, e, nums, target) => {
        if(s > e) return -1

        const mid = s + ~~((e-s) / 2)
        const cur = nums[mid]

        if(cur < target) return binarySearch(mid+1, e, nums, target)
        else if(cur === target) return mid
        else return binarySearch(s, mid-1, nums, target)
    }

    return binarySearch(0, nums.length - 1, nums, target)
};

const nums = [-1,0,3,5,9,12]
const target = 9

const res = search(nums, target)

console.log('res', res)