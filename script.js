// Handle initial loading of page
document.addEventListener('DOMContentLoaded', function () {
    clearContents();
    loadPage();
})



const loadPage = () => {
    const contentRoot = document.getElementById("content-root");
    const form = `

    `
    contentRoot.innerHTML = form;
}

const clearContents = () => {
    const contentRoot = document.getElementById("content-root");
    const resultsRoot = document.getElementById("results-root");
    contentRoot.innerHTML = "";
    resultsRoot.innerHTML = "";
}


function compute()
{
    p = document.getElementById("principal").value;
}
        
