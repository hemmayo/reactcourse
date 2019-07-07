function choose(arr) {
    let arrIndex = Math.floor(Math.random() * arr.length)
    return arr[arrIndex]
}

export {choose}