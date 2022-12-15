/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    // 1. init
    const n = text1.length;
    const m = text2.length;
    const d = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

    // 2. loop
    for (let i = 1; i <= n; i++) {
        for(let j=1; j<=m; j++) {
            if(text1[i-1] === text2[j-1]) {
                d[i][j] = d[i-1][j-1] + 1;
            }
            else {
                d[i][j] = Math.max(d[i][j-1], d[i-1][j])
            }
        }
    }

    return d[n][m];
};