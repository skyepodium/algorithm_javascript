const countingSort = (arr) => {
    const minVal = Math.min(...arr)
    const maxVal = Math.max(...arr)
    const res = []
    const base = Array.from(Array(maxVal - minVal + 1)).fill(0)

    arr.forEach(x => base[x - minVal]++)

    base.forEach((b, idx) => {
        while(b--) res.push(idx + minVal)
    })

    return res
}

arr = [5, 5, 2, 3, 4, 3, -1]

arr = countingSort(arr)

arr.forEach(x => console.log(x))