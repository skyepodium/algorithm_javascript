function solution(absolutes, signs) {
    return absolutes.map((x, i) => signs[i] ? x : -x)
            .reduce((p, c) => p+c)
}

const res = solution([3, 4, 5], [true, false, false])

console.log('res', res)