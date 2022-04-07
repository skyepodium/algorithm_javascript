const average = (salary) => {
    return (salary.reduce((prev, cur) => prev + cur) - Math.max(...salary) - Math.min(...salary)) / (salary.length - 2)
};