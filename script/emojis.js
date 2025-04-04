const searchInput = document.getElementById('insert-emoji-menu-first');
const resultsDiv = document.getElementById('emojis');

function renderResults(filter = '') {
    const emojis = showdown.helper.emojis;
    resultsDiv.innerHTML = '';

    const addedEmojis = new Set();

    Object.entries(emojis)
        .filter(([name]) => name.includes(filter))
        .forEach(([name, emoji]) => {
            if (addedEmojis.has(emoji)) return;
            addedEmojis.add(emoji);

            const btn = document.createElement('button');
            btn.className = 'emoji-btn';
            btn.textContent = emoji;
            btn.title = `:${name}:`;
            btn.onclick = () => {
                insert(`:${name}:`);
            };
            resultsDiv.appendChild(btn);
        });
}

searchInput.addEventListener('input', () => {
    renderResults(searchInput.value.trim());
});

renderResults();
