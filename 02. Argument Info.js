function solve(...input) {

    // strCount = 0;
    // numCount = 0;
    // funcCount = 0;

    // for (const i of input) {

    //     if (typeof (i) === 'string') {
    //         strCount++
    //     }
    //     if (typeof (i) === 'number') {
    //         numCount++
    //     }
    //     if (typeof (i) === 'function') {
    //         funcCount++
    //     }
    //     console.log(`${typeof (i)}: ${i}`);
    // }
    // console.log(`string = ${strCount}\nnumber = ${numCount}\nfunction = ${funcCount}`);

    const count = {};
    const result = input.map(x => {
        count[typeof x] = (count[typeof x] || 0) + 1;
        return `${typeof x}: ${x}`;
    })

    result.forEach(x => console.log(x));

    Object.entries(count).sort((x, y) => y[1] - x[1]).map(([type, counts]) =>
        console.log(`${type} = ${counts}`));
}
solve('cat', 42, function () { console.log('Hello world!'); });