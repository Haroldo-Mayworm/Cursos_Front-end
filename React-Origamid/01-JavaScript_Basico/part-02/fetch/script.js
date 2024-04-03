/* fetch('https://ranekapi.origamid.dev/json/api/produto')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
    }); */

// --
async function fetchProdutos(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
}
fetchProdutos('https://ranekapi.origamid.dev/json/api/produto');
