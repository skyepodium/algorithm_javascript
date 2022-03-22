const replaceDigits = (s) => {
    // 1. init
    const characters = s.split(/[0-9]+/).filter(x => x !== '')
    const nums = s.split(/[a-z]+/).filter(x => x !== '')
    const diff = Math.abs(characters.length - nums.length)
    const minLength = Math.min(characters.length, nums.length)
    const base = []
    let res = ""

    for(let i=0; i<minLength; i++) {
        const c = characters[i]
        const n = nums[i]

        const nOrder = (c.charCodeAt(0) - 'a'.charCodeAt(0) + Number(n)) % 26 + 'a'.charCodeAt(0)
        base.push(String.fromCharCode(nOrder))
    }

    for(let i=0; i<base.length; i++) {
        res += `${characters[i]}${base[i]}`
    }

    res += characters.slice(characters.length - diff, characters.length).join("")

    return res
};

// const s = "a1c1e1"
const s = "a1b2c3d4e"
const res = replaceDigits(s)

console.log('res', res)