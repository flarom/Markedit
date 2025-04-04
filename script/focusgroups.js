document.addEventListener("DOMContentLoaded", function () {
    const focusGroups = document.querySelectorAll(".card #focus-group");
    
    focusGroups.forEach(focusGroup => {
        const focusableElements = Array.from(focusGroup.querySelectorAll("a, button"));
        const textarea = document.getElementById("input");

        focusGroup.addEventListener("keydown", function (event) {
            const currentIndex = focusableElements.indexOf(document.activeElement);

            if (focusableElements.length === 0) return;

            if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                event.preventDefault();
                const nextIndex = (currentIndex + 1) % focusableElements.length;
                focusableElements[nextIndex].focus();
            }

            if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                event.preventDefault();
                const prevIndex = (currentIndex - 1 + focusableElements.length) % focusableElements.length;
                focusableElements[prevIndex].focus();
            }

            if (event.key === "Enter") {
                event.preventDefault();
                document.activeElement.click();
            }

            if (event.key === "Escape") {
                textarea.focus();
                document.querySelectorAll(".card").forEach(card => {
                    card.style.display = "none";
                });
            }
        });
    });

    function focusFirstItem(menuId) {
        const firstElement = document.querySelector(`#${menuId} #focus-group a, #${menuId} #focus-group button`);
        if (firstElement) {
            firstElement.focus();
        }
    }

    window.focusFirstItem = focusFirstItem;
});