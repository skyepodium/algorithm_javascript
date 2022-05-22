const countSubstrings = (s) => {
    // 1. init
    const n = s.length
    let res = 0

    // 2. isPalindrome
    const isPalindrome = (l, r) => {
        while(l >= 0 && r < n && s[l] === s[r]) {
            res++
            l--
            r++
        }
    }

    // 3. loop
    for(let i=0; i<n; i++) {
        isPalindrome(i, i)
        isPalindrome(i, i+1)
    }

    return res
};