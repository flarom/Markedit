function fileNew(){
    window.open('index.html', '_blank').focus()
}

function fileSave(){
    if (getDocumentTitle() == null || getDocumentTitle() == "" ) {
        let fileName = prompt("Document title:");
        if (fileName == null || fileName == "") return;
        setDocumentTitle(fileName);
    }

    const textarea = document.getElementById("input");
    if (!textarea) return;

    blinkTextArea();

    const content = textarea.value;
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });

    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = getDocumentTitle() + ".md";
    a.style.display = "none";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    URL.revokeObjectURL(a.href);

    updateTabTitle();
}

function fileOpen(){
    const input = document.createElement("input");
    input.type = "file";

    input.onchange = function(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = function(e) {
            const content = e.target.result;

            const textarea = document.getElementById("input");
            if (!textarea) return;

            textarea.value = content;
            setDocumentTitleFromFileName(file.name);
            updateTabTitle();
        };

        reader.readAsText(file);
    };

    input.click();
}

let documentTitle = "";

function getDocumentTitle() {
    if (documentTitle != null && documentTitle !== "") return documentTitle; // if documentTitle is not empty, returns the documentTitle

    const textarea = document.getElementById("input");
    if (!textarea) return "";

    const lines = textarea.value.split("\n");

    for (let line of lines) {
        if (line.startsWith("# ")) { // if it finds a line starting with '# ' - a title - returns the title
            return line.slice(2).trim();
        }
    }

    return lines[0]?.trim() || ""; // if it does not find a title, returns the first line of text, or a blank string
}

function setDocumentTitle(title) {
    documentTitle = title;
}

function setDocumentTitleFromFileName(filename){
    const nameWithoutExtension = filename.replace(/\.[^/.]+$/, "");
    setDocumentTitle(nameWithoutExtension);
}

const AUTOSAVE_KEY = "MarkeditAutosavedDocumentRaw";

function autoSave() {
    const textarea = document.getElementById("input");
    if (!textarea) return;

    const content = textarea.value;

    if (content !== "") {
        localStorage.setItem(AUTOSAVE_KEY, content);

        blinkTextArea();
        updateTabTitle();

        console.log("autosaved as: " + content);
    }
}

function loadFromStorage() {
    const textarea = document.getElementById("input");
    if (!textarea) return;

    const savedContent = localStorage.getItem(AUTOSAVE_KEY);
    if (savedContent !== null && savedContent !== "") {
        textarea.value = savedContent;
        updateMarkdown(savedContent);
    }
}

let timer = null;

function startAutoSaveTimer() {
    if (timer) clearTimeout(timer);
    timer = setTimeout(autoSave, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("input");
    if (textarea) {
        textarea.addEventListener("input", () => {
            startAutoSaveTimer();
        });
    }

    loadFromStorage(); // Carrega conteúdo salvo quando a página carrega
});


function updateTabTitle(){
    let title = getDocumentTitle() + " - Markedit";
    document.title = title;
}