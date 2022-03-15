function getArticleGenerator(articles) {

    let outputElement = document.querySelector('#content');
    const articlesCopy = articles.slice();

    return () => {
        if (articlesCopy[0] !== undefined) {
            let articleElement = document.createElement('article');
            articleElement.innerHTML = articlesCopy.shift();
            outputElement.appendChild(articleElement);
        }
    }
}
