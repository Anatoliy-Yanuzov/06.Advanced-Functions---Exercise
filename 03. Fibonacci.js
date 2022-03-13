function solve() {

    let numbers = [0, 0];

    return function getFibonacci() {
        let result = numbers[0] + numbers[1];
        numbers = [numbers[1], numbers[1] + numbers[0] || 1];
        return result || 1;
    }
}
