function solution(s) {
    return (s.length === 4 || s.length === 6) && s.split(/[0-9]/).filter(x => x !== '').join("") === ""
}