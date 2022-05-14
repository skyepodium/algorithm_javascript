const makeFancyString = (s:string):string => {
    // 1. init
    const st:[string, number][] = []

    // 2. loop
    for(const c of s.split("")) {
        const [a, b]:[string, number] = st.length > 0 ? st[st.length - 1] : ['', 0]

        if(a === c && b === 2) continue

        const cnt:number = a === c ? b + 1 : 1

        st.push([c, cnt])
    }

    return st.map(x => x[0]).join("")
};
