document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.querySelector("textarea");
    
    textarea.addEventListener("keydown", function (e) {
        const { selectionStart: start, selectionEnd: end, value } = this;

        // tab adds identation
        if (e.key === "Tab") {
            e.preventDefault();
            if (e.shiftKey) {
                // shift+tab removes identation
                const before = value.substring(0, start);
                const after = value.substring(end);
                if (before.endsWith("\t")) {
                    this.value = before.slice(0, -1) + after;
                    this.selectionStart = this.selectionEnd = start - 1;
                }
            } else {
                this.value = value.substring(0, start) + "\t" + value.substring(end);
                this.selectionStart = this.selectionEnd = start + 1;
            }
        }

        // enter to autoident
        else if (e.key === "Enter") {
            e.preventDefault();
            const before = value.substring(0, start);
            const after = value.substring(end);
            const lastLineMatch = before.match(/(^|\n)([ \t]*)[^\n]*$/);
            const indent = lastLineMatch ? lastLineMatch[2] : "";
            this.value = before + "\n" + indent + after;
            this.selectionStart = this.selectionEnd = start + 1 + indent.length;
        }

        // ctrl+d to copy line
        else if (e.ctrlKey && e.key === "d") {
            e.preventDefault();
            const lines = value.split("\n");
            const lineIndex = value.substring(0, start).split("\n").length - 1;
            lines.splice(lineIndex + 1, 0, lines[lineIndex]);
            this.value = lines.join("\n");
            this.selectionStart = this.selectionEnd = start + lines[lineIndex].length + 1;
        }

        // ctrl+/ to comment line
        else if (e.ctrlKey && e.key === "/") {
            e.preventDefault();
            const lines = value.split("\n");
            let modifiedText = value;
            let cursorOffset = 0;

            const lineStart = value.lastIndexOf("\n", start) + 1;
            const lineEnd = value.indexOf("\n", end);
            const actualEnd = lineEnd === -1 ? value.length : lineEnd;
            const lineText = value.substring(lineStart, actualEnd).trim();

            if (lineText.startsWith("<!--") && lineText.endsWith("-->")) {
                // remove comment
                modifiedText = 
                    value.substring(0, lineStart) +
                    value.substring(lineStart, actualEnd).replace(/<!--\s?|\s?-->$/g, "") +
                    value.substring(actualEnd);
                cursorOffset = -5; // adjust cursor
            } else {
                // add comment
                modifiedText = 
                    value.substring(0, lineStart) +
                    `<!-- ${value.substring(lineStart, actualEnd)} -->` +
                    value.substring(actualEnd);
                cursorOffset = 5; // adjust cursor
            }

            this.value = modifiedText;
            this.selectionStart = this.selectionEnd = start + cursorOffset;
        }
    });
});
