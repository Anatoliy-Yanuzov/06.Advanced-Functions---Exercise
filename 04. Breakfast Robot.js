function solve() {

    const microElements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    const foods = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    function restock(element, quantity) {
        microElements[element] += quantity;
        return 'Success'
    }

    function report() {
        return (`protein=${microElements.protein} carbohydrate=${microElements.carbohydrate} fat=${microElements.fat} flavour=${microElements.flavour}`);
    }

    function prepare(recipe, quantity) {
        quantity = Number(quantity);

        for (let ingredient in foods[recipe]) {
            if (ingredient === 'carb') {
                ingredient = 'carbohydrate';
            }
            const neededQuantity = foods[recipe][ingredient] * quantity;

            if (neededQuantity > microElements[ingredient]) {
                return `Error: not enough ${ingredient} in stock`;
            }
        }

        for (let ingredient in foods[recipe]) {
            if (ingredient === 'carb') {
                ingredient = 'carbohydrate';
            }

            const neededQuantity = foods[recipe][ingredient] * quantity;
            microElements[ingredient] -= neededQuantity;
        }

        return 'Success';
    }
    return function (inputArgs) {
        const splittedInput = inputArgs.split(" ");
        const command = splittedInput[0];

        switch (command) {
            case "restock":
                const microelement = splittedInput[1];
                const quantity = +splittedInput[2];
                return restock(microelement, quantity);
            case "prepare":
                const meal = splittedInput[1];
                const mealQuantity = +splittedInput[2];
                return prepare(meal, mealQuantity);
            case "report":
                return report();
        }
    }

}
