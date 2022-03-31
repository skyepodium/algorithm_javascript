const isSameTree = (p, q) => {
    let res = true
    const dfs = (a, b) => {
        console.log(a, b)
        if((!a && b) || (b && !a)) {
            res = false
            return
        }
        else if(!a && !b) return

        if(a.left && b.left) dfs(a.left, b.left)
        else if(a?.left?.val !== b?.left?.val) res = false
        if(a.val !== b.val) res = false
        if(a.right && b.right) dfs(a.right, b.right)
        else if(a?.right?.val !== b?.right?.val) res = false
    }

    dfs(p, q)

    return res
};
