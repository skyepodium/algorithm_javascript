const solution = (m, musicinfos) => {
    // 1. init
    let res = "(None)"
    let t = -1
    const tk_list = ['C', 'D', 'F', 'G', 'A']

    // 2. rep
    const rep = s => {
        tk_list.forEach(x => s = s.replace(new RegExp(`${x}#`, 'g'), x.toLowerCase()))
        return s
    }

    m = rep(m)

    // 3. calDiff
    const calDiff = (s, e) => {
        let [sh, sm] = s.split(":").map(x => Number(x))
        let [eh, em] = e.split(":").map(x => Number(x))

        let hDiff = eh - sh
        if(em < sm) {
            hDiff -= 1
            em += 60
        }
        const mdiff = em - sm

        return hDiff * 60 + mdiff
    }

    // 4. loop
    for(const ms of musicinfos) {
        // 1) split
        let [s, e, name, ml] = ms.split(",")
        ml = rep(ml)

        // 2) cal diff
        const diff = calDiff(s, e)

        // 3) get total
        const ml_len = ml.length

        let me = ""
        const q = ~~(diff / ml_len)
        for(let i=0; i<q; i++) me += ml

        me += ml.slice(0, diff % ml_len)

        const pattern = new RegExp(m)

        const match = pattern.exec(me)
        if(match && diff > t) {
            t = diff
            res = name
        }
    }

    return res
}

m = "ABCDEFG"
musicinfos = ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"]
//HELLO

m = "CC#BCC#BCC#BCC#B"
musicinfos = ["03:00,03:30,FOO,CC#B", "04:00,04:08,BAR,CC#BCC#BCC#B"]
//FOO
//
// m = "ABC"
// musicinfos = ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"]
// //WORLD

res = solution(m, musicinfos)
console.log('res', res)
