const checkStraightLine = (coordinates: number[][]): boolean => {

    // 1. init
    const n:number = coordinates.length

    // 2. ccw
    const ccw = (p:number[], q:number[], r:number[]):number => {
        const first:number = (p[0] - r[0]) * (q[1] - r[1])
        const second:number = (p[1] - r[1]) * (q[0] - r[0])
        const result:number = first - second

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