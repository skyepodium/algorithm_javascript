const isPalindrome = (x: number): boolean => {
    const s: string = String(x)

    return s === s.split("").reverse().join("")
};

// const x:number = 121
const x:number = -121

const res:boolean = isPalindrome(x)

console.log('res', res)