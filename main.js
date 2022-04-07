const solution = (number, k) => {
    // 1. init
    const s = []
    const numList = number.split("").map(x => Number(x))

    // 2. loop
    for(const num of numList) {
        while(s.length > 0 && s[s.length - 1] < num && k > 0) {
            s.pop()
            k--
        }
        s.push(num)
    }
    return s.slice(0, numList.length - k).join("")
}


number = "1924"
k = 2

number = "1231234"
k = 3

number = "4177252841"
k = 4

number = "21"
k = 1
const res = solution(number, k)

console.log('res', res)