function solve(num) {
    let temp = 0

    function recursive(x) {
        temp += x

        return recursive
    }
    recursive.toString = () => temp
    return recursive(num)
}