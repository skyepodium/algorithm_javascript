function solution(d, budget) {
    // 1. init
    let res = 0

    // 2. loop
    d.sort((a, b) => a-b)
        .forEach(x => {
        if(budget >= x) {
            budget -= x
            res++
        }
    })

    return res
}