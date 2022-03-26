const search = (nums, target) => {

    const binarySearch = (nums, target) => {
        let s = 0
        let e = nums.length - 1

        while(s <= e) {
            const mid = s + Math.floor((e - s) / 2)
            const cur = nums[mid]

            if(cur < target)  s = mid + 1
            else if(cur === target) return mid
            else e = mid - 1
        }

        return -1
    }

    return binarySearch(nums, target)
};

const nums = [-1,0,3,5,9,12]
const target = 9

const res = search(nums, target)

console.log('res', res)