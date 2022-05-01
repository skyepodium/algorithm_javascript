const hammingDistance = (x, y) => {

    return (x^y).toString(2)
                .split("")
                .filter(x => x === "1").length
};

x = 1
y = 4
x = 3
y = 1
const res = hammingDistance(x, y)

console.log('res', res)