const findOcurrences = (text, first, second) => {

    return [...` ${text}`.matchAll(new RegExp(`(?= ${first} ${second} (\\w+))`, 'g'))].map(x => x[1])
};
