function solve(arr, sortType) {

    if (sortType === 'asc') {
        return arr.sort((a, b) => a - b);
    } else if (sortType === 'desc') {
        return arr.sort((a, b) => b - a);
    }

    // Solved with a ternary operator
    // return sortType === 'asc' ? arr.sort((a, b) => a - b) : arr.sort((a, b) => b - a);
}


