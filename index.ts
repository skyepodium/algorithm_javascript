const deepestLeavesSum = (root: TreeNode | null): number => {
    // 1. init
    let d: number = 0
    let res: number = 0

    // 2. dfs
    const dfs = (node: TreeNode, depth: number) => {
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