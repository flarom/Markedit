function insertTable() {
    let width = parseInt(prompt("Table width:"), 10);
    let height = parseInt(prompt("Table height:"), 10);
    let cellsize = parseInt(prompt("Cell size:"), 10);

    if (isNaN(width) || isNaN(height) || isNaN(cellsize) || width < 1 || height < 1 || cellsize < 1) {
        alert("Invalid input. Please enter positive numbers.");
        return;
    }

    let table = getMdTable(width, height, cellsize);
    insert(table);
}

function insertImage(){
    let src = prompt("Image URL/File path:");
    let alt = prompt("Brief image description:");

    let mdimg = "!["+alt+"]("+src+")";

    insert(mdimg);
}

function insertEmbUrl(){
    let label = prompt("Website name:");
    let url = prompt(label + "'s URL:")

    let mdurl = "["+label+"]("+url+")";

    insert(mdurl);
}

function insertDetails(){
    let label = prompt("Drawer name:");

    let htmldetails =
    "<details><summary>"+label+"</summary>\n"+
    "    \n"+
    "</details>";

    insert(htmldetails);
}

function insertSummary(){
    const documentDiv = document.getElementById("output");
    if (!documentDiv) return;

    const headers = documentDiv.querySelectorAll("h1, h2, h3, h4, h5, h6");
    if (headers.length === 0) return;

    let tocLines = [];
    
    headers.forEach(header => {
        const level = parseInt(header.tagName.substring(1)); // Obtém o número do h1, h2, h3...
        const text = header.textContent.trim();
        const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, ""); // Gera um ID baseado no texto
        header.id = id; // Define o ID para o cabeçalho

        const indent = " ".repeat((level - 1) * 4); // Indenta conforme o nível do título
        tocLines.push(`${indent}- [${text}](#${id})`);
    });

    if (tocLines.length > 0) {
        insert(tocLines.join("\n")); // Junta as linhas corretamente antes de inserir
    }
}

function getMdTable(width, height, cellsize) {
    let cell = " ".repeat(cellsize);
    let separator = ":".padEnd(cellsize, "-");
    
    let header = "|" + (cell + "|").repeat(width) + "\n";
    let separatorRow = "|" + (separator + "|").repeat(width) + "\n";
    let rows = (("|" + (cell + "|").repeat(width) + "\n").repeat(height));

    return header + separatorRow + rows;
}

function insert(string){
    const textarea = document.getElementById("input");
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    textarea.value = text.slice(0, start) + string + text.slice(end);

    textarea.selectionStart = textarea.selectionEnd = start + string.length;

    textarea.focus();
}