const removeDuplicates = (s) => {
    // 1. init
    const st = []

    // 2. loop
    s.split("").forEach(c => {
        if(st && st[st.length - 1] === c) while(st && st[st.length - 1] === c) st.pop()
        else st.push(c)
    })

    return st.join("")
};