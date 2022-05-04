const checkStraightLine = (coordinates) => {
    // 1. init
    const n = coordinates.length

    // 2. ccw
    const ccw = (p, q, r) => {
        const first = (p[0] - r[0]) * (q[1] - r[1])
        const second = (p[1] - r[1]) * (q[0] - r[0])
        const result = first - second

        if(result > 0) return 1
        else if(result === 0) return 0
        else return -1
    }

    // 3. loop
    for(let i=0; i<n-2; i++) {
        if(ccw(coordinates[i], coordinates[i+1], coordinates[i+2]) !== 0) return false
    }

    return true
};