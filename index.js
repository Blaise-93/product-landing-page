const time = new Date().getFullYear()

let i = [2, 5, 6, 8]

function age(arr) {
    return arr.reduce((acc, currentValue) => {
        return acc + currentValue
    }, [])
}

console.log(age(i))