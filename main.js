function solution(n, m) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b)

    return [gcd(n, m), n*m/gcd(n, m)]
}