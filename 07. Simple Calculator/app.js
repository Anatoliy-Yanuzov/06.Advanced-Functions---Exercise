function calculator() {
    const html = { s1: '', s2: '', output: '' };

    function calc(a, b, sign) {
        const signs = { '+': (a, b) => a + b, '-': (a, b) => a - b };

        return signs[sign](Number(a), Number(b));
    }
    return {
        init: (a, b, c) => {
            html.s1 = document.querySelector('#num1');
            html.s2 = document.querySelector('#num2');
            html.output = document.querySelector('#result');
        },
        add: () => (html.output.value = calc(html.s1.value, html.s2.value, '+')),
        subtract: () => (html.output.value = calc(html.s1.value, html.s2.value, '-')),
    }
}




