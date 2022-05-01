const backspaceCompare = (s, t) => {

    const refine = (s) => {
        const st = []

        s.split("").forEach(x => {
            if(x !== '#') {
                st.push(x)
            }
            else {
                if(st.length > 0) st.pop()
            }
        })

        return st.join("")
    }

    return refine(s) === refine(t)
};