const countBits = (n) => {
    return Array.from(new Array(n+1).keys())
        .map(x => {
            let res = 0
            while(x > 0) {
                if(x%2 === 1) res++
                x = ~~(x/2)
            }
            return res
        })
};

n = 2
n = 5
const res = countBits(n)

console.log('res', res)