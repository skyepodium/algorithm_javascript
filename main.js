const kWeakestRows = (mat, k) => {
    return mat.flatMap(x => {
        return x.reduce((prev, cur) => prev + cur)
    })
        .map((idx, val) => [val, idx])
        .sort((a, b) => a[1] - b[1])
        .map(x => x[0])
        .slice(0, k)
};

const mat =
    [[1,1,0,0,0],
        [1,1,1,1,0],
        [1,0,0,0,0],
        [1,1,0,0,0],
        [1,1,1,1,1]]

const k = 3

const res = kWeakestRows(mat, k)

console.log('res', res)