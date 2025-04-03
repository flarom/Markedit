function insertTable() {
    let width = parseInt(prompt("Table width:","2" ), 10);
    let height = parseInt(prompt("Table height:","2" ), 10);
    let cellsize = parseInt(prompt("Cell size:","5" ), 10);

    if (isNaN(width) || isNaN(height) || isNaN(cellsize) || width < 1 || height < 1 || cellsize < 3) {
        return;
    }

    let table = getMdTable(width, height, cellsize);
    insert(table);
}

function insertImage(){
    let src = prompt("Image URL/File path:"); if(src === null || src.trim() === "") return;
    let alt = prompt("Brief image description:"); if(alt === null || alt.trim() === "") alt = "No alt text provided.";

    let mdimg = "!["+alt+"]("+src+")";

    insert(mdimg);
}

function insertEmbUrl(){
    let label = prompt("Website name:"); if(label === null || label.trim() === "") label = "Website";
    let url = prompt(label + "'s URL:"); if(url === null || url.trim() === "") return;

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
        const level = parseInt(header.tagName.substring(1));
        const text = header.textContent.trim();
        const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
        header.id = id;

        const indent = " ".repeat((level - 1) * 4);
        tocLines.push(`${indent}- [${text}](#${id})`);
    });

    if (tocLines.length > 0) {
        insert(tocLines.join("\n"));
    }
}

function insertStyle(cssVar){
    let prefix = "<!-- document.style.";
    let value = prompt("Value for " + cssVar + ":");
    let suffix = "-->";

    if(value === null || value.trim() === "") return;

    insert(prefix + cssVar + "=" + value + suffix);
}

function insertPrompt(prefix, suffix, question){
    let ins = prompt(question);

    if(ins === null || ins.trim() === "") return;

    insert(prefix + ins + suffix);
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

function getMdTable(width, height, cellsize) {
    let cell = " ".repeat(cellsize);
    let separator = ":".padEnd(cellsize, "-");
    
    let header = "|" + (cell + "|").repeat(width) + "\n";
    let separatorRow = "|" + (separator + "|").repeat(width) + "\n";
    let rows = (("|" + (cell + "|").repeat(width) + "\n").repeat(height));

    return header + separatorRow + rows;
}

function insertYTVideo(){
    let prefix = `<iframe width="560" height="315" src="`;
    let value = formatYouTubeEmbed(prompt("YouTube URL:"));
    let suffix = `" title="YouTube video player" allowfullscreen></iframe>`;

    insert(prefix + value + suffix);
}

function formatYouTubeEmbed(url) {
    let regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/|live\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/;
    let match = url.match(regex);
    
    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
    } else {
        return "Unknown";
    }
}