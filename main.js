const licenseKeyFormatting = (s, k) => {

    s = s.replace(/-/g, "").reverse().toLowerCase()
    const n = s.length

    let t = ""
    for(let i=0; i<n; i+=k) {
        t += s.slice(i, i+k) + ""
    }

    t = t.slice(0, t.length - 1)

    return t.split("").reverse().join("")
};