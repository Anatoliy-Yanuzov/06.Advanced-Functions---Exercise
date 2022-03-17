function solve() {

    let taskInputElement = document.querySelector('#task');
    let descriptionInputElement = document.querySelector('#description');
    let dueDataInputElement = document.querySelector('#date');
    let buttonAddElement = document.querySelector('#add');

    let openSectionElement = document.querySelectorAll('section')[1];
    let inProgressSectionElement = document.querySelectorAll('section')[2];
    let completeSectionElement = document.querySelectorAll('section')[3];

    function createElement(type, text, className) {

        let result = document.createElement(type);
        result.textContent = text;

        if (className) {
            result.className = className;
        }
        return result;
    }

    buttonAddElement.addEventListener('click', (e) => {
        e.preventDefault();

        if (taskInputElement.value == '' || descriptionInputElement == '' || dueDataInputElement.value == '') {
            return;
        };

        let articleTag = createElement('article');
        let h3Tag = createElement('h3', taskInputElement.value);
        let pDescriptionTag = createElement('p', 'Description: ' + descriptionInputElement.value);
        let pDueDataTag = createElement('p', 'Due Date: ' + dueDataInputElement.value);
        let flexClassTag = createElement('div', undefined, 'flex');
        let greenButtonTag = createElement('button', 'Start', 'green');
        let redButtonTag = createElement('button', 'Delete', 'red');

        flexClassTag.appendChild(greenButtonTag);
        flexClassTag.appendChild(redButtonTag);

        articleTag.appendChild(h3Tag);
        articleTag.appendChild(pDescriptionTag);
        articleTag.appendChild(pDueDataTag);
        articleTag.appendChild(flexClassTag);

        openSectionElement.children[1].appendChild(articleTag);
        taskInputElement.value = '';
        descriptionInputElement.value = '';
        dueDataInputElement.value = '';

        redButtonTag.addEventListener('click', (e) => {
            articleTag.remove();
        });

        greenButtonTag.addEventListener('click', (e) => {
            inProgressSectionElement.children[1].appendChild(articleTag);


            let finishButton = createElement('button', 'Finish', 'orange');
            flexClassTag.removeChild(greenButtonTag);
            flexClassTag.appendChild(finishButton);

            greenButtonTag.remove();

            finishButton.addEventListener('click', (e) => {
                completeSectionElement.children[1].appendChild(articleTag);
                flexClassTag.remove();
            });
        });
    });
}