document.addEventListener('DOMContentLoaded', () => {
    const addItemBtn = document.getElementById('addItemBtn');
    const itemNameInput = document.getElementById('itemName');
    const pantryList = document.getElementById('pantryList');

    addItemBtn.addEventListener('click', () => {
        const itemName = itemNameInput.value.trim();

        if (itemName) {
            const li = document.createElement('li');
            li.textContent = itemName;

            // Append new item to the list
            pantryList.appendChild(li);

            // Clear input field
            itemNameInput.value = '';

            // Trigger animation by forcing a reflow
            li.offsetHeight; // trigger reflow
            li.style.opacity = 1; // set opacity to start animation
        }
    });

    itemNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addItemBtn.click();
        }
    });
});
