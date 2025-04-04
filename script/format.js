function insertAround(prefix, suffix) {
    let textarea = document.getElementById("input")
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    let text = textarea.value;
    let selectedText = text.substring(start, end);
    
    textarea.value = text.substring(0, start) + prefix + selectedText + suffix + text.substring(end);
    
    textarea.selectionStart = textarea.selectionEnd = start + prefix.length + selectedText.length;
}

function formatBold(){
    insertAround("**", "**");
}

function formatItalic(){
    insertAround("*", "*");
}

function formatUnderline(){
    insertAround("__", "__");
}

function formatStriketrough(){
    insertAround("~~", "~~")
}

function formatSub(){
    insertAround("<sub>", "</sub>");
}

function formatSup(){
    insertAround("<sup>", "</sup>");
}