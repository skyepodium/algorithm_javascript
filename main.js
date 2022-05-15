const deepestLeavesSum = (root) => {
    // 1. init
    let d = 0
    let res = 0

    // 2. dfs
    const dfs = (node, depth) => {
        if(!node) return

        if(depth === d) res += node.val

        if(depth > d) {
            res = node.val
            d = depth
        }

        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }

    dfs(root, 0)

    return res
};