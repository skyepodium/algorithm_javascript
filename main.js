const numRescueBoats = (people, limit) => {
    // 1. init
    people.sort((a, b) => b-a)
    let res = 0
    let s = 0
    let e = people.length - 1

    // 2. loop
    while(s <= e) {
        const first = people[s]
        if(s < e) {
            const last = people[e]
            if(first + last <= limit) e--
        }
        res++
        s++
    }

    return res
};

people = [1, 2]
limit = 3
people = [3,2,2,1]
limit = 3
people = [3,5,3,4]
limit = 5
people = [5, 1, 4, 2]
limit = 6

const res = numRescueBoats(people, limit)

console.log('res', res)